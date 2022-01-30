<?php

namespace App\Http\Controllers;

use Adoptions;
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
use App\Models\Adoption;

class PetsController extends BaseController
{
    public function index()
    {
        $pets = DB::table('pets')
            ->join('breeds', 'pets.breeds_id', '=', 'breeds.id')
            ->join('species', 'breeds.species_id', '=', 'species.id')
            ->select('pets.id', 'name', 'bname', 'sname', 'age', 'gender', 'adopted', 'shelters_id', 'picture_path', 'neutered', 'created_at', 'updated_at')
            ->get();
        return $this->sendResponse($pets, 'Pets fetched');
    }
    public function show($id)
    {
        $pet = DB::table('pets')
            ->join('breeds', 'pets.breeds_id', '=', 'breeds.id')
            ->join('species', 'breeds.species_id', '=', 'species.id')
            ->select('pets.id', 'name', 'bname', 'sname', 'age', 'gender', 'adopted', 'shelters_id', 'picture_path', 'neutered', 'created_at', 'updated_at')
            ->where('pets.id', '=', $id)
            ->get();
        if ($pet->isNotEmpty()) {
            return $this->sendResponse($pet, 'Pet fetched');
        } else {
            return $this->sendError("Error fetching pet", '');
        }
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'bname' => 'required',
            'age' => 'required',
            'gender' => 'required',
            'adopted' => 'required',
            'shelters_id' => 'required',
            'neutered' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->sendError("Error validation", $validator->errors());
        }
        $path = '';
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_name = $image->getClientOriginalName();
            $destination_path = 'public/images/' . $request('name') . '/';
            $path = $request->file('image')->storeAs($destination_path, $image_name);
            $input['image'] = $image_name;
        }
        $bname = $request['bname'];
        $breeds_id = DB::table('breeds')->select('id')->where('bname', '=', $bname)->get();
        try {
            $query = Pets::create([
                'name' => request('name'),
                'breeds_id' => $breeds_id[0]->id,
                'age' => request('age'),
                'gender' => request('gender'),
                'adopted' => request('adopted'),
                'shelters_id' => request('shelters_id'),
                'picture_path' => $path,
                'neutered' => request('neutered'),
            ]);
            return $this->sendResponse($query, 'Pet sucessfully created!');
        } catch (\Throwable $th) {
            return $this->sendError("Error in creation of pet", $th);
        }
    }
    public function update(Request $request, $id)
    {
        $path = '';
        $breeds_id = DB::table('breeds')->select('id')->where('bname', '=', $request['bname'])->get();
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_name = $image->getClientOriginalName();
            $destination_path = 'public/images/' . $request('name') . '/';
            $path = $request->file('image')->storeAs($destination_path, $image_name);
            $input['image'] = $image_name;
        }
        try {
            $query = DB::table('pets')
                ->join('breeds', 'pets.breeds_id', '=', 'breeds.id')
                ->join('species', 'breeds.species_id', '=', 'species.id')
                ->select('pets.id', 'name', 'bname', 'sname', 'age', 'gender', 'adopted', 'shelters_id', 'picture_path', 'neutered', 'created_at', 'updated_at')
                ->where('pets.id', '=', $id)
                ->update([
                    'name' => request('name'),
                    'breeds_id' => $breeds_id[0]->id,
                    'age' => request('age'),
                    'gender' => request('gender'),
                    'adopted' => request('adopted'),
                    'shelters_id' => request('shelters_id'),
                    'picture_path' => $path,
                    'neutered' => request('neutered')
                ]);
            return $this->sendResponse($request->all(), 'Pet updated!');
        } catch (\Throwable $th) {
            return $this->sendError("Error in updation of pet", $th);
        }
    }
    public function delete($id)
    {
        try {
            Pets::destroy($id);
            return $this->sendResponse('', 'Pet deleted!');
        } catch (\Throwable $th) {
            return $this->sendError("Adopted pet cannot be deleted!", $th);
        }
    }
    public function storeImage(Request $request)
    {
        $input = $request->all();
        if ($request->hasFile('image')) {
            $destination_path = 'public/images';
            $image = $request->file('image');
            $image_name = $image->getClientOriginalName();
            $path = $request->file('image')->storeAs($destination_path, $image_name);
            $input['image'] = $image_name;
            return 'public/images/' . $image_name;
        }
    }
}
