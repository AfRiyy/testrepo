<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Adoption;
class AdoptionController extends Controller
{
    public function index(){
        return Adoption::all();
    }
}
