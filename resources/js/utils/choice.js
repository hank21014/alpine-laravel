import { Choice } from "choices.js";

/**
 * 依據selects和options產生choice格式
 *
 * @returns {Choice[]}
 */
export const toChoices = (options = [], selects = []) =>
    options.map(({ value, label }) => ({
        value,
        label,
        selected: selects.find((select) => select == value) !== undefined,
    }));

/**
 * 新增被選取的placeholder choice
 *
 * @returns
 */
export const createSelectedPlaceHolderChoice = () => ({
    value: "",
    label: "請選擇",
    placeholder: true,
    selected: true,
});
