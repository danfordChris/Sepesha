<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attachment extends Model
{
    use HasFactory;
    protected $table = 'attachments';

    protected $fillable = [
        'attachment',
        'refno',
        'name',
        'type',
        'owner_id',
        'module',
        'wid',
        'stid',
        'moduleId',
        'table_name',
        'model_name',
        'table_key'

    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }



    public static function documentType($wid, $id, $status = 1)
    {
        $q = "SELECT w.id, t.name, w.mandatory
        FROM workflow_documents w
        INNER JOIN case_tools t
        ON w.doctype_id = t.id
        WHERE t.status = :status
        AND w.wid = :wid AND w.id = :id";
        $result = DB::selectOne($q, [
            'status' => $status,
            'wid' => $wid,
            'id' => $id,
        ]);
        return $result;
    }


    public static function listAttachments($refno, $status = 'A')
    {
        $q = "SELECT w.id,w.name
        FROM attachments w
        WHERE w.status = :status
        AND  w.refno = :refno";
        $result = DB::select($q, [
            'status' => $status,
            'refno' => $refno,
        ]);
        return $result;
    }


    public static function documentTypes($wid = 3, $status = 1)
    {
        $q = "SELECT w.id, t.name, w.mandatory
        FROM workflow_documents w
        INNER JOIN case_tools t
        ON w.doctype_id = t.id
        WHERE t.status = :status
        AND w.wid = :wid";
        $result = DB::select($q, [
            'status' => $status,
            'wid' => $wid,

        ]);
        return $result;
    }
}
