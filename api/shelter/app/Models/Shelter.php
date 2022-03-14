<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shelter extends Model
{
    use HasFactory;
    protected $fillable = [
        "shelter_name",
        "shelter_zip",
        "shelter_city",
        "shelter_street_address",
        "shelter_phone",
        "shelter_website",
        "shelter_facebook"
    ];
}
