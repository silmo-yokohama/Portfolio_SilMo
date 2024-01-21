<?php

namespace App\Http\Controllers\Services;

use App\Models\Work;
use App\Models\WorkCategory;
use DB;
use Str;

class WorkCategoryService
{
  /**
   * store
   *
   * @param  string $name
   * @return void
   */
  static function store($name)
  {
    $slug = Str::slug($name, '-');

    if (empty($slug)) {
      return false;
    }

    $category = new WorkCategory();
    $category->name = $name;
    $category->slug = $slug;

    return $category->save();
  }

  /**
   * exists
   *
   * @param  string $name
   * @return void
   */
  static function exists($name)
  {
    $query = WorkCategory::query();

    return $query->where('name', $name)->where('is_deleted', 0)->exists();
  }


  static function getList()
  {
    $query = WorkCategory::query();

    return $query->where('is_deleted', 0)->get();
  }


  static function getWorkCategories($id)
  {
    $query = DB::table('work_work_category');
    $result = $query
      ->select('work_category_id')
      ->where('work_id', $id)
      ->pluck('work_category_id')
      ->toArray();

    return $result;
  }

  /**
   * getSelectObjects
   *
   * @param  int $id
   * @return array
   */
  static function getSelectObjects($id)
  {
    $ids = self::getWorkCategories($id);

    if (empty($ids)) return [];

    $query = WorkCategory::query();
    $query
      ->select('id as value', 'name as label')
      ->where('is_deleted', 0)
      ->whereIn('id', $ids);

    return $query->get();
  }


  static function clearWorkCategories($id)
  {
    $query = WorkCategory::query();
    $query->where('work_id', $id)->each(function (WorkCategory $category) {
      $category->delete();
    });
  }
}
