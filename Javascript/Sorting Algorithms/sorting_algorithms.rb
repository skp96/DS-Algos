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

def insertion_sort(array)
  (0...array.length).each do |i|
    curr_ele = array[i]
    j = i - 1
    while j >= 0 && curr_ele < array[j]
      array[j + 1] = array[j]
      j-= 1
    end
    array[j + 1] = curr_ele
  end
  array
end

class Array #monkey patching into the Array class

  def merge_sort(&prc)
    prc ||= Proc.new {|x, y| x<=>y}

    return self if count <= 1

    mid_point = count / 2
    sorted_left = self.take(mid_point).merge_sort(&prc)
    sorted_right = self.drop(mid_point).merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged + left + right
  end
end

def quick_sort(array)
  return array if array.count <= 1

  random_ele_index = array.find_index(array.sample)
  pivot = array.delete_at(random_ele_index)
  left = array.select {|ele| ele <= pivot}
  right = array.select {|ele| ele > pivot}

  left_sorted = quick_sort(left)
  right_sorted = quick_sort(right)

  [*left_sorted, pivot, *right_sorted]

end