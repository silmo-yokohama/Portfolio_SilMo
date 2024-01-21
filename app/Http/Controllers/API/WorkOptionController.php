<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Services\WorkCategoryService;
use App\Http\Controllers\Services\WorkSkillService;
use App\Http\Controllers\Services\WorkTagService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class WorkOptionController extends Controller
{
  /**
   * storeCategory
   *
   * @param  Illuminate\Http\Response $request
   * @return \Illuminate\Http\Response
   */
  function storeCategory(Request $request)
  {
    $name = $request->data;

    if (WorkCategoryService::exists($name)) {
      return response("{$name}は既に存在しています。", Response::HTTP_CONFLICT);
    }

    if (!WorkCategoryService::store($name)) {
      return response("{$name}の保存に失敗しました。", Response::HTTP_BAD_REQUEST);
    }


    return response([
      'message' => "{$name}を保存しました。",
      'data' => $name
    ], Response::HTTP_OK);
  }


  /**
   * getCategories
   *
   * @return \Illuminate\Http\Response
   */
  function getCategories()
  {
    $result = WorkCategoryService::getList();

    return response($result, Response::HTTP_OK);
  }



  /**
   * storeTag
   *
   * @param  Illuminate\Http\Response $request
   * @return \Illuminate\Http\Response
   */
  function storeTag(Request $request)
  {
    $name = $request->data;

    if (WorkTagService::exists(($name))) {
      return response("{$name}は既に存在しています。", Response::HTTP_CONFLICT);
    }

    if (!WorkTagService::store($name)) {
      return response("{$name}の保存に失敗しました。", Response::HTTP_BAD_REQUEST);
    }

    return response([
      'message' => "{$name}を保存しました。",
      'data' => $name
    ], Response::HTTP_OK);
  }


  /**
   * getTags
   *
   * @return \Illuminate\Http\Response
   */
  function getTags()
  {
    $result = WorkTagService::getList();

    return response($result, Response::HTTP_OK);
  }


  /**
   * storeSkill
   *
   * @param  Illuminate\Http\Response $request
   * @return \Illuminate\Http\Response
   */
  function storeSkill(Request $request)
  {
    $name = $request->data;

    if (WorkSkillService::exists(($name))) {
      return response("{$name}は既に存在しています。", Response::HTTP_CONFLICT);
    }

    if (!WorkSkillService::store($name)) {
      return response("{$name}の保存に失敗しました。", Response::HTTP_BAD_REQUEST);
    }

    return response([
      'message' => "{$name}を保存しました。",
      'data' => $name
    ], Response::HTTP_OK);
  }


  /**
   * getSkills
   *
   * @return \Illuminate\Http\Response
   */
  function getSkills()
  {
    $result = WorkSkillService::getList();

    return response($result, Response::HTTP_OK);
  }
}
