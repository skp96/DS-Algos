# Write a function, stepper(nums), that takes in an array of non negative numbers.
# Each element of the array represents the maximum number of steps you can take from that position in the array.
# The function should return a boolean indicating if it is possible to travel from the
# first position of the array to the last position.

# For Example:

# Given [3, 1, 0, 5, 10]
#      - We begin at first position, 3.
#      - Since the element is 3 we can take up to 3 steps from this position.
#      - This means we can step to the 1, 0, or 5
#      - Say we step to 1
#      - Since the element is 1, now the only option is to take 1 step to land on 0
#      - etc...

# Try to solve this in two ways, using tabulation and memoization.

# Examples:

# stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
# stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
# stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

# tabulation
def stepper(nums)
  table = Array.new(nums.length).fill(false)
  table[0]= true;

  table.each_with_index do |entry, idx|
    if entry == true
      maxRange = nums[idx]
      (1..maxRange).each do |step|
        if step < table.length
          table[step] = true
        end
      end
    end
  end
  table.last
end

# memoization
def stepper(nums, memo={})
  return true if nums.length == 1
  nums.length if memo.key?(nums.length)

  maxRange = nums[0]
  (1..maxRange).each do |step|
    if step < nums.length && stepper(nums[step..-1])
      memo[nums.length] = true
      return memo[nums.length]
    end
  end
  memo[nums.length] = false
  memo[nums.length]
end

# Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
# The function should return the maximum sum of elements in the array we can get if we cannot take
# adjacent elements into the sum.

# Try to solve this in two ways, using tabulation and memoization.

# Examples:

# maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
# maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6

# tabulation
def maxNonAdjacentSum(nums)
  table = Array.new(nums.length).fill(0)
  table[0] = nums.first

  table.each_with_index do |entry, idx|
    next if idx == 0
    skip_left = table[idx - 2] == nil ? 0 : table[idx - 2]
    sum = skip_left + nums[idx]
    prev_sum = table[idx - 1]
    table[idx] = [sum, prev_sum].max

  end
  table.last
end