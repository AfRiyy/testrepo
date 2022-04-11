<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Specie;
use Validator;

class SpecieController extends BaseController
{
    public function index()
    {
        try {
            $species = Specie::all();
            return $this->sendResponse($species, 'Species successfully fetched.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in fetching of species", $th);
        }
    }
    public function show($id)
    {
        try {
            $breed = Specie::find($id);
            return $this->sendResponse($breed, 'Specie successfully fetched.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in fetching of specie", $th);
        }
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'sname' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->sendError("Error validation", $validator->errors());
        }
        try {
            $specie = Specie::create($request->all());
            return $this->sendResponse($specie, 'Specie successfully created.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in creation of specie", $th);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $specie = Specie::find($id);
            $specie->update($request->all());
            return $this->sendResponse($specie, 'Specie successfully updated.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in updating of specie", $th);
        }
    }
    public function delete($id)
    {
        try {
            $specie = Specie::destroy($id);
            if ($specie) {
                return $this->sendResponse($id, 'Specie successfully deleted.');
            } else {
                return $this->sendError("This specie is not exist in the database.", '');
            }
        } catch (\Throwable $th) {
            return $this->sendError("This specie is used by a breed.", $th);
        }
    }
}
