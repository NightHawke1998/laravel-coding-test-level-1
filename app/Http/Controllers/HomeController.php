<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Mail\EventCreate;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Yajra\DataTables\Html\Builder;
use DataTables;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redis;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Builder $builder)
    {
        $html = $builder->columns([
            ['data' => 'name', 'name' => 'name', 'title' => 'Name'],
            ['data' => 'startAt', 'name' => 'startAt', 'title' => 'Start Date'],
            ['data' => 'endAt', 'name' => 'endAt', 'title' => 'End Date'],
            [
                'defaultContent' => '',
                'data'           => 'action',
                'name'           => 'action',
                'title'          => 'Action',
                'render'         => null,
                'orderable'      => false,
                'searchable'     => false,
                'exportable'     => false,
                'printable'      => true,
                'footer'         => '',
            ]
        ])
            ->ajax(route('events.data'));

        return view('home', compact('html'));
    }

    public function data()
    {
        return DataTables::of(Event::query())
            ->addColumn('action', function ($event) {
                $html = "";
                $html .= '<a href="' . route('events.edit', $event) . '" class="btn btn-primary btn-sm"><i class="fas fa-pencil-alt"></i></a>';
                $html .= "<form style='display:inline;' action='" . route('events.destroy', $event) . "' method='post'>";
                $html .= csrf_field();
                $html .= '<input type="hidden" name="_method" value="delete">';
                $html .= '<button class="btn btn-danger btn-sm" type="submit"><i class="fas fa-trash-alt"></i></button>';
                $html .= "</form>";
                return $html;
            })
            ->rawColumns(['action'])
            ->make(true);
    }

    public function create()
    {
        return view('events.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'startAt' => 'required',
            'endAt' => 'required'
        ]);

        $event = Event::create([
            'name' => $request->name,
            'startAt' => Carbon::parse($request->startAt)->format('Y-m-d H:i:s'),
            'endAt' => Carbon::parse($request->endAt)->format('Y-m-d H:i:s')
        ]);

        Mail::to(auth()->user()->email)->send(new EventCreate($event));

        return redirect()->route('events')->with('success', 'Add success!');
    }

    public function show($id)
    {
        // Redis cache
        $cachedEvent = Redis::get('event_' . $id);

        if (isset($cachedEvent)) {

            $event = json_decode($cachedEvent, FALSE);

        } else {

            $event = Event::findOrFail($id);

            Redis::set('event_' . $id, $event);
        }

        return view('events.show', compact('event'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'startAt' => 'required',
            'endAt' => 'required'
        ]);

        $event = Event::findOrFail($id);
        $startAt = Carbon::parse($request->startAt)->format('Y-m-d H:i:s');
        $endAt = Carbon::parse($request->endAt)->format('Y-m-d H:i:s');

        $event->update([
            'name' => $request->name,
            'startAt' => $startAt,
            'endAt' => $endAt
        ]);

        return redirect()->route('events')->with('success', 'Update success!');
    }

    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();

        return redirect()->back()->with('success', 'Delete success!');
    }

    public function externalApi()
    {
        $response = Http::get('https://catfact.ninja/fact');

        $data = $response->json();

        return view('data', compact('data'));
    }
}
