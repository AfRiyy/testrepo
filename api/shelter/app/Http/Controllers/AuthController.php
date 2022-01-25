<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Illuminate\Support\Facades\Hash;
use Illuminate\Support\facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\BaseController;
use Validator;


class AuthController extends BaseController
{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            "name"=>"required",
            "email" => "required",
            "password" => "required",
            "confirm_password" => "required",
        ]);

        if($validator->fails()){
            return $this->sendError("Error validation",$validator->errors());
    }
    $input = $request->all();
    $input[ "password" ] = bcrypt( $input[ "password" ]);
    $user = User::create( $input );
    $success[ "name" ] = $user->name;
    return $this->sendResponse( $success, "User created successfuly" );
    }
}
