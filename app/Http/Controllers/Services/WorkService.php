<?php

namespace App\Http\Controllers\Services;

use App\Models\Work;

class WorkService
{
  static function getActiveWorks($searchText = null)
  {
    $query = Work::query();

    $query
      ->where('is_deleted', 0)
      ->when($searchText, function ($query, $searchText) {
        return $query->where('name', 'LIKE', "%{$searchText}%");
      });

    return $query;
  }
}
