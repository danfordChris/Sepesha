<?php
namespace App\Console\Commands;

use App\Models\Booking;
use App\Services\CommissionService;
use Illuminate\Console\Command;

class DistributeCommissions extends Command
{
    protected $signature = 'commissions:distribute';
    protected $description = 'Distribute commissions for completed bookings';

    protected $commissionService;

    public function __construct(CommissionService $commissionService)
    {
        parent::__construct();
        $this->commissionService = $commissionService;
    }

    public function handle()
    {
        $bookings = Booking::where('status', 'completed')->get();
        foreach ($bookings as $booking) {
            // Call the service to distribute commissions
            $this->commissionService->distributeCommission($booking->id);
            $this->info("Commissions distributed for booking ID: " . $booking->id);
        }
    }
}