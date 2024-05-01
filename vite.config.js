import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/alpine/bootstrap.js",
                "resources/js/alpine/components/location/wrapper.js",
                "resources/js/alpine/components/location/city.js",
                "resources/js/alpine/components/location/district.js",
                "resources/css/choices.css",
            ],
            refresh: true,
        }),
    ],
});
