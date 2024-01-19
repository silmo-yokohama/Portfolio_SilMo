<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
  use HasFactory;

  function skills()
  {
    return $this->belongsToMany(Skill::class)->withTimestamps();
  }

  function tags()
  {
    return $this->belongsToMany(Tag::class)->withTimestamps();
  }

  function categories()
  {
    return $this->belongsToMany(WorkCategory::class)->withTimestamps();
  }
}
