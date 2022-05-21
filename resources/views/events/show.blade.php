@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Edit Events</div>

                <div class="card-body">

                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif

                    <form method="POST" action="{{ route('events.update', $event->id) }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ $event->name }}" required autocomplete="name" autofocus>

                                @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="startAt" class="col-md-4 col-form-label text-md-end">{{ __('Start Date') }}</label>

                            <div class="col-md-6">
                                <div class="input-group date" id="startAt" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input" name="startAt" data-target="#startAt" value="{{ \Carbon\Carbon::parse($event->startAt)->format('m/d/Y g:i A') }}" />
                                    <div class="input-group-append" data-target="#startAt" data-toggle="datetimepicker">
                                        <span class="input-group-text">
                                            <i class="ki ki-calendar"></i>
                                        </span>
                                    </div>
                                </div>

                                @error('startAt')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="endAt" class="col-md-4 col-form-label text-md-end">{{ __('End Date') }}</label>

                            <div class="col-md-6">
                                <div class="input-group date" id="endAt" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input" name="endAt" data-target="#endAt" value="{{ \Carbon\Carbon::parse($event->endAt)->format('m/d/Y g:i A') }}" />
                                    <div class="input-group-append" data-target="#endAt" data-toggle="datetimepicker">
                                        <span class="input-group-text">
                                            <i class="ki ki-calendar"></i>
                                        </span>
                                    </div>
                                </div>

                                @error('endAt')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Update') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('script')

<script>
    var KTBootstrapDatetimepicker = function() {
        // Private functions
        var baseDemos = function() {
            // Demo 1
            $('#startAt').datetimepicker();
            $('#endAt').datetimepicker();

        }


        return {
            // Public functions
            init: function() {
                baseDemos();
            }
        };
    }();

    jQuery(document).ready(function() {
        KTBootstrapDatetimepicker.init();
    });
</script>

@endpush