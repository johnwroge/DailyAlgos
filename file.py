import numpy as np

str_num = '1,2,3,4,5'
arr = np.array([int(i) for i in str_num.split(',')])
for i in arr:
    print(i)
