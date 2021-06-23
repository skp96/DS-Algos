# Cyclic Sort

* This type of pattern is typically used to solve problems dealing with arrays containing numbers in a given range.


## Example Problem: Given an unsorted array containing numbers take from range '1 to n'. The array can have duplicates, which means that some numbers will be missing. Find all the missing numbers.
* To efficiently solve this problem, you use the fact the input array contains numbers in range 1 to n. So in order to efficiently sort the array, we can try placing the numbers in their correct spots by utilizing what we know; the numbers are from range 1 to n. Only move forward in the array once we know the correct number is in its position. For example; 1 should be in index position 1 - 1 = 0 