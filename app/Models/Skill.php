<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
  use HasFactory;

  function works()
  {
    return $this->belongsToMany(Work::class)->withTimestamps();
  }
}
