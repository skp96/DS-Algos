# Implementation of a Singly Linked List

class Node
  attr_accessor :value, :next_node
  def initialize(value)
    @value = value
    @next_node = nil
    
  end
end

class LinkedList
  attr_reader :head, :tail, :length
  def initialize()
    @head = nil
    @tail = nil
    @length = 0
  end

  def add_to_tail(val)
    new_node = Node.new(val)
    
    if @head == nil
      @head = new_node
    else
      @tail.next_node = new_node
    end
    @tail = new_node
    @length += 1
    self 
  end

  def remove_tail
    return nil if @head == nil
    current = @head
    new_tail = current
    while (current.next_node)
      new_tail = current
      current = current.next_node
    end
    @tail = new_tail
    @tail.next_node = nil
    @length -= 1

    if @length == 0
      @head = nil
      @tail = nil
    end
    current 
  end

  def add_to_head(val)
    new_node = Node.new(val)
    if @head == nil
      @head = new_node
      @tail = new_node
    else
      new_node.next_node = @head
      @head = new_node
    end
    @length += 1
    self
  end

  def remove_head
    return nil if @head == nil
    current_head = @head
    @head = current_head.next_node
    @length -= 1
    if @length == 0
      @tail = nil
    end
    current_head
  end

  def contains(target)
    return nil if @head == nil
    current_node = @head
    while (current_node)
      return true if current_node.value == target
      current_node = current_node.next_node
    end
    false
  end

  def get(index)
    return nil if index < 0 || index >= @length
    counter = 0
    current = @head
    while (counter != index)
      current = current.next_node
      counter += 1
    end
    current
  end

  def set(index, val)
    found_node = self.get(index)

    if found_node
      found_node.value = val
      return true
    end
    false
  end

  def insert(index, val)
    return false if index < 0 || index >= @length 
    return !!self.add_to_tail(val) if index == @length - 1
    return !!self.add_to_head(val) if index === 0

    new_node = Node.new(val)
    prev_node = self.get(index - 1)
    temp = prev_node.next_node
    prev_node.next_node = new_node
    new_node.next_node = temp
    @length += 1
    true
  end

  def remove(index)
    return nil if index < 0 || index >= @length
    return self.remove_head if index == 0 
    return self.remove_tail if index == @length - 1

    prev_node = self.get(index - 1)
    removed = prev_node.next_node
    prev_node.next_node = removed.next_node
    @length -= 1
    removed
  end

  def size
    @length
  end
end

