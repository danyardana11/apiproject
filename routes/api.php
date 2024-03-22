<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\{productControler,authenticate,admincontroller,favorate_controler};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware'=>['json']],function(){

    Route::get('product_filter_name', [productControler::class, 'product_filter_name']);
    Route::get('product_category_name', [productControler::class, 'product_category_name']);
    Route::get('filter', [productControler::class, 'filter']);
    Route::get('/producted/{id}', [productControler::class, 'single_product']);
    Route::get('verify-email/{id}/{hash}', [authenticate::class, 'verify'])->name('verification.verifyEmail');
 
    Route::group(['middleware' => ['auth:sanctum', 'role:user']], function(){

        Route::get('/fav_us_pro_set', [favorate_controler::class, 'fav_us_pro_set']);
        Route::get('/fav_us_pro_get', [favorate_controler::class, 'fav_us_pro_get']);
        Route::get('/shop_us_pro_set', [productControler::class, 'shop_us_pro_set']);
        Route::get('/shop_us_pro_get', [productControler::class, 'shop_us_pro_get']);
        Route::post('/shop', [productControler::class, 'shop']);
        Route::post('/logout', [authenticate::class, 'logout']);
        Route::post('profile', [authenticate::class, 'change_profile']);
        Route::post('/search', [productControler::class, 'search']);
        Route::post('ChangePassword',[authenticate::class,'change_password']);
    });


    Route::group(['middleware' => ['auth:sanctum', 'role:admin']], function(){
        Route::post('/logout', [authenticate::class, 'logout']);
        Route::post('insert', [AdminController::class, 'insert']);
        Route::post('delete',[AdminController::class,'Delete']);
        Route::post('update',[AdminController::class,'update']);
    });

    Route::post('/register',[authenticate::class,'register']);
    Route::post('/login', [authenticate::class, 'login']);
    Route::post('/forget', [authenticate::class, 'forget']);
    Route::post('/reset-password', [authenticate::class, 'reset'])->name('password.reset.api');

});

































        // Route::post('upload', [admincontroller::class, 'uploadImages']);

//  Route::group(['middleware'=>['json']],function(){

//     Route::get('product_filter', [productControler::class, 'product_filter']);// to get product according to filter 
//     Route::get('filter', [productControler::class, 'filter']);// to  get all filter 
//     Route::get('product', [productControler::class, 'product']);// to get all product// labashi product sieason zeadkain   bo filterkrdn  
//     Route::get('/producted/{id}', [productControler::class, 'single_product']);//  to get single product 
//     Route::get('verify-email/{id}/{hash}', [authenticate::class, 'verify'])->name('verification.verifyEmail');//bo veryfiy krdne emela
 
//     Route::group(['middleware'=>['auth:sanctum']],function(){
//     Route::get('/fav_us_pro_set', [favorate_controler::class, 'fav_us_pro_set']);// to set all favorate       
//     Route::get('/fav_us_pro_get', [favorate_controler::class, 'fav_us_pro_get']);// to get all favorate         // to get get  any product if user buy  it favorate_delete
//     Route::get('/shop_us_pro_set', [productControler::class, 'shop_us_pro_set']);// to set all favorate       
//     Route::get('/shop_us_pro_get', [productControler::class, 'shop_us_pro_get']);
   
//     Route::post('/shop', [productControler::class, 'shop']);// to search product 
//     Route::post('/logout', [authenticate::class, 'logout']);// to search product 
//     Route::post('upload', [admincontroller::class, 'uploadImages']);
//     Route::post('insert', [admincontroller::class, 'insert']);

//     Route::post('delete',[admincontroller::class,'Delete']);
//     Route::post('update',[admincontroller::class,'update']);// imagem mawa 
// });
   
//     Route::post('register',[authenticate::class,'register']);
//     Route::post('/login', [authenticate::class, 'login']);// to search product 
//     Route::post('/search', [productControler::class, 'search']);// to search product 
//     Route::post('forget', [authenticate::class, 'forget']);// to search product 
//     // Route::post('reset', [authenticate::class, 'reset']);// to search product 
//     Route::post('/reset-password', [authenticate::class, 'reset'])->name('password.reset');





// });



    // Route::get('verification.verify', [authenticate::class, 'verify'])->name('verification.verify');
    // Route::get('/user_favorate', [productControler::class,'user_favorate']);// to get get  any product if user love  it 
    // Route::get('/user_shop', [productControler::class, 'user_shop']);
    // Route::get('favorate', [productControler::class, 'favorate']);// to get all product  // zeada   
    //Route::get('/f_delete', [productControler::class, 'removeFavorite']);// to get all product       
    // Route::post('update',[admincontroller::class,'update']);




















