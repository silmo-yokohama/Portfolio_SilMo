<?php

namespace App\Http\Controllers\Services;

use Storage;

/**
 * FileService
 */
class FileService
{
  const NO_IMAGE_PATH = '/images/no-image.png';
  const ROOT_BROWSER_PATH = '/images/browser/';

  static function overwrite($file, $oldFilePath)
  {
    if (is_null($file)) {
      return self::NO_IMAGE_PATH;
    }

    if ($oldFilePath !== self::NO_IMAGE_PATH && Storage::exists($oldFilePath)) {
      Storage::delete(public_path($oldFilePath));
    }

    return self::save($file);
  }

  static function save($file)
  {
    if (is_null($file)) {
      return self::NO_IMAGE_PATH;
    }

    $disk = Storage::build([
      'driver' => 'local',
      'root' => public_path(self::ROOT_BROWSER_PATH)
    ]);
    $filePath = $disk->put('', $file);

    return self::ROOT_BROWSER_PATH . $filePath;
  }
}
