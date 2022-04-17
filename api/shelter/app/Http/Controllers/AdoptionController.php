<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Adoption;
use Validator;

class AdoptionController extends BaseController
{
    public function index()
    {
        try {
            $adoptions = Adoption::all();
            return $this->sendResponse($adoptions, 'Adoptions successfully fetched.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in fetching of adoptions", $th);
        }
    }
    public function show($id)
    {
        try {
            $adoption = Adoption::find($id);
            return $this->sendResponse($adoption, 'Adoption successfully fetched.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in fetching of adoption", $th);
        }
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date' => 'required',
            'pets_id' => 'required',
            'users_id' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError("Error validation", $validator->errors());
        }
        try {
            $adoption = Adoption::create($request->all());
            return $this->sendResponse($adoption, 'Adoption successfully created.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in creation of adoption", $th);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $adoption = Adoption::findOrFail($id);
            $adoption->update($request->all());
            return $this->sendResponse($adoption, 'Adoption successfully updated.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in updating of adoption", $th);
        }
    }
    public function delete($id)
    {
        try {
            Adoption::destroy($id);
            return $this->sendResponse('', 'Adoption successfully deleted.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in deleting of adoption", $th);
        }
    }
}
