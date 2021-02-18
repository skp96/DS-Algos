"""
- input: array of positive ints representing values of coins 
- output: returns the min amount of change (the min sum of money) you CANNOT create
- notes:
  - coins aren't necessarily unique (meaning you can have multiple coins of the same value)
- logic:
  - init a variable called change: will track the amount of change that can be made as traversing through the list of coins
  - sort list
  - if the coin currently being visited is greater than change + 1, return change + 1 --> for example; change = 3 which means change can be created for an amount of 1, 2, and 3. If the coin being visted is 5, change can be created for 5, 5 + 1 = 6 (can create a change of 1), 5 + 2 = 7 (can create a change of 2), and 5 + 3 (can create a change of 3), BUT cannot create change for 3 + 1 = 4. Because the value of the coin is greater than 3 + 1
"""


def non_constructible_change(coins):
    coins.sort()

    current_change_created = 0
    for coin in coins:
        if coin > current_change_created + 1:
            return current_change_created + 1

        current_change_created += coin

    return current_change_created + 1

# Time Complexity: O(nlogn)
# Space Complexity: O(1)
