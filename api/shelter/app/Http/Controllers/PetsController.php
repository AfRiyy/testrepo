<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseController as BaseController;
use App\Models\Pets;
use App\Models\Breed;
use App\Models\Specie;
use Validator;
use App\Http\Resources\Pet as PetResources;
use Illuminate\Support\Facades\DB;
use Storage;
use Illuminate\Support\Facades\Input;
class PetsController extends BaseController
{
    public function index(){
        $pets = DB::table('pets')
            ->join('breeds','pets.breeds_id','=','breeds.id')
            ->join('species','breeds.species_id','=','species.id')
            ->select('pets.id','name','bname','sname','age','gender','adopted','shelters_id','picture_path','neutered','created_at','updated_at')
            ->get();
        return $this->sendResponse($pets, "Pets fetched");
    }

    public function create(Request $request){
        request()->validate([
            'name'=>'required',
            'breeds_id'=>'required',
            'age'=>'required',
            'gender'=>'required',
            'adopted'=>'required',
            'picture_path'=>'required',
            'neutered'=>'required',
        ]);
        $image = Input::file('image');
        if ($image) {
            $filename = date('Y-m-d-H:i:s')."-".$image->name;
            Image::make($image->getRealPath())->resize(500, 500)->save('public/images/'.request("name").date('Y-m-d-H:i:s').'/'.$filename);
        }
        // return Pets::create([
        //     'name'=>request("name"),
        //     'species'=>request("species"),
        //     'age'=>request("age"),
        //     'gender'=>request("gender"),
        //     'adopted'=>request("adopted"),
        //     'picture_path'=>request("picture_path"),
        // ]);
    }
    public function update(Request $request, $id){
        $query = Pets::find($id)->update([
                'name'=>request("name"),
                'species'=>request("species"),
                'age'=>request("age"),
                'gender'=>request("gender"),
                'adopted'=>request("adopted"),
                'picture_path'=>request("picture_path"),
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
    public function storeImage(Request $request){
        $input = $request->all();
        if($request->hasFile('image')){
            $destination_path = 'public/images';
            $image = $request->file('image');
            $image_name = $image->getClientOriginalName();
            $path = $request->file('image')->storeAs($destination_path,$image_name);
            $input['image']= $image_name;
            return 'public/images/'.$image_name;
        }
    }
}

