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

def tasks(tasksList):
    optimalMachines = 0

    machinesAvailable = []
    tasksQueue = []

    for task in tasksList:
        tasksQueue.append([task[0], task[1]])

    tasksQueue.sort(key=lambda x: x[0])

    while tasksQueue:
        task = tasksQueue.pop(0)
        machineInUse = None

        if machinesAvailable and task[0] >= machinesAvailable[0][0]:
            machineInUse = heapq.heappop(machinesAvailable)
            machineInUse = [task[1], machineInUse[1]]
        else:
            optimalMachines += 1
            machineInUse = [task[1], optimalMachines]

        heapq.heappush(machinesAvailable, machineInUse)

    return optimalMachines

# Driver code
inputs = [
    [
        [1, 1],
        [5, 5],
        [8, 8],
        [4, 4],
        [6, 6],
        [10, 10],
        [7, 7]
    ],
    [
        [1, 7],
        [1, 7],
        [1, 7],
        [1, 7],
        [1, 7],
        [1, 7]
    ],
    [
        [1, 7],
        [8, 13],
        [5, 6],
        [10, 14],
        [6, 7]
    ],
    [
        [1, 3],
        [3, 5],
        [5, 9],
        [9, 12],
        [12, 13],
        [13, 16],
        [16, 17]
    ],
    [
        [12, 13],
        [13, 15],
        [17, 20],
        [13, 14],
        [19, 21],
        [18, 20]
    ]
]

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
print(staircase(5))