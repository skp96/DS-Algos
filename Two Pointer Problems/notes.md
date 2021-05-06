# Two Pointer Pattern:

* This type of pattern is typically used to solve problems dealing with sorted arrays (or Linked Lists), where you need to find a set of elements that fulfill certain constraints

## Example Problem: Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target
### Array: [1,2,3,4,6], Target Sum 6, Output: [2,4]

* The brute force approach would require you to use nested for loops and for every element in the input array, explore each remaining element in the array until you find a pair that sums to the target sum. 
* Since the array is sorted, the efficient way to solve this problem would be to utilize a left pointer and right pointer. At every step, we check if the numbers pointed by the two pointers add up to the target sum. If not, we do one of two things
  * If the sum of the two numbers is less than the target sum, this means we need a pair with a larger sum, so increment the pointer positioned at lower value numbers
  * If the sum of the two numbers is greater than the target sum, this means we need a pair with a smaller sum, so decrement the pointer positioned at higher value numbers