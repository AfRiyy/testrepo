<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Pets;
use App\Http\Controllers\PetsController;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Cookie;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/pets',[PetsController::class,'index']);
Route::post('/pets',[PetsController::class,'create']);
Route::put('/pets/{pet}',[PetsController::class,'update']);
Route::delete('/pets/{pet}',[PetsController::class,'delete']);