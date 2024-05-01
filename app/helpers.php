<?php

if(!function_exists('uniqueAlpineEventName')){
    function uniqueAlpineEventName(){
        return uniqid('alpine_event_');
    }
}