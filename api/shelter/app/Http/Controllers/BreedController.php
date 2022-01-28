<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Breed;
class BreedController extends Controller
{
    public static function index(){
        $breeds = Breed::all();
        return $breeds;
    }
}
