def smallest_difference(array_one, array_two) 
  array_one.sort!
  array_two.sort!
  min = Float::INFINITY
  idx1 = 0
  idx2 = 0
  result = []

  while (idx1 < array_one.length && idx2 < array_two.length) 
    num1 = array_one[idx1]
    num2 = array_two[idx2]
    abs_diff = (num1 - num2).abs
    
    
    if (abs_diff == 0) 
      return [num1, num2]
    elsif (abs_diff < min) 
      result = [num1, num2]
      min = abs_diff
    end

    if num1 < num2
      idx1 += 1
    else
      idx2 += 1
    end
  
  end
  result
end