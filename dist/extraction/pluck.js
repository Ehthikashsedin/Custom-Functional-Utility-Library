"use strict";

const getPath = (obj, path) => {
    const keys = path.split(".");
    let result = obj;

    for (let i = 0; i < keys.length; i++) {
        if (result == null) return undefined;
        result = result[keys[i]];
    }

    return result;
};

export function pluck(selector, arr) {
    const result = [];
    
    if (typeof selector === "string") {
        for (let i = 0; i < arr.length; i++) {
            result[i] = selector.includes(".")
                ? getPath(arr[i], selector)
                : arr[i][selector];
        }
        return result;
    }


    for (let i = 0; i < arr.length; i++) {
        const obj = {};
        for (let j = 0; j < selector.length; j++) {
            const key = selector[j];
            obj[key] = arr[i][key];
        }
        result[i] = obj;
    }

    return result;
}

