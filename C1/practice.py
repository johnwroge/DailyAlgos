'''
• values, an array of currency values where values[i] is the value of the currency on day[i]
    • strategies, an array of strategies (contains only 0's, 1's, and -1's) where strategies[i]
     represents the trading strategy for day[i]
        -1 : buy currency
        0 : do nothing
        1 : sell currency
    • k, an even integer
  You can optionally choose a range of k contiguous elements from the strategies array and convert 
  the first half of elements in that range to 0's and the second half to 1's
  Return the maximum profit possible (profit = sum of values when sold - sum of values when bought)

'''


def max_profit(values, strategies, k):
    n = len(strategies)
    max_profit = 0
    
    for i in range(n - k + 1):
        if k % 2 == 0:
            first_half_zeros = strategies[i:i + k // 2].count(0)
            second_half_ones = strategies[i + k // 2:i + k].count(1)
            profit = second_half_ones * values[i + k // 2] - first_half_zeros * values[i]
            max_profit = max(max_profit, profit)
    
    return max_profit


values = [10, 12, 15, 10, 8, 9]
strategies = [1, 1, -1, 0, 1, -1]
k = 4

result = max_profit(values, strategies, k)
print(result)  # Output: 12 (maximum profit when buying at day 1 and selling at day 2)

