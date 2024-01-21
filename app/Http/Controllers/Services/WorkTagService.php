<?php

namespace App\Http\Controllers\Services;

use App\Models\Tag;
use DB;
use Str;

class WorkTagService
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

    $category = new Tag();
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
    $query = Tag::query();

    return $query->where('name', $name)->where('is_deleted', 0)->exists();
  }


  static function getList()
  {
    $query = Tag::query();

    return $query->where('is_deleted', 0)->get();
  }


  static function getWorkTags($id)
  {
    $query = DB::table('tag_work');
    $result = $query
      ->select('tag_id')
      ->where('work_id', $id)
      ->pluck('tag_id')
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
    $ids = self::getWorkTags($id);

    if (empty($ids)) return [];

    $query = Tag::query();
    $query
      ->select('id as value', 'name as label')
      ->whereIn('id', $ids);

    return $query->get();
  }


  static function clearWorkTags($id)
  {
    $query = Tag::query();
    $query->where('work_id', $id)->each(function (Tag $category) {
      $category->delete();
    });
  }
}
