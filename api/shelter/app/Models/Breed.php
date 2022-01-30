<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Breed extends Model
{
    use HasFactory;
    const CREATED_AT = 'date';
    const UPDATED_AT = null;
    protected $fillable = [
        "bname",
        "species_id"
    ];
}
