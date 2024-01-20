<?php

namespace Database\Seeders;

use App\Models\Work;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorkSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $works = Work::all();

    $works->each(function (Work $work) {
      $work->delete();
    });
    $sql = "ALTER TABLE works AUTO_INCREMENT = 1 ";
    DB::unprepared($sql);

    Work::factory(100)->create();
  }
}
