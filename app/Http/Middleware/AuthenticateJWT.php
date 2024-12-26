<?php
// app/Http/Middleware/AuthenticateJWT.php

namespace App\Http\Middleware;

use Closure;
use App\Models\CustomHelper;
use App\Services\JWTService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthenticateJWT
{
    private $jwtService;

    public function __construct(JWTService $jwtService)
    {
        $this->jwtService = $jwtService;
    }

    public function handle(Request $request, Closure $next, ...$allowedUserTypes)
    {
        $token = $request->bearerToken();
      //  return $token;
        if (!$token || !$this->jwtService->validateToken($token)) {
            return CustomHelper::response(false, 'Unauthorized', Response::HTTP_UNAUTHORIZED);
        }

        $decoded = $this->jwtService->decode($token);
       //  return $decoded->user_type;

        if (!empty($decoded->user_type)) {
            if (!in_array($decoded->user_type, $allowedUserTypes)) {
                return CustomHelper::response(false, 'Unauthorized', Response::HTTP_FORBIDDEN);
            }
        } else {
            return CustomHelper::response(false, 'Unauthorized', Response::HTTP_FORBIDDEN);
        }


        // Attach user_id and use_type to the request
        $request->merge([
            'user_id' => $decoded->sub,
            'user_type' => $decoded->user_type,
        ]);

        return $next($request);
    }
}