<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class filter extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $fillable = [
        'name',
    ];
    public $timestamps = false;


    protected $hidden = [
        'created_at',
        'updated_at',
    ];

}
