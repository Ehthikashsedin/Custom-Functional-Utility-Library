export function some<T>(fn: (value: T, index: number, array: T[]) => boolean, users: T[]): boolean{
    if(!Array.isArray(users))
    {
        return false;
    }
    for(let i = 0;i<users.length;i++)
    {
        if(fn(users[i], i, users))
        {
            return true;
        }
    }
    return false;
}