



'''
You are given an integer array matches where matches[i] = [winneri, loseri] 
indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.
 


use set to keep track of players that have lost

use counter to track how many each player has lost,
    use list comp to only keep keys that have count 1


Example 1:

Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
Example 2:

Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].
 

Constraints:

1 <= matches.length <= 105
matches[i].length == 2
1 <= winneri, loseri <= 105
winneri != loseri
All matches[i] are unique.
'''



from typing import List
import collections

# def findWinners(matches: List[List[int]]) -> List[List[int]]:
#     losses = collections.defaultdict(int)
#     winners = []
#     one_loss = []
    
#     for x, y in matches:
#         losses[y] = losses.get(y, 0) + 1
    

#     for x, y in matches:
#         if x not in losses and x not in winners:
#             winners.append(x)
#         if losses[y] == 1:
#             one_loss.append(y)
#     print(losses)
#     winners.sort(), one_loss.sort()

#     return [winners, one_loss]

def findWinners(matches: List[List[int]]) -> List[List[int]]:
    winners, losers, = [],[]
    table = {}
    for win, loss in matches:
        table[win] = table.get(win, 0)
        table[loss] = table.get(loss,0) - 1
    
    for k, v in table.items():
        if v == 0:
            winners.append(k)
        elif v == -1:
            losers.append(k)
    
    return [sorted(winners), sorted(losers)]
            

    

    
        
   

matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
print(findWinners(matches))

# [[1,2,10],[4,5,7,8]]