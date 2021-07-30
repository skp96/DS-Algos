/*
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (e.g. you can have multiple coins of the same value).

For example, if given [1,2,5], the minimum amount of change you cannot create is 4. You can make change for 1, 2, 3 (1+2), and 5, but not 4. If no given coins, the minimum amount of change you can't create is 1

Sample Input:
coins = [5,7,1,1,2,3,22]

Sample Output:
20

*/

const nonConstructibleChangeNaive = (coins) => {
  
  //in search for minimum amount of change that cannot be created, so sort array
  coins.sort((a,b) => a - b);
  //track the change created
  let changeCreated = 0;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    //if the coin value is greater than the change created so far + 1
    //then we can create change for every value from 1 to changeCreated and the coin value, but not changeCreated + 1
    if (coin > changeCreated + 1) return changeCreated + 1;

    changeCreated += coin;
  } 
  return changeCreated + 1;
}

// Time Complexity: O(NlogN);
// Space Complexity: O(1);