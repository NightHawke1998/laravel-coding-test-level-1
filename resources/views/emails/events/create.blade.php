@component('mail::message')
# Event Created

This is to inform you that an event has been created.

Event name : {{ $eventName }},<br>
Event Start At : {{ \Carbon\Carbon::parse($eventStartAt)->format('d M Y, g:i A') }},<br>
Event End At : {{ \Carbon\Carbon::parse($eventEndAt)->format('d M Y, g:i A') }}<br>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
