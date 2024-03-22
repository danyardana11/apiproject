<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categories extends Model
{
    use HasFactory;
   protected $table='categories';
//    protected $guarded = [];
   protected $fillable = [
       'name',
   ];
    public $timestamps = false;
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}