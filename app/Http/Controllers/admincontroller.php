<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;
use App\Models\{product,images, User};
use Illuminate\Support\Facades\Validator;

class admincontroller extends Controller
{

    // Inserting a product
    public function insert(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg',
            'name' => 'required|max:20',
            'title' => 'required|max:100|min:3',
            'price' => 'required|integer',
            'filter_name' => 'required|exists:filters,name',
        ]);

        if (!$validator->fails()) {
            $manager = new ImageManager(new Driver());
            $filename = time() . rand() . '.' . $request->image->getClientOriginalExtension();
            $img = $manager->read($request->image);
            $img->save(public_path("Uploads/property/$filename"));

            Product::insert([
                'filter_name' => $request->filter_name,
                'category_name' => $request->category_name,
                'name' => $request->name,
                'title' => $request->title,
                'price' => $request->price,
                'image' => $filename,
            ]);

            return response()->json(['success' => true], 200);
        } else {
            return response()->json(['error' => $validator->errors()->all()], 401);
        }
    }

    // Deleting a product
    public function Delete(Request $Request)
    {
        $idu = $Request->idu;
        $id = User::findOrFail($idu);
        // if ($id->role == 'Admin') {
            $idp = $Request->idp;
            $dpr = Product::find($idp);

            if ($dpr) {
                $imagePath = public_path("Uploads/property/{$dpr->image}");
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }

                $dpr->delete();
                return response()->json(['message' => 'Delete successful'], 200);
            } else {
                return response()->json(['error' => 'Product not found'], 404);
            }
        // } else {
        //     return response()->json(['error' => 'This is not an authenticated ADMIN'], 401);
        // }
    }

    // Updating a product
    public function update(Request $request)
    {
        $idu = $request->idu;
        $user = User::findOrFail($idu);

            $idp = $request->idp;
            $product = Product::find($idp);

            if ($product) {
                $validator = Validator::make($request->all(), [
                    'image' => 'image|mimes:jpeg,png,jpg',
                    'name' => 'max:20',
                    'title' => 'max:100|min:3',
                    'price' => 'integer',
                    'category_name' => 'exists:categories,name',
                ]);

                if ($validator->fails()) {
                    return response()->json(['error' => $validator->errors()->all()], 401);
                }

                $product->name = $request->input('name', $product->name);
                $product->price = $request->input('price', $product->price);
                $product->title = $request->input('title', $product->title);
                $product->filter_name = $request->input('filter_name', $product->filter_name);
                $product->category_name = $request->input('category_name', $product->category_name);

                if ($request->hasFile('image')) {
                    $manager = new ImageManager(new Driver());
                    $filename = time() . rand() . '.' . $request->image->getClientOriginalExtension();
                    $img = $manager->read($request->image);
                    $img->save(public_path("Uploads/property/$filename"));

                    if ($product->image) {
                        $imagePath = public_path("Uploads/property/{$product->image}");
                        if (file_exists($imagePath)) {
                            unlink($imagePath);
                        }
                    }

                    $product->image = $filename;
                }

                $product->save();

                return response()->json(['success' => true], 200);
            } else {
                return response()->json(['error' => 'Product not found'], 404);
            }
    }
}


