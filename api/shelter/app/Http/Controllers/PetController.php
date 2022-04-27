<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseController as BaseController;
use App\Models\Pet;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PetController extends BaseController
{
    public function index()
    {
        $pets = DB::table('pets')
            ->join('breeds', 'pets.breeds_id', '=', 'breeds.id')
            ->join('species', 'breeds.species_id', '=', 'species.id')
            ->select('pets.id', 'name', 'bname', 'sname', 'age', 'gender', 'adopted', 'shelters_id', 'picture_path', 'neutered')
            ->get();
        foreach($pets as $pet){
            $pet->picture_path = asset($pet->picture_path);
        }
        return $this->sendResponse($pets, 'Pets fetched');
    }
    public function show($id)
    {
        $pet = DB::table('pets')
            ->join('breeds', 'pets.breeds_id', '=', 'breeds.id')
            ->join('species', 'breeds.species_id', '=', 'species.id')
            ->select('pets.id', 'name', 'bname', 'sname', 'age', 'gender', 'adopted', 'shelters_id', 'picture_path', 'neutered')
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
            'image' => 'mimes:jpeg,jpg,png'
        ]);
        if ($validator->fails()) {
            return $this->sendError("Error validation", $validator->errors());
        }
        $path = '';
        if ($request->hasFile('image')) {
            $filePath = 'public/images/' . $request['name'] . '/';
            $extension = $request->file('image')->guessExtension();
            Storage::putFileAs($filePath, $request['image'], $request['name'] . '.' . $extension);
            $path = 'storage/images/' . $request['name'] . '/' . $request['name'] . '.' . $extension;
        }
        $bname = $request['bname'];
        $breeds_id = DB::table('breeds')->select('id')->where('bname', '=', $bname)->get();
        try {
            $query = Pet::create([
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

        if ($request->hasFile('image') && $request['file'] != '') {
            $filePath = DB::table("pets")->select("picture_path")->where("id", "=", $id)->get();
            Storage::delete($filePath[0]->picture_path);
            $filePath = 'images/' . $request['name'] . '/';
            $extension = $request->file('image')->guessExtension();
            $files = Storage::allFiles($path);;
            Storage::putFileAs($filePath, $request['image'], $request['name'] . '.' . $extension);
            $path = 'images/' . $request['name'] . '/' . $request['name'] . '.' . $extension;
        }
        try {
            $breeds_id = DB::table('breeds')->select('id')->where("bname", "=", $request['bname'])->first();
            $query = DB::table('pets')
                ->where("id", "=", $id)
                ->update([
                    'name' => (string)request('name'),
                    'breeds_id' => $breeds_id->id,
                    'age' => (string)request('age'),
                    'gender' => (string)request('gender'),
                    'adopted' => (string)request('adopted'),
                    'shelters_id' => (string)request('shelters_id'),
                    'picture_path' => (string)$path,
                    'neutered' => (bool)$request['neutered']
                ]);
            if ($query == 1) {
                return $this->sendResponse($query, 'Pet updated!');
            } else {
                return $this->sendResponse($query, 'Pet not updated!');
            }
        } catch (\Throwable $th) {
            return $this->sendError("Error in updation of pet", $request->all());
        }
    }
    public function delete($id)
    {
        try {
            $pet = Pet::destroy($id);
            if ($pet) {
                return $this->sendResponse('', 'Pet deleted!');
            } else {
                return $this->sendResponse('', 'Pet already deleted!');
            }
        } catch (\Throwable $th) {
            return $this->sendError("Adopted pet cannot be deleted!", $th);
        }
    }
}
