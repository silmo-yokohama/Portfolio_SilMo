<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Services\WorkService;
use App\Models\Work;
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
}
