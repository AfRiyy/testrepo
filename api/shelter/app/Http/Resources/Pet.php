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
            "species"=>$request['sname'],
            "breeds"=>$request['bname'],
            "age"=>$this->age,
            "gender"=>$this->gender,
            "adopted"=>$this->adopted,
            "shelters_id"=>$this->shelters_id,
            "picture_path"=>$this->picture_path,
            "neutered"=>$this->neutered,
            "created_at"=>$this->created_at,
            "updated_at"=>$this->updated_at
        ];
    }
}
