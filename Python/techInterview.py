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
# print(fourth_example)

# 1 Character Input 
# name = input('What is your name: ')
# age = int(input('Enter your age: '))
# year = 2023 - age + 100
# print(name + ",you will be 100 years old")

# input stored will be a string regardless of data type



# 2 even or odd 

# 3 less than five
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
# print([x for x in a if x < 5])
        
# 4 lists
# num = input('enter a number')
num = 15


def Divisors(num):
    return [x for x in range(1,num) if num % x == 0]


#5 List overlap

def find_common_elements(a, b):
    return set(a[x] for x in range(len(a))if a[x] in b)
# print(find_common_elements([1,2,3,4,5],[1,3,5,7,9]))

def palindrome(s1):
    return s1 == ''.join(reversed(s1))
# print(palindrome('racecar'))


#7 list comprehension

a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
b = [x for x in a if x % 2 == 0]
# print(b)


import sys

# 8 rock paper scissors

# user1 = input("What's your name?")
# user2 = input("And your name?")
# user1_answer = input("%s, do yo want to choose rock, paper or scissors?" % user1)
# user2_answer = input("%s, do you want to choose rock, paper or scissors?" % user2)

def compare(u1, u2):
    if u1 == u2:
        return("It's a tie!")
    elif u1 == 'rock':
        if u2 == 'scissors':
            return("Rock wins!")
        else:
            return("Paper wins!")
    elif u1 == 'scissors':
        if u2 == 'paper':
            return("Scissors win!")
        else:
            return("Rock wins!")
    elif u1 == 'paper':
        if u2 == 'rock':
            return("Paper wins!")
        else:
            return("Scissors win!")
    else:
        return("Invalid input! You have not entered rock, paper or scissors, try again.")
        sys.exit()

# print(compare(user1_answer, user2_answer))

# 9 
import random
def Game():
    userInput = -1
    guesses = 0
    a = random.randint(1, 9)
    while userInput != 'exit' and userInput != a:
        userInput = input('Enter a number: ')
        num = int(userInput)
        if num < a:
            print('too low')
        elif num > a:
            print('too high')
        else:
            print(f"you got it in {guesses}")
            print('type exit to leave game')
    return
        
# Game()


# 10 return common elements in list
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

def common(l1, l2):
    commons = set(a) & set(b)
    return list(commons)
# print(common(a,b))
random_list_of_10  = [random.randint(0, 10) for _ in range(10)]

# print(random_list_of_10)

#11 is prime

number = input("Please enter a number" + "\n" + ">>>")
number = int(number)
prime = False #initiate boolean for true false, default false
if number > 0:
    for x in range (2, number - 1): #this range excludes number and 1, both of which number is divisible by
        if number % x != 0: #If number isn't evenly divisible by x, start over with the next one
            continue 
        elif number % x == 0: #If number is evenly divisible by x, it can't be prime
            sys.exit("The number is not prime.")
    sys.exit("The number is prime.") #number wasn't evenly divisible by any x, so it's prime
elif number == 0:
    sys.exit("The number is not prime.") #According to the Google, 0 is not prime
else:#if number is less than 0, the number is not prime (according to the Google).
    sys.exit("The number is not prime.")