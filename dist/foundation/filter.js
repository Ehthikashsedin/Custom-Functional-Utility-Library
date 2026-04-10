"use strict";

export function filter(fn, users)
{
    if(!Array.isArray(users))
    {
        return [];
    }
   const result = []
   let index = 0;
   for(let i = 0;i< users.length; i++)
   {
     if(fn(users[i], i , users))
     {
        result[index] = users[i];
        index++;
     }
   }
   return result;
}