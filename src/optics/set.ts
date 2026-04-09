export function set(path: string[], value: any, obj: any): any {
if (path.length === 0) return value;

const [key, ...rest] = path;

return {
...obj,
[key]: rest.length
? set(rest, value, obj[key] || {})
: value
};
}
