import Alpine from "alpinejs";
import init from "@/alpine/init.js";

(() =>
    init(() => {
        Alpine.data("locationWrapper", () => ({
            city: null,
            district: null,
            isSync: false,
            sync({ city, district }) {
                this.isSync = true;
                this.city = city;
                this.district = district;
                // dom渲染完再改變
                this.$nextTick(() => (this.isSync = false));
            },
        }));
    }))();
