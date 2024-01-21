<?php

namespace App\Http\Controllers\Services;

use App\Models\Work;

/**
 * WorkService
 */
class WorkService
{

  /**
   * getWork
   *
   * @param  int $id
   * @return \Illuminate\Database\Eloquent\Model|null
   */
  static function getWork($id)
  {
    $query = Work::query();

    return $query->find($id);
  }



  /**
   * getActiveWorks
   *
   * @param  string|null $searchText
   * @return \Illuminate\Database\Eloquent\Builder|\App\Models\Work
   */
  static function getActiveWorks($searchText = null)
  {
    $query = Work::query();

    $query
      ->where('is_deleted', 0)
      ->when($searchText, function ($query, $searchText) {
        return $query->where('name', 'LIKE', "%{$searchText}%");
      })->orderBy('updated_at', 'desc');

    return $query;
  }
}
