# Window Sliding Pattern:

* This type of pattern is typically used to solve problems dealing with arrays, strings, or linked lists, where you have to find or calculate something amongst all the contiguous subarrays, substrings, or sublists of a given size. 
* Usually, when implementing the brute force approach to solve such problems, an inefficiency exists where there is a level of overlapping in the iterations through the data structure. 
* The pattern requires you to set up a window and with each iteration, depending on the problem constrains, you slide the window from the left side.

## Example Problem: Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
### Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5, Output: [2.2, 2.8, 2.4, 3.6, 2.8]

* The brute force approach would require you to use nested for loops and for every element of the input array, calculate the sum of its next ‘K’ elements. The time complexity of the algorithm will be O(N*K), where ‘N’ is the number of elements in the input array. 
* The efficient way to solve this problem would be to visualize each contiguous subarray as a sliding window of ‘5’ elements. This means that we will slide the window by one element when we move on to the next subarray. To reuse the sum from the previous subarray, we will subtract the element going out of the window and add the element now being included in the sliding window. This will save us from going through the whole subarray to find the sum and, as a result, the algorithm complexity will reduce to O(N).
