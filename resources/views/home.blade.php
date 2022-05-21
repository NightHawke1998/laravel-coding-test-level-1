@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Events</div>

                <div class="card-body">
                    <!--begin::Button-->
                    <a href="{{ route('create') }}" class="btn btn-primary mb-3">Add Event</a>
                    <!--end::Button-->

                     <!--begin::Button-->
                     <a href="{{ route('externalApi') }}" class="btn btn-warning mb-3">Cat Facts</a>
                    <!--end::Button-->

                    @if (Session::has('success'))
                    <div class="alert alert-success" role="alert">
                        {{ Session::get('success') }}
                    </div>
                    @endif

                    <div class="table-responsive">
                        {!! $html->table(['class' => 'table table-hover']) !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('script')
{!! $html->scripts() !!}
@endpush