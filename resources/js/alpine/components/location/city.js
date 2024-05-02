import Alpine from "alpinejs";
import init from "@/alpine/init.js";
import Choice from "choices.js";
import { toChoices, createSelectedPlaceHolderChoice } from "@/utils/choice";
import { getCities } from "@/api/location";

(() =>
    init(() => {
        Alpine.data("locationCity", ({ value, choiceOptions, disabled }) => ({
            choice: null,
            disabled,
            async init() {
                // 等待dom渲染完成, 才存取this.$data.city和this.$data.district
                await this.$nextTick();
                // 設置已選擇的city
                if (value !== null) {
                    this.$data.updateCityWithoutResetDistrict(parseInt(value));
                }
                this.choice = await this.createChoice(choiceOptions);
                this.choice.setChoiceByValue(this.$data.city);

                // x-model情境: 當city改變要重設選擇的選項
                this.$watch("city", (newValue) =>
                    this.choice.setChoiceByValue(newValue)
                );
            },
            async createChoice(choiceOptions) {
                const choice = new Choice(this.$el, choiceOptions);

                if (this.disabled) {
                    choice.disable();
                }

                this.$el.addEventListener(
                    "choice",
                    (e) => (this.$data.city = e.detail.choice.value)
                );

                await choice.setChoices(async () => {
                    const res = await getCities();
                    const cityChoices = toChoices([
                        createSelectedPlaceHolderChoice(),
                        ...res.data,
                    ]);
                    return cityChoices;
                });

                return choice;
            },
        }));
    }))();
