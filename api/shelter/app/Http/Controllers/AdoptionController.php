<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Adoption;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class AdoptionController extends BaseController
{
    public function index()
    {
        try {
            $adoptions = DB::table('adoptions')->select('adoptions.id', 'date', 'users.user', 'pets.name')->join('users', 'users.id', '=', 'adoptions.users_id')->join('pets', 'pets.id', 'adoptions.pets_id')->get();
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
            'user' => 'required',
            'name' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError("Error validation", $validator->errors());
        }
        $userid = DB::table('users')->select('id')->where('user', '=', $request->all()['user'])->get();
        $petid = DB::table('pets')->select('id')->where('name', '=', $request->all()['name'])->get();
        try {
            $adoption =  Adoption::create(
                [
                    'date' => request('date'),
                    'users_id' => $userid[0]->id,
                    'pets_id' => $petid[0]->id,
                ]
            );
            return $this->sendResponse($adoption, 'Adoption successfully created.');
        } catch (\Throwable $th) {
            return $this->sendError("Error in creation of adoption", $th);
        }
    }
    public function update(Request $request, $id)
    {
        $userid = DB::table('users')->select('id')->where('user', '=', $request->all()['user'])->get();
        $petid = DB::table('pets')->select('id')->where('name', '=', $request->all()['name'])->get();
        try {
            $adoption = Adoption::findOrFail($id);
            $adoption['date'] = $request->all()['date'];
            $adoption['users_id'] = $userid[0]->id;
            $adoption['pets_id'] = $petid[0]->id;
            $adoption->save();
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
