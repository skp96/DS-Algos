def binary_search(array, target)
  return nil if array.count == 0 

  mid = array.count / 2

  case array[mid] <=> target
  when 0
    return mid
  when 1
    return binary_search(array.take(mid), target)
  when -1
    search_result = binary_search(array.drop(mid+1), target)
    search_result.nil? ? nil : mid + 1 + search_result
  end
end