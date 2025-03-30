<?php

namespace App\Services;

use App\Models\Booking;
use App\Models\Commission;
use Illuminate\Support\Facades\DB;

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

        $ownerId = '69c3b909-4609-4ee7-abd1-a44216c891b5';
        $booingRef = $booking->booking_reference;
        $ccy = $booking->currency;
        $payMode = $booking->pyment_mode;
        // for customer booking ,vendor has no commission
        if ($booking->type == 'customer') {
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
        $transactionId = uniqid();


        if ($payMode == 'cash') {
            foreach ($commissions as $type => $percentage) {
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
                    Commission::create([
                        'customer_id' => $ownerId,
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
            }
        } else {
            foreach ($commissions as $type => $percentage) {
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
            }
        }
 
        DB::statement("UPDATE bookings SET commissioned = 'Y', commissioned_at = NOW() WHERE id = '$bookingId'");

    }
}