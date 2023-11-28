def subsetA(arr):
    arr.sort()
    n = len(arr)
    summ = sum(arr)
    total, res = 0, []
    for num in range(n - 1, -1, -1):
      if total >= summ:
          break
      summ -= num
      total += num
      res.append(num)
    res.sort()
    return res


'''
Given a set of n tasks the ith (0 <=i<n) task runs
from time start[i] through end[i]. Implement a task scheduler method
that finds the minimum number of machines required to complete the tasks
A task can be scheduled on exactly one machine and one machine can run only one 
task at a time

ex: n = 5, start = [1, 8, 3, 9, 6], end = [7, 9, 6, 14, 7]
minmachines = 3

'''

import heapq
MAX = 100001

def tasks(start, end):
    tasks_list = [(s,e) for s,e in zip(start, end)]
    optimal_machines = 0
    machines_available = []
    heapq.heapify(tasks_list)
    while tasks_list:  
        task = heapq.heappop(tasks_list)
        if machines_available and task[0] >= machines_available[0][0]:
            machine_in_use = heapq.heappop(machines_available)
            machine_in_use = (task[1], machine_in_use[1])
        else:
            optimal_machines += 1
            machine_in_use = (task[1], optimal_machines)
        heapq.heappush(machines_available, machine_in_use)
    return optimal_machines

def minHalls(start, end) :
    tasks_list = [[s,e] for s,e in zip(start, end)]
    prefix_sum = [0] * MAX
    n = len(start)

    for i in range(n) :
        prefix_sum[tasks_list[i][0]] += 1
        prefix_sum[tasks_list[i][1] + 1] -= 1
         
    ans = prefix_sum[0]

    for i in range(1, MAX) :
        prefix_sum[i] += prefix_sum[i - 1]
        ans = max(ans, prefix_sum[i])
         
    return ans; 

# Driver code
input1 = [1,8,3,9,6]
input2 = [7,9,6,14,7]
print(minHalls(input1,input2))

# for i, inputTaskList in enumerate(inputs):
#     print(f"{i + 1}. Task = {inputTaskList}")
#     print(f"\tOptimal number of machines = {tasks(inputTaskList)}")
#     print('-' * 100)


def miniMaxSum(arr):
    arr.sort()
    minsum = sum(arr[0:4])
    maxsum = sum(arr[1:5])
    return f'{minsum}  {maxsum}'

# print(miniMaxSum([1,2,3,4,5]))

def staircase(n):
    numStars = 1
    star = '*'
    numSpace = n - numStars
    space = ' '
    for i in range(n):
        print(numSpace * space, numStars * star)
    
        numSpace -= 1
        numStars += 1
# print(staircase(5))