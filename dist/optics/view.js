"use strict";

const view = (ln, obj) => {
    let result = obj;

    for (let i = 0; i < ln.path.length; i++) {
        if (result == null) return undefined;
        result = result[ln.path[i]];
    }

    return result;
};


exports.view = view;