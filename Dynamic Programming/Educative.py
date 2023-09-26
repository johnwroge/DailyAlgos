'''
Knapsack 

'''

# Naive approach


'''
Naive recursive solution

Here’s how the naive recursive algorithm works:

Base case: If there are no items left to add or the maximum capacity of th
 knapsack has been reached, we return 
0
0
.

Recursive case 1: If the current item has a weight less than or equal to the remaining
 capacity of the knapsack, it can be added to the knapsack. At this point, we make two 
 recursive calls to solve two sub-problems:

Find the maximum value of items we can include in the knapsack, while including the
 current item.

Find the maximum value of items we can include in the knapsack, while excluding the
 current item.

Of the two options, we choose the one that yields the higher value.

Recursive case 2: On the other hand, if the weight of the item is greater than the 
remaining capacity of the knapsack, the item cannot be added to the knapsack.
 Therefore, we use a recursive call to move on to the next item, without adding 
 this item to the knapsack.
'''

def find_max_helper(capacity, weights, values, n):
   
    if n <= 0 or capacity == 0:
        return 0
    
    if weights[n - 1] <= capacity:
        # add the item to the nap
        return max(
            values[n - 1] + find_max_helper(capacity - weights[n - 1], weights, values, n - 1),
             find_max_helper(capacity, weights, values, n - 1)
        )
    else:
        # don't add the item
        
        return find_max_helper(capacity, weights, values, n - 1)
    
   
def find_max(capacity, weights, values):
    n = len(weights)

    result = find_max_helper(capacity, weights, values, n)
    return result
   
def main():
    weights = [1, 2, 3, 5]
    values = [1, 5, 4, 8]
    capacity = 10
    return find_max(capacity, weights, values)
# print(main())



'''
Memoization top down technique 
'''


def find_max_helper(capacity, weights, values, n):
    cache = {}
    if capacity in cache:
        return cache[capacity]
    if n <= 0 or capacity == 0:
        return 0
    
    
    if weights[n - 1] <= capacity:
        # add the item to the nap
        cache[capacity] = max(
            values[n - 1] + find_max_helper(capacity - weights[n - 1], weights, values, n - 1),
             find_max_helper(capacity, weights, values, n - 1)
        )
        return cache[capacity]
    else:
        # don't add the item
        
        cache[capacity] = find_max_helper(capacity, weights, values, n - 1)
        return cache[capacity]

weights = [1, 2, 3, 5]
values = [1, 5, 4, 8]
capacity = 10
n = len(weights)

# print(find_max_helper(capacity, weights, values, n))

'''
# Coinsum, an unbounded napsack problem

'''

def calculate_minimum_coins(coins, rem, counter):  #Helper function that calculates amount left to be calculated and tells what it's value can be.
    if rem < 0: 
        return -1
    if rem == 0:
        return 0
    if counter[rem - 1] != float('inf'):
        return counter[rem - 1]
    minimum = float('inf')

    for s in coins: #Recursive approach to keep in account every number's result 
        result = calculate_minimum_coins(coins, rem - s, counter)
        if result >= 0 and result < minimum:
            minimum = 1 + result

    counter[rem - 1] =  minimum if minimum !=  float('inf') else  -1 
    return counter[rem - 1]

def coin_change(coins, total): #Main function
    if total < 1:
        return 0
    return calculate_minimum_coins(coins, total, [float('inf')] * total)





def find_tribonacci(n):
    if n < 3:
        return 1 if n else 0

    first_num, second_num, third_num = 0, 1, 1
    for _ in range(n - 2):
        first_num, second_num, third_num = second_num, third_num, first_num + second_num + third_num
    return third_num

print(find_tribonacci(4))


def can_partition_array(nums):

    # Calculate sum of array.
    array_sum = sum(nums)
    
    # If array sum is odd, it cannot be partitioned into equal sum subsets.
    if array_sum % 2 != 0:
        return False
    
    # Calculate the subset sum.
    subset_sum = array_sum//2

    # Create a lookup table and fill all entries with FALSE.
    dp = [[False for i in range(len(nums)+1)] for j in range(subset_sum + 1)]
    
    # Initialize the first row as TRUE as each array has a subset whose sum is zero
    for i in range(0, len(nums) + 1):
        dp[0][i] = True
    
    # Fill the lookup table in a bottom-up manner.
    for i in range(1, subset_sum + 1):
        for j in range(1, len(nums)+1):
            if nums[j - 1] > i:
                dp[i][j] = dp[i][j - 1]
            else:
                dp[i][j] = dp[i - nums[j - 1]
                                      ][j - 1] or dp[i][j - 1]
              
    # Return the last index of the matrix, which is our answer
    return dp[subset_sum][len(nums)]
