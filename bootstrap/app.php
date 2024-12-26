<?php


use Illuminate\Http\Response;
use Illuminate\Foundation\Application;
use App\Http\Middleware\AuthenticateJWT;
use App\Models\CustomHelper;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Routing\Middleware\SubstituteBindings;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: []);
        $middleware->api([
            SubstituteBindings::class,

        ]);

        $middleware->alias([
            'auth.jwt' => AuthenticateJWT::class
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->respond(function (Response $response) {

            if ($response->getStatusCode() === 400) {
                return CustomHelper::response(false,'Forbiden', 400);
            }

            if ($response->getStatusCode() === 401) {
                return CustomHelper::response(false,'Unauthorized', 401);
            }

            if ($response->getStatusCode() === 403) {
                return CustomHelper::response(false,'Forbidden', 403);
            }

            if ($response->getStatusCode() === 404) {
                return CustomHelper::response(false,'Page is not found', 404);
            }

            if ($response->getStatusCode() === 405) {
                return CustomHelper::response(false,'Method Not Allowed', 405);
            }

            if ($response->getStatusCode() === 442) {
                return CustomHelper::response(false,'Validation or request processing error', 442);
            }


            // if ($response->getStatusCode() === 500) {
            //     return CustomHelper::response(false,'Internal Server Error', 500);
            // }

            if ($response->getStatusCode() === 502) {
                return CustomHelper::response(false,'Bad Gateway', 502);
            }

            if ($response->getStatusCode() === 503) {
                return CustomHelper::response(false,'Service Unavailable', 503);
            }

            if ($response->getStatusCode() === 504) {
                return CustomHelper::response(false,'Gateway Timeout', 504);
            }


            return $response;
        });
    })->create();