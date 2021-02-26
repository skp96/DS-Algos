def get_nth_fib(n):
    if n == 1:
        return 0
    if n == 2:
        return 1

    return get_nth_fib(n-1) + get_nth_fib(n-2)

# Time Complexity: O(2^n)
# Space Complexity: O(n)
