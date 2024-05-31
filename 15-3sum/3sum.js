/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sol = [];
    nums.sort((a,b)=>{
        return a-b
    })
    
    for(let i=0;i<nums.length;i++){
        if(i > 0 && nums[i-1] === nums[i]){
            continue;
        }

        let l = i+1;
        let r = nums.length -1;
        while(l<r){
            let sum = nums[i] + nums[l] + nums[r];
            if(sum >0){
                r= r-1;
            }else if(sum <0){
                l = l +1;
            }else{
                sol.push([nums[i],nums[l],nums[r]]);
                l=l+1;
                while(nums[l] === nums[l-1] && l<r){
                    l=l+1;
                }
            }
        }
    }
    return sol
};
