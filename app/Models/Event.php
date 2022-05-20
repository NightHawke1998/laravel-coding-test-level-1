<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Cviebrock\EloquentSluggable\Sluggable;

class Event extends Model
{
    use HasFactory, SoftDeletes;
    use Sluggable;

    protected $fillable = ['name', 'slug', 'startAt', 'endAt', 'createdAt', 'updatedAt'];

    protected $casts = [
        'id' => 'string'
    ];

    public $timestamps = false;

    public static function booted()
    {
        static::creating(function ($model) {
            $model->id = Str::uuid();
        });
    }

    //Used for slugging the name
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
