<?php
namespace App\Models;

use App\Traits\CreatedUpdatedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commission extends Model
{
    use HasFactory;

    protected $fillable = [

        'business_type',
        'transact_id',
        'name',
        'entryid',
        'entry_type',
        'category',
        'account_code',
        'quantity',
        'uom',
        'vat',
        'unit_price',
        'updated_by',
        'dramount',
        'cramount',
        'currency',
        'erate',
        'descr',
        'fyid',
        'reference_no',
        'customer_id',
        'status',
        'transact_date',
        'created_at',
        'created_by',
        'updated_at',
        'wid',
        'stid',
        'wfstatus',
        'requserinput',
    ];

    // Optionally, add casting if needed for certain fields
    protected $casts = [
        'vat' => 'decimal:2',
        'unit_price' => 'decimal:4',
        'dramount' => 'decimal:4',
        'cramount' => 'decimal:4',
    ];
}