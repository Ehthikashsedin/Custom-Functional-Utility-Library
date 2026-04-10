"use strict";

export function map(fn,  nums)
{
    if(!Array.isArray(nums))
    {
        return [];
    }
    const result  = [];
    for(let i =0;i<nums.length;i++)
    {
        result[i]=fn(nums[i],i, nums);
    }
    return result;
}