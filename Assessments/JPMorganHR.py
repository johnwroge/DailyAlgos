

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
print(countHighlyProfitableMonths(stocks, k))