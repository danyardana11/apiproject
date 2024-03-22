<?php

namespace App\Http\Controllers;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

use App\Http\Middleware\json;
use App\Notifications\{VerifyEmailNotification,CustomResetPasswordNotification};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
// use Hash;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Validated;
use Illuminate\Auth\Events\Verified;
 use Illuminate\Support\Facades\Password;

use Illuminate\Support\Str;
use Nette\Utils\Strings;

use function Laravel\Prompts\password;

class authenticate extends Controller
{


public function register(Request $request){
 
    $validator = Validator::make($request->all(), [
               
       'name' => ['required', 'string', 'max:255'],
       'phoneNum' => ['required', 'min:11', 'unique:users'],
       'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
       'password' => ['required', 'string', 'min:8',],]);
   
     if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 402);
        }else{

        $user = User::create([
        'name' => $request->name,
        'phoneNum' => $request->phoneNum,
        'email' => $request->email,
        'address'=>$request->address,
        'password' => Hash::make($request->password),
        'email_verified_at'=>NULL,
        'role'=>'user',    
    
    ]);
           
     do {
        $hash = Str::random(40);
        }
     while (User::where('verification_hash', $hash)->exists());// bo awae dubarae nakatawa har jarekw hasheke nweman pe bdat 
           
        $id=$user->id;
        $user->verification_hash = $hash;
        $user->save();
        $user->notify(new VerifyEmailNotification($hash,$id));// la clase veryfication    hardw id hash akaen ba constracture bo awae la emelaka benerenawa   
   
    
     return response()->json([
        'Token'=> $user->createToken('authToken')->plainTextToken,// toknekman bo drwst akat    
        'user'=>$user, ]);// datae aw usera ahenetawa
   
        }
    }   




    public function verify(Request $request){

        $user= User::findOrFail($request->id);
    
        if($user->hasVerifiedEmail()){
    
    return response()->json("user allredy verified",200);
    }else
    {
       
        if(!hash_equals((String) $request->hash,$user->verification_hash)){// aw hashae ka aeneren boy ka la emailakawa detawa lagal aw hashae ka lanaw database haya 
    
          return response()->json("invalid verification code",401);
    
    }else{
    if($user->markEmailAsVerified())
    event(new Verified($user));
    return response()->json("email verified successfully",200);}}}
  

public function logout(Request $request){
$request->user()->tokens()->delete();      // wata aw userae hamana hamw toknakane bsrawa 
                                          // kate ema login akaen har jarek ka login bkain komalek token  drwst aka boya ema pewesta aw toknana bsrinawa 
return  response()->json(['success'=>'logged out successfully '],200);



}


 public function login(Request $request){

$validator=validator::make($request->all(),[
    
        'email'=> 'required|email|exists:users,email',
        'password'=> 'required',    ]);

    if(!$validator->fails()){
   
    $user=User::where('email',$request->email)->first();
         


    if(Hash::check($request->password,$user->password)){
    return response()->json([
    'Token'=> $user->createToken('authToken')->plainTextToken,// toknekman bo drwst akat    
    'user'=>$user,// datae aw usera ahenetawa 

]);

    }else
     {
        return  response()->json(["error"=>['password'=>__('auth.failed')]],404);

      }
    
         }
        else
         {
         return  response()->json(["error"=>$validator->errors()->all()],404);

         }


 }

 public function forget(Request $request)
 {
     $validator = Validator::make($request->all(), [
         'email' => 'required|email',
     ]);
 
     if ($validator->fails()) {
         return response()->json(["error" => $validator->errors()->all()], 401);
     }
 
     $user = User::where('email', $request->email)->first();
 
     if (!$user) {
         return response()->json(["error" => "User not found"], 404);
     }
 
     // Generate a password reset token
     $token = Password::getRepository()->create($user);
 
     // Send the password reset notification
     $user->notify(new CustomResetPasswordNotification($token));
 
     return response()->json(["success" => "Password reset link sent"], 200);
 }



 

 public function reset(Request $request) {
    $validator = Validator::make($request->all(), [
        'token' => 'required',
        'email' => 'required|email|exists:users,email',
        'password' => 'required|min:6',
    ]);
    

    if (!$validator->fails()) {
        $status = Password::reset(
            $request->only('email', 'password', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();
                $user->tokens()->delete();
                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return response()->json(["success" => __("Password reset successfully!")], 200);
        } else {
            return response()->json(["error" => __("Something went wrong!")], 401);
        }
    } else {
        return response()->json(["error" => $validator->errors()->all()], 401);
    }
}





public function change_password(Request $request){
    $validator = Validator::make($request->all(), [
        'OldPassword' => 'required|min:8',
        'NewPassword' => 'required|min:8',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()->all()], 401);
    }

    $IdUser = $request->IdUser;
    $user = User::findOrFail($IdUser);

    // Check if the old password matches
    if (Hash::check($request->OldPassword, $user->password)) {
        // Hash and save the new password
        $newPassword=Hash::make($request->NewPassword);
        $user->password = $newPassword;
        $user->save();
        return response()->json(['success' => true], 200);
    } else {
        // Old password doesn't match
        return response()->json(['error' => 'OldPassword is incorrect.'], 404);
    }
}





public function change_profile(Request $request){
    $validator=Validator::make($request->all(),[
       // 'image' => 'image|mimes:jpeg,png,jpg',
        'name'=>'required',
        'PhoneNum'=>'required|min:11',
    ]);
  
        
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], 401);
        }

        $IdUser = $request->IdUser;
        $user = User::findOrFail($IdUser);

        if($IdUser){
        $user->name = $request->input('name', $user->name);
        $user->PhoneNum = $request->input('PhoneNum', $user->PhoneNum);

        if ($request->hasFile('image')) {
            $manager = new ImageManager(new Driver());
            $filename = time() . rand() . '.' . $request->image->getClientOriginalExtension();
            $img = $manager->read($request->image);
            $img->save(public_path("Uploads/property/$filename"));

            if ($user->image) {
                $imagePath = public_path("Uploads/property/{$user->image}");
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }
            }

            $user->image = $filename;
        }

        $user->save();
        return response()->json(['success' => true], 200);
    } else {
        return response()->json(['error' => 'user not found'], 404);
    

        }
        

}



}