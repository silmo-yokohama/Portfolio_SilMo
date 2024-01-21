<?php

namespace App\Http\Controllers\Services;

use App\Models\Skill;
use DB;
use Str;

class WorkSkillService
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

    $category = new Skill();
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
    $query = Skill::query();

    return $query->where('name', $name)->where('is_deleted', 0)->exists();
  }


  static function getList()
  {
    $query = Skill::query();

    return $query->where('is_deleted', 0)->get();
  }

  static function getWorkSkills($id)
  {
    $query = DB::table('skill_work');
    $result = $query
      ->select('skill_id')
      ->where('work_id', $id)
      ->pluck('skill_id')
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
    $ids = self::getWorkSkills($id);

    if (empty($ids)) return [];

    $query = Skill::query();
    $query
      ->select('id as value', 'name as label')
      ->where('is_deleted', 0)
      ->whereIn('id', $ids);

    return $query->get();
  }


  static function clearWorkSkills($id)
  {
    $query = Skill::query();
    $query->where('work_id', $id)->each(function (Skill $category) {
      $category->delete();
    });
  }
}
