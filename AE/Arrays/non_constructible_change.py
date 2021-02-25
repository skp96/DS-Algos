"""
- input: an array of positive integers representing the values of coins
- output: return the min amount of change (min sum of money) that you CANNOT create
- notes:
  - given coins can have any positive integer values and aren't necessarily unique (you can have multiple coins of the same value)
  - example: coins = [1, 2, 5], and the minimum amount of change you cannot create is 4
  - if not given any coins, the min amount of change you cannot create is 1
- Logic:
  - since looking for min change that cannot be made, sort the coins array
  - create a change variable that keeps track of all the change you can create; for example change = 3 means you can create change for a value of 1, 2, and 3
  - iterate through the coins array
    - if coin value is greater than change value + 1, return change value + 1 --> because the coin you're about to receive will allow you to make change for that coin value and any combination of the coin value + range of change value from 1 to change value, but not change value + 1
    = if not, add coin to change
  - at the end return change + 1 --> if coins array is empty than change value will be 0, thus we cannot make 0 + 1 = 1 amount of change
"""


def non_constructible_change(coins):
    coins.sort()

    change = 0

    for coin in coins:
        if coin > change + 1:
            return change + 1
        change += coin

    return change + 1
