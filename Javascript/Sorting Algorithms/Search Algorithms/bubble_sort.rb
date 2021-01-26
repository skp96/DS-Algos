def bubble_sort(array)
  sorted = false

  while(!sorted)
    sorted = true

    (array.length - 1).times do |idx|
      if array[idx] > array[idx + 1]
        array[idx], array[idx + 1] = array[idx + 1], array[idx]
        sorted = false
      end
    end
  end
  array
end