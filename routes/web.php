<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

/*Route::get('/', function () {
    return view('welcome');
});*/

Route::get('/', function () {
    return view('usuarios.index');
});

Route::get('/usuarios/refresh', [UsuarioController::class, 'getAll'])->name('reloadDatatable');
Route::get('/usuarios/{id}', [UsuarioController::class, 'show'])->name('showUsuario');
Route::post('/usuarios/store', [UsuarioController::class, 'store'])->name('storeUsuario');
Route::put('/usuarios/put/{id}', [UsuarioController::class, 'update'])->name('putUsuario');
Route::delete('/usuarios/delete/{id}', [UsuarioController::class, 'destroy'])->name('deleteUsuario');
