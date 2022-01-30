<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shelter;
use Validator;

class ShelterController extends BaseController
{
    public function index()
    {
        try {
            $shelters = Shelter::all();
            return $this->sendResponse($shelters, 'Shelters successfully fetched.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in fetching of shelters", $th);
        }
    }
    public function show($id)
    {
        try {
            $shelter = Shelter::find($id);
            return $this->sendResponse($shelter, 'Shelter successfully fetched.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in fetching of shelter", $th);
        }
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'shelter_name' => 'required',
            'shelter_address' => "required",
            'shelter_phone' => 'required',
            'shelter_website' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->sendError("Error validation", $validator->errors());
        }
        try {
            $query = Shelter::create($request->all());
            return $this->sendResponse($query, 'Shelter successfully created.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in creation of shelter", $th);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $shelter = Shelter::find($id);
            $shelter->update($request->all());
            return $this->sendResponse($shelter, 'Shelter successfully updated.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in updation of shelter", $th);
        }
    }
    public function delete($id)
    {
        try {
            Shelter::destroy($id);
            return $this->sendResponse('', 'Shelter successfully deleted.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in deletion of shelter", $th);
        }
    }
}
