// Type definitions for amfjs
// Project: https://github.com/kenshiYM/amfjs
// Definitions by: kenshi Yamamura
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare namespace amf {
    var classRegistry: any[];

    export function registerClass(name: string, clazz: any);
    export function init(endpoint: string, timeout?: number);
    export function addHeader(name: string, value: string);
    export function invoke(destination: string, source: string, operation: string, params: any, onResult: any, onStatus: any);
}

export {amf};