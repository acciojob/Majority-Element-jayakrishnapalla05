//your code here
function MajorityElement(nums){
	let map=new Map();
	for(let i=0;i<nums.length;i++)
		{
			map.set(nums[i], (map.get(nums[i]  || 0))+1);
		}

	let maxcount=0;
	let element;
	for(let [num,count] of map)
		{
			if(count>maxcount)
			{
				maxcount=count;
				element=num;
			}
		}
	document.write("Majority Elements "+element);
	
}
MajorityElement(nums);
