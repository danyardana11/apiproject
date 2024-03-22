<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class json
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
   
    {if ($request->header('Accept') !== 'application/json') {
      return response()->json(['error' => 'Invalid Content-Type'], 400);
  }
  return $next($request);
    // {
    //     $response = response($next($request));
    //     $response->headers->set('Content-type', 'application/json');
    //     return $response;
     // }
}}
