<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;
    protected $casts = [
        'gender' => 'boolean',
        'adopted' => 'boolean',
        'neutered' => 'boolean'
    ];
    protected $fillable = [
        'name',
        'breeds_id',
        'age',
        'gender',
        'adopted',
        'shelters_id',
        'picture_path',
        'neutered'
    ];
}
