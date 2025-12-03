<?php
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::resource('posts', PostController::class);
Route::get('/', [PostController::class, 'index'])->name('home');
Route::inertia('about', 'About')->name('about');

require __DIR__.'/settings.php';