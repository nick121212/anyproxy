/*
 *  Promise的工具类
 */

function defer() {
    const d = {};
    d.promise = new Promise((resolve, reject) => {
        d.resolve = resolve;
        d.reject = reject;
    });

    return d;
}

export default {
    defer
};