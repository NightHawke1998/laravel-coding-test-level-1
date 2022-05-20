<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EventRequest;
use App\Http\Resources\EventResource;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::all();

        return response()->json([
            'data' => EventResource::collection($events)
        ], 200);
    }

    public function activeEvents()
    {
        $currentDate = Carbon::now()->format('Y-m-d H:i:s');
        $events = Event::where('startAt', '<', $currentDate)->where('endAt', '>', $currentDate)->get();

        return response()->json([
            'data' => EventResource::collection($events)
        ], 200);
    }

    public function show(Event $event)
    {
        return response()->json([
            'data' => new EventResource($event)
        ], 200);
    }

    public function store(EventRequest $request)
    {
        $event = Event::create($request->validated());

        return response()->json([
            'status' => 'success',
            'data' => new EventResource($event)
        ], 201);
    }

    public function update(EventRequest $request, Event $event)
    {
        $event->updateOrCreate(['name' => $request->name], $request->validated());

        return response()->json([
            'status' => 'success',
            'data' => new EventResource($event)
        ], 200);
    }

    public function patch(Request $request, Event $event)
    {
        if ($request->name) {
            $event->name = $request->name;
        }

        if ($request->startAt) {
            $event->startAt = $request->startAt;
        }

        if ($request->endAt) {
            $event->endAt = $request->endAt;
        }

        $event->save();

        return response()->json([
            'status' => 'success',
            'data' => new EventResource($event)
        ], 200);
    }

    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Delete Success!'
        ], 200);
    }
}
