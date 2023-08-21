'''


'''

n = 10
# list comprehension, 2nd x is iterator
myList = [2 * x for x in range(n + 1)]
# range(start, stop) stop is non inclusive
# range(start, stop, step)
# print(myList)
# adjacency list of graph
myDict = {x: [] for x in range(n + 1)}
''' 
python data object model, underlying 
dictionary in everything. both list and dictionary
have method __iter__
range call is producing range object
range(start, end(non inclusive), step (integer))
'''
# every negative element from start to stop, [-1::-1]
# [start: end: step]
reverseList = [x for x in myList[-1::-1]]
# print(reverseList)
x, y = 5,5 
# grid of 5 by 5 
two_dList = [[5 for x in range(x)] for y in range(y)]
two_example = [[5] * x for y in range(y)]
# print(two_example)
# create list iterate from 0 to x for each row 0 to range y
third_example = [[k for k in range(x)] for _ in range(y)]
# print(third_example), iterate over third like a nested for loop, grid
# create a new list, except each value in it will be doubled, no range
# for each array in 2d array, double 
# 50 examples 
fourth_example = [[2 * k for k in sublist] for sublist in third_example]
print(fourth_example)
