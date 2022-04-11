<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\PetController;
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
Route::group(["middleware" => ["auth:sanctum"]], function () {
    Route::post('/logout', [AuthController::class, "signOff"]);

    Route::post('/pets', [PetController::class, 'create']);
    Route::put('/pets/{id}', [PetController::class, 'update']);
    Route::delete('/pets/{id}', [PetController::class, 'delete']);

    Route::post('/species', [SpecieController::class, 'create']);
    Route::put('/species/{id}', [SpecieController::class, 'update']);
    Route::delete('/species/{id}', [SpecieController::class, 'delete']);

    Route::post('/breeds', [BreedController::class, 'create']);
    Route::put('/breeds/{id}', [BreedController::class, 'update']);
    Route::delete('/breeds/{id}', [BreedController::class, 'delete']);

    Route::post('/shelters', [ShelterController::class, 'create']);
    Route::put('/shelters/{id}', [ShelterController::class, 'update']);
    Route::delete('/shelters/{id}', [ShelterController::class, 'delete']);

    Route::post('/adoptions', [AdoptionController::class, 'create']);
    Route::put('/adoptions/{id}', [AdoptionController::class, 'update']);
    Route::delete('/adoptions/{id}', [AdoptionController::class, 'delete']);
});
Route::post('/login', [AuthController::class, "signIn"]);
Route::post('/register', [AuthController::class, "signUp"]);

Route::get('/pets', [PetController::class, 'index']);
Route::get('/pets/{pet}', [PetController::class, 'show']);

Route::get('/species', [SpecieController::class, 'index']);
Route::get('/species/{id}', [SpecieController::class, 'show']);

Route::get('/breeds', [BreedController::class, 'index']);
Route::get('/breeds/{id}', [BreedController::class, 'show']);

Route::get('/shelters', [ShelterController::class, 'index']);
Route::get('/shelters/{id}', [ShelterController::class, 'show']);

Route::get('/adoptions', [AdoptionController::class, 'index']);
Route::get('/adoptions/{id}', [AdoptionController::class, 'show']);
