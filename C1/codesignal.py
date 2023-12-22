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