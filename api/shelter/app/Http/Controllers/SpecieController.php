<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Specie;
class SpecieController extends Controller
{
    public static function index(){
        $species = Specie::all();
        return $species;
    }
    public static function create(Request $request){
        return $request;
    }
}
