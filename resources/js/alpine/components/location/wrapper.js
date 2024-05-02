import Alpine from "alpinejs";
import init from "@/alpine/init.js";

(() =>
    init(() => {
        Alpine.data("locationWrapper", () => ({
            city: null,
            district: null,
            isSync: false,
            shouldResetDistrict: false,
            updateCityWithoutResetDistrict(city) {
                this.shouldResetDistrict = true;
                this.city = city;
                // dom渲染完再改變
                this.$nextTick(() => (this.shouldResetDistrict = false));
            },
        }));
    }))();
