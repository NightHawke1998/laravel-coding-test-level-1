<?php

use App\Http\Controllers\Api\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('v1')->group(function () {

    Route::prefix('events')->group(function () {
        Route::get('', [EventController::class, 'index']);
        Route::get('/active-events', [EventController::class, 'activeEvents']);
        Route::get('/{event:slug}', [EventController::class, 'show']);
        Route::post('', [EventController::class, 'store']);
        Route::put('/{event:slug}', [EventController::class, 'update']);
        Route::patch('/{event:slug}', [EventController::class, 'patch']);
        Route::delete('/{event:slug}', [EventController::class, 'destroy']);
    });
});
