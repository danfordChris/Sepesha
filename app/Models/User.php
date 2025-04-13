<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use DateTime;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Jetstream\HasProfilePhoto;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class User extends Authenticatable
{
    use HasApiTokens;

    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = 'clients_info';
    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
        'mname',
        'sname',
        'phonecode',
        'user_type',
        'licence_number',
        'licence_expiry',
        'reference_number',
        'referal_code',
        'auth_key',
        'role',
        'password_hash',
        'login_attempts',
        'wid',
        'privacy_checked',
        'entity_type',
        'status',
        'otp',
        'otp_expires_at',
        'profile_photo',
        'region_id',
        'country_id',
        'address',
        'latitude',
        'longitude',
        'preferred_payment_method',
        'license_expiry_date',
        'driver_license_number',
        'business_description',
        'attachment'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'password_confirmation',
        'remember_token',
        'password_hash',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'password_hash' => 'hashed'
        ];
    }


    public static function getRegistrationNumber($user_type)
    {

        if ($user_type == "driver") {
            $pref = "D";
        } elseif ($user_type == 'customer') {
            $pref = "C";
        } else {
            //VENDOR
            $pref = "V";
        }
        $no =  (User::max('id') ?? 0) + 1;
        $dob = new DateTime(Date('Y-m-d'));
        $keyvalue =  $pref . $dob->format('Ymd') . $no;
        return   $keyvalue;
    }

    public static function getAuth($key)
    {

        $user = User::where('uuid', $key)->first();
        if (!$user) {
            return false;
        }

        return $user;
    }
}