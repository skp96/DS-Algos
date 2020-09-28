def longestPeak(array):
	longestPeak = 0

	for i in range(1, len(array) - 1):
		currNum = array[i]
		nextNum = array[i + 1]
		prevNum = array[i - 1]

		isPeak = True if (currNum > nextNum) and (currNum > prevNum) else False

		left = i - 1
		right = i + 1

		if isPeak:
			while left > 0:
				if array[left] > array[left - 1]:
					left -= 1
				else:
					break

			while right < len(array) - 1:
				if array[right] > array[right + 1]:
					right += 1
				else:
					break

			lengthOfPeak = right - left + 1

			if lengthOfPeak > longestPeak:
				longestPeak = lengthOfPeak

	return longestPeak

  # Time Complexity: O(n)
  # Space Complexity: O(1)
