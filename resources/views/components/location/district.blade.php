<select
    x-cloak
    x-data="locationDistrict(
        @js([
            'value' => $value,
            'choiceOptions' => $choiceOptions,
            'disabled' => $disabled,
        ])
    )"
    x-modelable="district"
    name="{{ $name }}"
    {{ $attributes }}
>
</select>
@pushOnce('css')
    @vite('resources/css/choices.css')
@endPushOnce
@pushOnce('js')
    @vite('resources/js/alpine/components/location/district.js')
@endPushOnce
