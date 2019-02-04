export declare const usageDefinitions: ({
    header: string;
    content: string;
    optionList?: undefined;
} | {
    header: string;
    optionList: ({
        name: string;
        typeLabel: string;
        description: string;
    } | {
        name: string;
        description: string;
        typeLabel?: undefined;
    })[];
    content?: undefined;
})[];
