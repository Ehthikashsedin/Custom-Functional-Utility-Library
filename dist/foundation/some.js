export function some(fn, users)
{
    if(!Array.isArray(users))
    {
        return false;
    }
    for(let i = 0;i<users.length;i++)
    {
        if(fn(users[i],i ,users))
        {
            return true;
        }
    }
    return false;
}