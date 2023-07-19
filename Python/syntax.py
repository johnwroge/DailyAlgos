'''
Constructors

I. Basics
Types
Type keywords are also constructors.
py	js
list()	Array (single-ended stack. use collections.deque for double-ended queue)
dict()	Object/Map
tuple()	list, but immutable, fixed-length, hashable. Looks like this: first, second, third (sometimes wrapped in parentheses).
set()	Set
int()/float()/complex()	Number
str()	String
bool()	Boolean
Methods
py	js
a, b = b, a	;[a, b] = [b, a]
arr.append(item) or arr + [item]	arr.push(item)
arr.pop()	arr.pop()
arr.pop(0) or deq = deque(arr) deq.popleft()	arr.shift()
[item] + arr or deq = deque(arr) deq.appendleft(item)	arr.unshift(item)
arr = arr[:idx] + [item] + arr[idx+1:] or arr.insert(idx, item)	arr.splice(idx, 1, item)
[*arr1, *arr2] or arr1 + arr2	[...arr1, ...arr2]
{**obj1, **obj2}	{ ...obj1, ...obj2 }
dictionary.keys()	Object.keys(dictionary)
dictionary.values()	Object.values(dictionary)
dictionary.items()	Object.entries(dictionary)
del dictionary[key]	delete dictionary[key]
Built-in Functions
print(): console.log()
Iterables
slice(start, stop, step=1)
start: inclusive; stop: exclusive; step: reverse order if negative
arr = [1, 2, 3, 4, 5]
arr[:2]		# [1, 2]
arr[3:]		# [4, 5]
arr[1:-1:2]	# [2, 4]
arr[::-1]	# [5, 4, 3, 2, 1]
arr[:]		# arr.slice()
range(start=0, stop, step=1)
list(range(10))
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list(range(1, 30, 5))
# [1, 6, 11, 16, 21, 26]
list(range(0, -10, -1))
# [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
for i in range(10):
for (let i = 0; i < 10; ++i) {}
enumerate(iterable)
for i,e in enumerate(iterable):
array.forEach((e, i) => {})
for (const [i, e] of array.entries()) {}
len(iterable): .length
reversed(iterable): Array.prototype.reverse()
sorted(iterable, key=lambda a, b: a - b, reverse=False): Array.prototype.sort((a, b) => a - b)
any(iterable): Array.prototype.some()
all(iterable): Array.prototype.every()
zip(*iterables)
x = [1, 2, 3]
y = [4, 5, 6, 7]
list(zip(x, y))
# [(1, 4), (2, 5), (3, 6)]
Strings
chr(integer): String.fromCodePoint(integer) (cf. .fromCharCode())
ord(character): character.codePointAt(0) (cf. .charCodeAt())
Numbers
+math.inf, -math.inf, float('inf'): +Infinity, -Infinity
left <= x < right or y == 0: (x >= left && x < right) || y === 0
abs(): Math.abs()
sum(): arr.reduce((acc, curr) => acc + curr, 0)
min(): Math.min()
max(): Math.max()
math.sqrt(): Math.sqrt()
a ** x, pow(a, x): Math.pow()
a // b, math.floor(a / b): Math.floor(a / b)
math.ceil(): Math.ceil()
round(): Math.round()
math.trunc(): Math.trunc()
math.dist(p, q): (p, q) => (Math.sqrt(Math.pow(p[0] - q[0], 2) + Math.pow(p[1] - q[1], 2)))
Line Continuation
# NO
a = '1' + '2' +
	'3' + '4'

# YES
a = '1' + '2' + \
	'3' + '4'
a = ('1' + '2' +
	'3' + '4')
II. Syntactic Sugar
List Comprehensions
Map
[2 * e for e in arr]
arr.map((e) => 2 * e)
Filter
if/else comes after for

[e for e in arr if e % 2 == 0]
arr.filter((e) => e % 2 === 0)
Selection
if/else comes before for

[e if a else 1 if b else 0 for e in arr]
const newArr = []
for (const e of arr) {
  newArr.push(a ? e : b ? 1 : 0)
}
Nested Iteration
for statements in nested order

[e for row in matrix for e in row]
const flattened = []
for (const row of matrix) {
  for (const e of row) {
    flattened.push(e)
  }
}
Collections
defaultdict
removes need to check for if (obj[key] === undefined) while updating object.
passing in lambda: x defaults to x.
acc = defaultdict(lambda: defaultdict(list))
acc[storeId][date].append(transaction)
const acc = {}
if (acc[storeId] === undefined) acc[storeId] = {}
if (acc[storeId][date] === undefined) acc[storeId][date] = []
acc[storeId][date].push(transaction)
passing in int defaults to 0, list, set, dict defaults to empty collection.
s = 'abacd'
idxs, cnt = defaultdict(list), defaultdict(int)
for i,e in enumerate(s):
	idxs[e].append(i)
	cnt[e] += 1
const s = 'abacd'
const [idxs, cnt] = [{}, {}]
for (const [i, char] of s.split('').entries()) {
	idxs[char] = [...(idxs[char] ?? []), i]
	cnt[char] = (cnt[char] ?? 0) + 1
}
Counter
dictionary for counting frequency of elements.
cnt = Counter('abacd')
cnt['d'] += 3
# Counter({'a': 2, 'b': 1, 'c': 1, 'd': 4})
Itertools
for i,j,k in product(range(m), range(n), range(p)):
for (let i = 0; i < n; ++i) {
	for (let j = 0; j < m; ++j) {
		for (let k = 0; k < p; ++k) {}
	}
}
for i,j,k in product(range(2), repeat=3):
for (let i = 0; i < 2; ++i) {
	for (let j = 0; j < 2; ++j) {
		for (let k = 0; k < 2; ++k) {}
	}
}
Combinatoric iterators
Replaces dozens of lines of backtracking implementations.
product('ABCD', repeat=2)	AA AB AC AD BA BB BC BD CA CB CC CD DA DB DC DD
permutations('ABCD', 2)	AB AC AD BA BC BD CA CB CD DA DB DC
combinations('ABCD', 2)	AB AC AD BC BD CD
combinations_with_replacement('ABCD', 2)	AA AB AC AD BB BC BD CC CD DD
accumulate(iterable, func=operator.add)
Same as reduce() but preserves all intermediate values.
Useful for prefix sum problems.
accumulate([1,2,3,4,5])				# 1 3 6 10 15
accumulate([1,2,3,4,5], initial=100)		# 100 101 103 106 110 115
accumulate([1,2,3,4,5], func=operator.mul)	# 1 2 6 24 120
@functools.cache
Minimizes boilerplate when solving Dynamic Programming problems using recursion.
Automatically memoizes the return values for each unique set of input arguments.
def house_robber(nums):
    @cache
    def dp(i):
        if i < 0: return 0
        return max(nums[i] + dp(i - 2), dp(i - 1))
    return dp(len(nums) - 1)
var houseRobber = function(nums) {
    const memo = new Array(nums.length).fill(null)
    return (function dp(i = nums.length - 1) {
        if (i < 0) return 0
        if (memo[i] !== null) return memo[i]
        return memo[i] = Math.max(nums[i] + dp(i - 2), dp(i - 1))
    })()
}
Bisect
Binary Search with a single function call.

bisect_left(a=array, x=target, key=...): returns insertion point index.
bisect_right: same, but returns insertion point that comes after any existing duplicate target entries in a.
arr = [1, 2, 2, 3, 4]
bisect_left(arr, 2)	# 1
bisect_right(arr, 2) 	# 3
Heapq
Heap / Priority Queue data structure

heappush(pq, item)
heappop(pq)
heapify(list)
in-place transformation into heap
O(n) time, O(1) space
no return value
heappushpop, heapreplace, nsmallest, nlargest: more optimized than successive heappush, heappop calls.
III. Advanced
Lambdas
lambda x, y: 2 * x + y
(x, y) => (2 * x + y)
destructuring of params not supported.
# YES
lambda vals: print(vals[0], vals[1])
# NO
lambda [x, y]: print(x, y)
Closure
nonlocal
Binds variables in a nested/inner scope to the nearest enclosing/outer lexical scope.
def outer():
    x = 1
    def inner():
        nonlocal x
        x = 2
        print("inner:", x)
    inner()
    print("outer:", x)
outer()

## WITH `nonlocal x` in `inner()`: closure
# inner: 2
# outer: 2

## WITHOUT: block scoped
# inner: 2
# outer: 1
NOT required when...
Referencing a variable in the immediate outer-scope without mutating it.
Updating a composite data structure defined in the outer scope.
def outer():
    x = 1
    y, z, w = list(), set(), dict()
    def inner():
    	y.append(2)
	z.add(3)
	w[0] = 0
        print("inner:", x, y, z, w)
    inner()
    print("outer:", x, y, z, w)
outer()

# inner: 1 [2] {3} {0: 0}
# outer: 1 [2] {3} {0: 0}
OOP
Examples:

https://leetcode.com/problems/design-twitter/solutions/2900399/python-oo-design-beats-939-with-dict-set-priorityqueue/
Union Find implementation:
class UnionFind:
    def __init__(self, size):
        self.roots = list(range(size + 1))

    def find(self, x):
        if self.roots[x] == x:
            return x
        self.roots[x] = self.find(self.roots[x])
        return self.roots[x]

    def union(self, x, y):
        rootX, rootY = map(self.find, (x, y))
        if rootX == rootY: return
        self.roots[rootY] = rootX
'''

