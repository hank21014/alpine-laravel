import Alpine from "alpinejs";
import init from "@/alpine/init.js";
import Choice from "choices.js";
import { getDistricts } from "@/api/location";
import { toChoices, createSelectedPlaceHolderChoice } from "@/utils/choice";

(() =>
    init(() => {
        Alpine.data(
            "locationDistrict",
            ({ value, choiceOptions, disabled }) => ({
                choice: null,
                disabled,
                async init() {
                    // 等待dom渲染完成, 才存取this.$data.city和this.$data.district
                    await this.$nextTick();
                    this.choice = this.createChoice(choiceOptions);
                    this.$data.district ??= value;

                    // 有設置city, 載入district選項
                    if (this.$data.city !== null) {
                        this.choice.setChoices(async () => {
                            const res = await getDistricts(this.$data.city);
                            const districtChoices = toChoices(
                                [
                                    createSelectedPlaceHolderChoice(),
                                    ...res.data,
                                ],
                                [this.$data.district]
                            );
                            return districtChoices;
                        });
                    }

                    this.$watch("district", async () => {
                        this.choice.setChoiceByValue(this.$data.district);
                    });

                    this.$watch("city", async () => {
                        // 清除選項
                        this.choice
                            .clearChoices()
                            .setChoices([createSelectedPlaceHolderChoice()]);

                        // placeholder
                        if (this.$data.city === "") {
                            return;
                        }

                        if (!this.$data.isSync) {
                            this.$data.district = null;
                        }

                        this.choice.clearChoices().setChoices(async () => {
                            const res = await getDistricts(this.$data.city);
                            const districtChoices = toChoices(
                                [
                                    createSelectedPlaceHolderChoice(),
                                    ...res.data,
                                ],
                                [this.$data.district]
                            );
                            return districtChoices;
                        });
                    });
                },
                createChoice(choiceOptions) {
                    const choice = new Choice(this.$el, choiceOptions);

                    if (this.disabled) {
                        choice.disable();
                    }

                    this.$el.addEventListener("choice", (e) => {
                        console.log("district choice");
                        this.$data.district = e.detail.choice.value;
                    });
                    return choice;
                },
            })
        );
    }))();
