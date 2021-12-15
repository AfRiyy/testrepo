<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pets;
class PetsController extends Controller
{
    public function index(){
        $pets = Pets::all();
        return $pets;
    }
}

