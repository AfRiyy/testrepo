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
    public function create(Request $request){
        request()->validate([
            'name'=>'required',
            'species'=>'required',
            'age'=>'required',
            'gender'=>'required',
            'adopted'=>'required',
            'picturePath'=>'required',
        ]);
        return Pets::create([
            'name'=>request("name"),
            'species'=>request("species"),
            'age'=>request("age"),
            'gender'=>request("gender"),
            'adopted'=>request("adopted"),
            'picturePath'=>request("picturePath"),
        ]);
    }
}

