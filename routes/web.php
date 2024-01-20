<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\WorkController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return Inertia::render('Guest/Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
});



/**
 * 管理画面ルーティング
 */
Route::middleware(['auth', 'verified'])
  ->get('admin/dashboard', [DashboardController::class, 'index'])
  ->name('admin.dashboard');

Route::prefix('admin/works')
  ->middleware(['auth'])
  ->controller(WorkController::class)
  ->name('admin.works.')
  ->group(function () {
    Route::get('/', 'index')->name('index');
  });

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
