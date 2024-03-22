<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\{favorate, filter, product, images, shop_user, User, shop, favorate_user};

class productControler extends Controller
{   
    public function search(Request $request)
    {
        return response()->json(['search' => product::Ofsearch($request->search)->get()]);
    }

    public function single_product(Request $request)
    {
        return response()->json(['singleProduct' => product::where('id', $request->id)->get()]);
    }

    public function filter()
    {
        return response()->json(['filter' => filter::all()]);
    }

    // public function product_filter(Request $request)
    // {
    //     $product = product::Offilter($request->filter_id)->get();
    //     return response()->json(["product"=>$product]);
    // }
    public function product_category_name(Request $request)
    {
        $product = product::Offcategory_name($request->category_name)->get();
        return response()->json(["product_category"=>$product]);
    }

    
    public function product_filter_name(Request $request)
    {
        $product = product::Offilter_name($request->filter_name)->get();
        return response()->json(["product_filter"=>$product]);
    }


    public function shop(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:20',
            'title' => 'required|max:100|min:3',
            'price' => 'required|integer',
            'user_id' => 'required',
            'shop_id' => 'required',
        ]);
        
        if (!$validator->fails()) {
            shop::insert([
                'name' => $request->name,
                'title' => $request->title,
                'price' => $request->price,
                'Discound' => $request->Discound,
                'Quantity' => $request->Quantity,
                'id_user' => $request->id_user,
                'id_shop' => $request->id_shop,
            ]);
            return response()->json(['success' => true], 200);
        } else {
            return response()->json(['error' => $validator->errors()->all()], 401);
        }
    }

    public function shop_us_pro_set(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'shop_id' => 'required',
                'user_id' => 'required',
            ]
        );

        if (!$validator->fails()) {
            $existingEntry = shop_user::where('id_user', $request->user_id)
                ->where('id_shop', $request->shop_id)
                ->first();

            if ($existingEntry) {
                shop_user::where('id_user', $request->user_id)
                    ->where('id_shop', $request->shop_id)
                    ->delete();
                return response()->json(['delete successfully' => true], 200);
            } else {
                shop_user::insert([
                    'id_user' => $request->user_id,
                    'id_shop' => $request->shop_id,
                ]);
                return response()->json(['error' => 'exists successfully.'], 401);
            }
        } else {
            return response()->json(['error' => $validator->errors()->all()], 401);
        }
    }

    public function shop_us_pro_get(Request $request)
    {
        $userFavorites = shop_user::where('id_user', $request->id)->pluck('id_shop')->toArray();
        return response()->json(['products' => product::whereIn('id', $userFavorites)->get()]);
    }
}
