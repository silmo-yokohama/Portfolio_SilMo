<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('works', function (Blueprint $table) {
      $table->id();
      $table->string('name', 80);
      $table->string('image_path', 255);
      $table->string('url', 255)->nullable();
      $table->longText('content')->nullable();
      $table->boolean('is_deleted')->default(0);
      $table->dateTime('deleted_at')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('works');
  }
};
