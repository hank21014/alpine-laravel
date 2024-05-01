<?php

namespace App\View\Components\Location;

use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class District extends Component
{
    public ?string $name;

    public mixed $value;

    public array $choiceOptions;

    public bool $disabled;

    public function __construct(
        string $name = null,
        mixed $value = null,
        bool $disabled = false,
        array $choiceOptions = [],
    ) {
        $this->value = $value;

        $this->choiceOptions = [
            'removeItemButton' => true,
            'loadingText' => '載入中...',
            'allowHTML' => false,
            ...$choiceOptions,
        ];

        $this->disabled = $disabled;
        $this->name = $name;
    }

    public function render(): \Closure|string|View
    {
        return view('components.location.district');
    }
}
