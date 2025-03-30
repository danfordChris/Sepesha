<?php

namespace App\Traits;

trait CreatedUpdatedBy
{
    public static function bootCreatedUpdatedBy()
    {
        // updating created_by and updated_by when model is created
        static::creating(function ($model) {
            if (! $model->isDirty('created_by')) {
                $model->created_by = app('jwt_user_id')??null;
            }
            if (! $model->isDirty('updated_by')) {
                $model->updated_by = app('jwt_user_id')??null;
            }
        });

        // updating updated_by when model is updated
        static::updating(function ($model) {
            if (! $model->isDirty('updated_by')) {
                $model->updated_by = app('jwt_user_id')??null;
            }
        });
    }
}