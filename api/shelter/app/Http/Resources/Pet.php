<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Pet extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            "id"=>$this->id,
            "name"=>$this->name,
            "species"->$this->species,
            "breeds"->$this->breeds,
            "age"->$this->age,
            "gender"->$this->gender,
            "adopted"->$this->adopted,
            "locations_id"->$this->locations_id,
            "picturePath"->$this->picturePath,
            "neutered"->$this->neutered,
            "created_at"->$this->created_at->format("m/d/Y"),
            "updated_at"->$this->updated_at->format("m/d/Y")
        ];
    }
}
