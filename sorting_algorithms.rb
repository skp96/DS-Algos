def bubble_sort(array) 
  swapped = true

  while(swapped)
    swapped = false

    (0...array.length - 1).each do |idx|
      if array[idx] > array[idx + 1]
        array[idx], array[idx + 1] = array[idx + 1], array[idx]
        swapped = true
      end
    end

  end
  array
end

def selection_sort(array)

  (0...array.length).each do |idx1|
    min_index = idx1
    (idx1+1...array.length).each do |idx2|
      if array[min_index] > array[idx2]
        min_index = idx2
      end
    end
    array[idx1], array[min_index] = array[min_index], array[idx1];
  end
  array
end