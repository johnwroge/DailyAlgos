'''
quiz for syntax
'''
import collections
import heapq
import math
thing = [1,2,3]
list2 = [2,3,5,1,0,2,22]

# add an element to a specific index in an array
# list2.insert(0,22)


# append item to list

# remove item from list


# remove item at index


# find index of 1st occurence
# print(list2.index(2))

# find count of number of times item appears
print(list2.count(3))
# sort a list
list2.sort()

# reverse a list
list2.sort(key=lambda x: x, reverse=True)

# reverse a list and return new list
new_list = list(reversed(list2))
# print(new_list)

# create a new list of list1 and list 2
list3 = list2 + list2

# modify list 1 to contain items from list2
list2.extend(list2)

# remove all elements from a list
# list2.clear()

''' Are strings mutable in python? '''

# reverse a string using a list***
s = 'abc'
t = ''.join(list(reversed(s)))

# reverse a string using slices***
t2 = s[::-1]

# change number to string

# change string to lowercase

# change string to uppercase

'What about upper or lowercase for matching?'

# replace parts of string with new 

# split a string by a separator
s.split(' ')
# split a string in a list of characters

# remove white space from string
thing = '  a  b  c'
thing2 = 'def'
# concatenate two string use literal syntax

# concatenate two strings use operator

# create an adjacency list using a library with both a list and a set 

adjList = collections.defaultdict(list)
adjList2 = collections.defaultdict(set)

'''what is the difference in time and space complexity for operations in a list and a set?'''

# create an adjacency list using dictionary comprehension
edges = [[1,3],[3,4],[5,6],[8,9]]

adjList = {x:[y] for x,y in edges}

# create a deque

deque = collections.deque()

# add a number to the left part of deque
deque.appendleft('thing')

# pop an element from the left part of deque
deque.popleft()

# create an object for counting items 

# create a counter of an object

# rotate a list by k 


# create new list of 2d array sorted by 1st element

# create new list of 2d array sorted by 1st element in reverse

# sort 2d array sorted by 1st element in place

# create a new list of tuples

# create a new dictionary from list of tuples

# What happens if you have a duplicate key?

# get dictionaries keys

# get dic values

# get dict view object

# remove item at particular key and return its value
new_obj = {1:2, 3:4, 5:6}
new_obj2 = {1: 3, 6:7, 8:9, 9:10}
# remove all items from dictionary

# get a particular value at a key

# change dictionary key value with one from another 

# remove a value

'''
Heaps
'''

# create a minimum heap from a list of numbers
list1 = [2,3,5,6]
heapq.heapify(list1)

# create a maximum heap from list of numbers

'''
Sets
'''

# create a set 

# convert a list of numbers to a set

# set operations:

# union |


# intersection & or intersection()

# difference - or difference()

# symmetric difference

# subset <= issubset()

# superset >= issuperset()
# 
# 

# create new array of length n filled with 0

# convert string in binary to number (remember what to include?)
bin_string = '1010101010'
num = int(bin_string, 2)
# print(num)
# find the intersection of 2 sets




# take the product of a list of numbers
arr = [1,2,3,4,5,6,7,8,9,10]
# import math
# p = math.prod(arr)


# rotate a 2d grid by 90degrees
# https://stackoverflow.com/questions/8421337/rotating-a-two-dimensional-array-in-python


# what is the difference between a tuple, list and object? 



# iterate over key val pairs in dictionary and return a list of these

