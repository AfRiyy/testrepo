<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Breed;
use Validator;

class BreedController extends BaseController
{
    public function index()
    {
        try {
            $breeds = Breed::all();
            return $this->sendResponse($breeds, 'Breeds successfully fetched.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in fetching of breeds", $th);
        }
    }
    public function show($id)
    {
        try {
            $breed = Breed::find($id);
            return $this->sendResponse($breed, 'Breed successfully fetched.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in fetching of breed", $th);
        }
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'bname' => 'required',
            'species_id' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError("Error validation", $validator->errors());
        }
        try {
            $breed = Breed::create($request->all());
            return $this->sendResponse($breed, 'Breed successfully created.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in creation of breed", $th);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $breed = Breed::findOrFail($id);
            $breed->update($request->all());
            return $this->sendResponse($breed, 'Breed successfully updated.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in updating of breed", ['id' => $id]);
        }
    }
    public function delete($id)
    {
        try {
            Breed::destroy($id);
            return $this->sendResponse('', 'Breed successfully deleted.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in deleting of breed", $th);
        }
    }
    public function breedBySpecie($species_id)
    {
        try {
            $breeds = DB::table('breeds')
                ->select('bname')
                ->where('species_id', '=', $species_id)
                ->get();
            return $this->sendResponse($breeds, 'Breed successfully fetched by specie.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in fetching breed", $th);
        }
    }
}
