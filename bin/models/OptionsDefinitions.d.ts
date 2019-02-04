export declare const optionDefinitions: ({
    name: string;
    alias: string;
    type: BooleanConstructor;
    multiple?: undefined;
    defaultOption?: undefined;
} | {
    name: string;
    type: StringConstructor;
    multiple: boolean;
    defaultOption: boolean;
    alias?: undefined;
} | {
    name: string;
    alias: string;
    type: NumberConstructor;
    multiple?: undefined;
    defaultOption?: undefined;
})[];
