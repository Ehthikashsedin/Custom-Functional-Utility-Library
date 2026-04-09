export function view(path: string[], obj: any): any {
let result = obj;

for (let i = 0; i < path.length; i++) {
if (result == null) return undefined;
result = result[path[i]];
}

return result;
}
