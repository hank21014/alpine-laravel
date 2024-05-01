export const getCities = async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    return {
        data: [
            {
                label: "A",
                value: 0,
            },
            {
                label: "B",
                value: 1,
            },
            {
                label: "C",
                value: 2,
            },
        ],
    };
};

export const getDistricts = async (cityUlid) => {
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    const districts = [
        [
            {
                label: "a1",
                value: 3,
            },
            {
                label: "a2",
                value: 4,
            },
        ],
        [
            {
                label: "b1",
                value: 5,
            },
            {
                label: "b2",
                value: 6,
            },
        ],
        [
            {
                label: "c1",
                value: 7,
            },
            {
                label: "c2",
                value: 8,
            },
        ],
    ];

    return { data: districts[cityUlid] };
};
