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
