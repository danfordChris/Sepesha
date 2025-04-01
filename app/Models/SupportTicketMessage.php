<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class SupportTicketMessage extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'support_ticket_id',
        'sender_id',
        'sender_role',
        'message',
        'attachment',
        'is_read',
        'is_delivered',
    ];

    protected $keyType = 'string';
    public $incrementing = false;

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($message) {
            $message->id = (string) Str::uuid();
        });
    }

    public function ticket()
    {
        return $this->belongsTo(SupportTicket::class);
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }
}
