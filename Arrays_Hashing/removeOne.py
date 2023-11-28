


from typing import List


def is_sorted(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            return False
    return True      
def canBeIncreasing(nums: List[int]) -> bool:
    copy = nums[:]
    for i in range(len(copy)):
        copy.pop(i)
        if (is_sorted(copy)):
            return True
        else:
            copy = nums[:]
            
    return False
        

        
     
        

print(canBeIncreasing([1,1,1]))