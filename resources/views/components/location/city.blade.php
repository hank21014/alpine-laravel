<select
    x-cloak
    x-data="locationCity(
        @js([
            'value' => $value,
            'choiceOptions' => $choiceOptions,
            'disabled' => $disabled,
        ])
    )"
    x-modelable="city"
    name="{{ $name }}"
    {{ $attributes }}
>
</select>
@pushOnce('css')
    @vite('resources/css/choices.css')
@endPushOnce
@pushOnce('js')
    @vite('resources/js/alpine/components/location/city.js')
@endPushOnce
