

'''
k months are profitable if they are increasing. determine the number of intervals that are 
profitable. 

'''

def countHighlyProfitableMonths(stockPrices, k):
    n, count = len(stockPrices), 1
    a = []
    i = 0
    while i + 1 < n:
        if (stockPrices[i + 1] > stockPrices[i]):
            count += 1
            i += 1
        else:
            a.append(count)
            count = 1
            i += 1
    a.append(count)
    answer = 0
    for x in a:
        if x >= k:
            answer += (x - k + 1)
    return answer

stocks = [5,3,5,7,8]
k = 3
# print(countHighlyProfitableMonths(stocks, k))


'''
Balanced or Not? Given a string containing < and > only and a number
of allowable replacements , check if each expression can be balanced and 
update an array with 0 if it cannot and 1 and if it can

'''


def balancedOrNot(expressions, maxreplace):
    hashtable = {'<':'>'}
    result = []
    for i, e in enumerate(expressions):
        stack = []
        count = 0
        for c in e:
            if c in hashtable:
                stack.append(hashtable[c])
            elif stack and c == stack[-1]:
                stack.pop()
            else:
                count += 1
        if count > maxreplace[i]:
            result.append(0)
        else:
            result.append(1)
    return result

exp = ['<<>>', '<>', '<><>', '>>', '<<>','><><']
mr = [0,1,2,2,2,2]
print(balancedOrNot(exp, mr))

