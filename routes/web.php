<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Auth::routes();

Route::middleware('auth')->group(function(){
    Route::get('/events', [HomeController::class, 'index'])->name('events');
    Route::get('/events/data', [HomeController::class, 'data'])->name('events.data');
    Route::get('/events/{id}', [HomeController::class, 'show'])->name('events.edit');
    Route::get('/create', [HomeController::class, 'create'])->name('create');
    Route::post('/events/store', [HomeController::class, 'store'])->name('events.store');
    Route::post('/events/{id}/edit', [HomeController::class, 'update'])->name('events.update');
    Route::delete('/events/{id}', [HomeController::class, 'destroy'])->name('events.destroy');

    Route::get('/externalApi', [HomeController::class, 'externalApi'])->name('externalApi');
});

