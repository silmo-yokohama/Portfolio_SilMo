<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Services\ErrorService;
use App\Http\Controllers\Services\FileService;
use App\Http\Controllers\Services\WorkCategoryService;
use App\Http\Controllers\Services\WorkService;
use App\Http\Controllers\Services\WorkSkillService;
use App\Http\Controllers\Services\WorkTagService;
use App\Models\Work;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkController extends Controller
{

  /**
   * index
   *
   * @param  Request $request
   * @return \Inertia\Response
   */
  function index(Request $request)
  {
    $works = WorkService::getActiveWorks()->paginate(15);

    return Inertia::render('Admin/Works/Index', [
      'works' => $works
    ]);
  }



  function create()
  {
    return Inertia::render('Admin/Works/Create');
  }


  function store(Request $request)
  {
    DB::beginTransaction();
    try {
      $work = new Work();

      $work->name = $request->name;
      $work->url = $request->url;
      $work->image_path = FileService::overwrite($request->file('image'), $request->imagePath);
      $work->content = $request->content;

      $work->save();

      $work->categories()->sync($request->categories);
      $work->tags()->sync($request->tags);
      $work->skills()->sync($request->skills);

      DB::commit();
    } catch (\Throwable $th) {
      DB::rollBack();

      return to_route('admin.works.create')->with([
        'status' => 'success',
        'displayMessage' => 'データの保存に失敗しました。やり直してください。',
        'detailMessage' => $th->getMessage()
      ]);
    }

    return to_route('admin.works.index');
  }


  function edit($id, Request $request)
  {
    $work = WorkService::getWork($id);

    if (!$work) {
      return ErrorService::to404();
    }

    $categories = WorkCategoryService::getSelectObjects($id);
    $tags = WorkTagService::getSelectObjects($id);
    $skills = WorkSkillService::getSelectObjects($id);


    return Inertia::render('Admin/Works/Edit', [
      'work' => $work,
      'categories' => $categories,
      'tags' => $tags,
      'skills' => $skills
    ]);
  }


  function update($id, Request $request)
  {
    $work = WorkService::getWork($id);
    if (!$work) {
      return ErrorService::to404();
    }

    $request->validate([
      'name' => ['required', 'max:30'],
      'url' => ['nullable', 'url', 'max:255'],
      'image' => ['nullable', 'file', 'mimes:png,jpeg,jpg'],
      'content' => ['required', 'max:500',],
      'categories' => ['required'],
      'tags' => ['required'],
      'skills' => ['required'],
    ]);

    DB::beginTransaction();
    try {
      $work->name = $request->name;
      $work->url = $request->url;
      $work->content = $request->content;
      $work->image_path = FileService::overwrite($request->file('image'), $request->imagePath);

      $work->save();

      Work::find($id)->categories()->sync($request->categories);
      Work::find($id)->tags()->sync($request->tags);
      Work::find($id)->skills()->sync($request->skills);

      DB::commit();
    } catch (\Throwable $th) {
      DB::rollBack();

      return to_route('admin.works.index')->with([
        'status' => 'success',
        'displayMessage' => 'データの保存に失敗しました。やり直してください。',
        'detailMessage' => $th->getMessage()
      ]);
    }

    return to_route('admin.works.index');
  }
}
