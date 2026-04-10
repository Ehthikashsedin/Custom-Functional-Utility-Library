export function filter<T>(fn:(value: T, index: number, array: T[]) => boolean, users: T[]): T[]
{
    if(!Array.isArray(users))
    {
        return [];
    }
   const result: T[] = [];
   for(let i =0;i<users.length;i++)
   {
    if(fn(users[i], i, users))
    {
     result[result.length] = users[i]
    }
   }
   return result;
}