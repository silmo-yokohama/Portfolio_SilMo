<?php

use App\Http\Controllers\API\WorkOptionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});


Route::post('/add-category', [WorkOptionController::class, 'storeCategory']);
Route::get('/get-categories', [WorkOptionController::class, 'getCategories']);

Route::post('/add-tag', [WorkOptionController::class, 'storeTag']);
Route::get('/get-tags', [WorkOptionController::class, 'getTags']);

Route::post('/add-skill', [WorkOptionController::class, 'storeSkill']);
Route::get('/get-skills', [WorkOptionController::class, 'getSkills']);
