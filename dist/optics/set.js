"use strict";

const clone = (obj) => {
    if (Array.isArray(obj)) return obj.slice();
    if (obj && typeof obj === "object") return Object.assign({}, obj);
    return obj;
};

const set = (ln, value, obj) => {
    const recursiveSet = (index, current) => {
        const key = ln.path[index];
        const cloned = clone(current);

        if (index === ln.path.length - 1) {
            cloned[key] = value;
            return cloned;
        }
        cloned[key] = recursiveSet(index + 1, current[key]);
        return cloned;
    };

    return recursiveSet(0, obj);
};

exports.set = set;