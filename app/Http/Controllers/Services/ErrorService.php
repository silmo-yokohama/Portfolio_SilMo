<?php

namespace App\Http\Controllers\Services;

use Inertia\Inertia;

class ErrorService
{
  static function to404($params = [])
  {

    return Inertia::render('Error404');
  }
}
