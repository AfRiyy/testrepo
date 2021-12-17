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
    public function update(Request $request, $id){
        $query = Pets::find($id)->update([
                'name'=>request("name"),
                'species'=>request("species"),
                'age'=>request("age"),
                'gender'=>request("gender"),
                'adopted'=>request("adopted"),
                'picturePath'=>request("picturePath"),
        ]);
        if($query){
        return response()->json([
            'status'=>'successful',
            'id:'=>$id,
            'message' => 'Pet sucessfully updated!'
        ]);
        }
        else{
            $returnData = array(
                'status' => 'error',
                'id:'=>$id,
                'message' => 'An error occurred!'
            );
            return response()->json($returnData, 500);
        }
    }
}

