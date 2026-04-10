export function map<T, U>(fn: (value: T, index: number, array: T[]) => U, nums: T[]): U[] {
    if(!Array.isArray(nums))
    {
        return [];
    }
    const result: U[] = [];
    for(let i =0;i<nums.length;i++)
    {
        result[i]=fn(nums[i],i,nums);
    }
    return result;
}

