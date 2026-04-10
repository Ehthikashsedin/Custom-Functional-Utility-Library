"use strict";
export function search(users, arg1, arg2)
{
    if(!Array.isArray(users))
    {
        return undefined;
    }
    if(typeof arg1 === "function")
    {
        for(let i=0;i<users.length;i++)
        {
            
            if(item !== null && arg1(item, i, users))
            {
                const item = users[i];
                return item;
            }
        }
    }
    else if(typeof arg1 === "string")
    {
        for(let i=0;i<users.length;i++)
        {
            const item = users[i];
            if(item !== null && users[i][arg1] === arg2)
            {
                return item;
            }
        }
    }
    return undefined;
    
}