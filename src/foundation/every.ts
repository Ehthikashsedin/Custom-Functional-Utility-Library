export function every<T>(fn:(value: T, index: number, users: T[])=> boolean, users: T[]): boolean{
    for(let i = 0;i< users.length;i++)
    {
        if(!(fn(users[i], i, users)))
        {
            return false;
        }
    }
    return true;
}