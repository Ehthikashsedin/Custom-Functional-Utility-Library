"use strict";

const lens = (path) => ({
    path: path.split("."),
});

exports.lens = lens;