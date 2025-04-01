<?php
 namespace App\Models;

 use Illuminate\Database\Eloquent\Factories\HasFactory;
 use Illuminate\Database\Eloquent\Model;
 use Illuminate\Database\Eloquent\SoftDeletes;
 use Illuminate\Support\Str;

 class SupportTicket extends Model
 {
     use HasFactory, SoftDeletes;

     protected $fillable = [
         'id',
         'sender_id',
         'status',
         'priority',
         'category',
         'subject',
         'message'
     ];



     protected $keyType = 'string';
     public $incrementing = false;

     protected static function boot()
     {
         parent::boot();
         static::creating(function ($ticket) {
             $ticket->id = (string) Str::uuid();
         });
     }

     public function user()
     {
         return $this->belongsTo(User::class);
     }

     public function messages()
     {
         return $this->hasMany(SupportTicketMessage::class);
     }
 }