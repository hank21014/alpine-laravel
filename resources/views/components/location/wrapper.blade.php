<div
    x-cloak
    x-data="locationWrapper"
    {{ $attributes }}
>
    {{ $slot }}
</div>
@pushOnce('js')
    @vite('resources/js/alpine/components/location/wrapper.js')
@endPushOnce
