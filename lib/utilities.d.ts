import type { TRecord } from './types';
export type Languages = 'spanish' | 'english';
export type IterationFunction<T> = (element: T, index: number) => boolean;
export type ToMatch = {
    ne?: string | number;
    eq?: string | number;
    lt?: string | number;
    lte?: string | number;
    gt?: string | number;
    gte?: string | number;
    in?: number[];
};
export declare const Utilities: {
    Object: {
        clone(obj: TRecord): TRecord;
        getValue(target: TRecord, path: string, stringToObject?: boolean): unknown;
        setValue(target: TRecord, path: string, value: unknown): void;
    };
    Array: {
        swapItems(array: unknown[], oldIndex: number, newIndex: number): void;
        moveItem(array: unknown[], oldIndex: number, newIndex: number): void;
        queryOne<T>(array: T[], query: Partial<T> | IterationFunction<T>): T;
        query<T_1>(array: T_1[], query: Partial<T_1> | IterationFunction<T_1>): T_1[];
        extractOne<T_2>(array: T_2[], query: Partial<T_2> | IterationFunction<T_2>): T_2;
        extract<T_3>(array: T_3[], query: Partial<T_3> | IterationFunction<T_3>): T_3[];
        groupBy<T_4>(array: T_4[], setterPropertyName: (element: T_4, index?: number) => string | number | symbol): Record<string | number | symbol, T_4[]>;
        toggleElement<T_5>(array: T_5[], element: T_5, check: (element: T_5, index?: number) => boolean): void;
        chunks<T_6>(array: T_6[], length: number): T_6[][];
    };
    Date: {
        format(date: Date, mask: string, language?: Languages): string;
        getWeek(date: Date): number;
        setTimeFromString(date: Date, time: string): void;
        clone(date: Date): Date;
        monthName(date: Date, shortName?: boolean, language?: Languages): string;
        dayName(date: Date, shortName: boolean, language?: Languages): string;
        createFromTemplate(value: string, template: string): Date;
        createFromString(value: string | number): Date;
    };
    String: {
        ucWords(value: string): string;
        left(value: string, length: number): string;
        right(value: string, length: number): string;
        highlight(value: string, tag?: string): string;
        ansiColor(value: string): string;
        capitalize(value: string): string;
        withoutAccentMark(value?: string): string;
        smartMatch(subject: string, match: string): RegExpMatchArray;
        purify(text: string): any;
    };
    Number: {
        round(value: number, decimals?: number): number;
        noScientistNotation(value: number): string;
        format(value: number, decimals?: number, decimalSeparator?: string, millarSeparator?: string, significativeNumber?: boolean): string;
        write(value: number, decimals: number): string;
        compare(value: number, params: ToMatch | string[] | string): boolean;
        asElapsedTime(value: number, mask: string): string;
        isInteger(value: number): boolean;
        isPositive(value: number): boolean;
        isNegative(value: number): boolean;
        isGreaterThan(value: number, reference: number): boolean;
    };
    File: {
        toText: (file: File) => Promise<unknown>;
        toBase64: (file: File) => Promise<unknown>;
    };
    monthName: (monthNumber: number, shortName?: boolean, language?: Languages) => string;
    dayName: (dayNumber: number, shortName?: boolean, language?: Languages) => string;
    getType: (obj: unknown) => any;
    throttle: (func: Function, delay: number) => (...args: unknown[]) => any;
    debounce: (func: Function, delay: number) => (...args: unknown[]) => void;
    formula: (toEval: string, parameters: Record<string, string | number>) => any;
    forceNumber: (value?: unknown) => number;
    objectToUrlParameters: (obj: TRecord) => string;
    urlParametersToObject: (value: string) => TRecord;
    padLeft(value: string | number, length: number, text?: string): string;
    padRight(value: string | number, length: number, text?: string): string;
    excludeAttrs(attrs: TRecord, ...names: string[]): () => TRecord;
};
