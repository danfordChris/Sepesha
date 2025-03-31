<?php

namespace App\Services;

use App\Models\Booking;
use App\Models\Commission;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CommissionService
{

    /**
     * Distribute commissions based on booking amount.
     */
    public function distributeCommission($bookingId)
    {
        $booking = Booking::find($bookingId);
        if (!$booking || $booking->status !== 'completed') {
            return; // Don't process if the booking is not completed
        }
        $ownerInfo = User::where('reference_number', 'SPS2025')->first();

        $ownerId = $ownerInfo->auth_key;
        $booingRef = $booking->booking_reference;
        $ccy = $booking->currency;
        $payMode = $booking->pyment_mode;
        $bookingType=$booking->type;
        // for customer booking ,vendor has no commission
        if ($bookingType == 'customer') {
            $commissions = [
                'driver' => $booking->driver_comission_rate,
                'owner' => $booking->office_comission_rate
            ];

            $amount = $booking->amount;
            $driverId = $booking->driver_id;

            $users = [
                'driver' => $driverId,
                'owner' => $ownerId,
            ];
        } else {
            $commissions = [
                'driver' => $booking->driver_comission_rate,
                'vendor' => $booking->vendor_comission_rate,
                'owner' => $booking->office_comission_rate
            ];

            $amount = $booking->amount;
            $driverId = $booking->driver_id;
            $vendorId = $booking->customer_id;
            $users = [
                'driver' => $driverId,
                'vendor' => $vendorId,
                'owner' => $ownerId,
            ];
        }
        $description = "Commission booking reference: " . $booingRef;
        $currentDate = now();


        DB::beginTransaction();
        try {
            if ($payMode == 'cash') {
                foreach ($commissions as $type => $percentage) {
                     $transactionId = uniqid();
                    $commissionAmount = ($amount * $percentage);
                    $userId = $users[$type];
                    Commission::create([
                        'customer_id' => $userId,
                        'business_type' => $type,
                        'transact_id' => $transactionId,
                        'name' => 'RECEIVABLE',
                        'entryid' => $bookingId,
                        'entry_type' => 'CREDIT',
                        'category' => 'RECEIPT',
                        'account_code' => '1001',
                        'quantity' => 1,
                        'uom' => '',
                        'vat' => 0.00,
                        'unit_price' => $commissionAmount,
                        'updated_by' => null,
                        'dramount' => 0,
                        'cramount' => $commissionAmount,
                        'currency' => $ccy,
                        'erate' => 1.00,
                        'descr' => $description,
                        'fyid' => 1,
                        'reference_no' => $booingRef,
                        'status' => 'N',
                        'transact_date' => $currentDate,
                        'wid' => null,
                        'stid' => 1,
                        'wfstatus' => null,
                        'requserinput' => 'N',
                    ]);

                    if ($type == 'driver') {
                        $transactionId = uniqid();
                        Commission::create([
                            'customer_id' => $driverId,
                            'business_type' => 'driver',
                            'transact_id' => $transactionId,
                            'name' => 'RECEIVABLE',
                            'entryid' => $bookingId,
                            'entry_type' => 'DEBIT',
                            'category' => 'INVOICE',
                            'account_code' => '1002',
                            'quantity' => 1,
                            'uom' => '',
                            'vat' => 0.00,
                            'unit_price' => $commissionAmount,
                            'dramount' => $commissionAmount,
                            'cramount' => 0,
                            'currency' => $ccy,
                            'erate' => 1.00,
                            'descr' => $description,
                            'fyid' => 1,
                            'reference_no' => $booingRef,
                            'status' => 'N',
                            'transact_date' => $currentDate,
                            'wid' => null,
                            'stid' => 1,
                            'wfstatus' => null,
                            'requserinput' => 'N',
                        ]);
                    }
                    $this->updateItems($userId);
                }
            } else {
                foreach ($commissions as $type => $percentage) {
                    $transactionId = uniqid();
                    $commissionAmount = ($amount * $percentage);
                    $userId = $users[$type];
                    Commission::create([
                        'customer_id' => $userId,
                        'business_type' => $type,
                        'transact_id' => $transactionId,
                        'name' => 'RECEIVABLE',
                        'entryid' => $bookingId,
                        'entry_type' => 'CREDIT',
                        'category' => 'RECEIPT',
                        'account_code' => '1001',
                        'quantity' => 1,
                        'uom' => '',
                        'vat' => 0.00,
                        'unit_price' => $commissionAmount,
                        'updated_by' => null,
                        'dramount' => 0,
                        'cramount' => $commissionAmount,
                        'currency' => $ccy,
                        'erate' => 1.00,
                        'descr' => $description,
                        'fyid' => 1,
                        'reference_no' => $booingRef,
                        'status' => 'N',
                        'transact_date' => $currentDate,
                        'wid' => null,
                        'stid' => 1,
                        'wfstatus' => null,
                        'requserinput' => 'N',
                    ]);

                    if ($type == 'owner') {
                         $transactionId = uniqid();
                        Commission::create([
                            'customer_id' => $ownerId,
                            'business_type' => 'owner',
                            'transact_id' => $transactionId,
                            'name' => 'RECEIVABLE',
                            'entryid' => $bookingId,
                            'entry_type' => 'DEBIT',
                            'category' => 'INVOICE',
                            'account_code' => '1002',
                            'quantity' => 1,
                            'uom' => '',
                            'vat' => 0.00,
                            'unit_price' => $commissionAmount,
                            'dramount' => $commissionAmount,
                            'cramount' => 0,
                            'currency' => $ccy,
                            'erate' => 1.00,
                            'descr' => $description,
                            'fyid' => 1,
                            'reference_no' => $booingRef,
                            'status' => 'N',
                            'transact_date' => $currentDate,
                            'wid' => null,
                            'stid' => 1,
                            'wfstatus' => null,
                            'requserinput' => 'N',
                        ]);
                    }
                    $this->updateItems($userId);
                }
            }
            DB::update("UPDATE bookings SET commissioned = 'Y', commissioned_at = NOW() WHERE id = ?", [$bookingId]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Transaction failed: ' . $e->getMessage(), [
                'exception' => $e,
                'booking' => $bookingId
            ]);
            throw $e;
        }
    }

    public function updateItems($userId)
    {
        $balanceResult = DB::select("SELECT SUM(cramount - dramount) AS balance FROM commissions WHERE customer_id = ?", [$userId]);
        $balance = $balanceResult[0]->balance ?? 0;
        DB::update("UPDATE clients_info SET wallet_balance_tzs = ? WHERE auth_key = ?", [$balance, $userId]);
        DB::update("UPDATE clients_info SET total_deliveries = total_deliveries+1 WHERE auth_key = ?", [$userId]);
    }
}