"""
- logic:
  - 1st approach:
    - waiting time of a current query is the sum of the previous query + the previous query's waiting time
    - init a waiting time dictionary and have the index of the first query as the key and its value as 0, the first query does not have a waiting time
    - iterate through rest of the queries
      - calculate the current waiting time using the function mentioned above
      - store the waiting time for that query in the waiting time dictionary
      - increment total waiting time by the current waiting time
    - return total waiting time
  - 2nd approach:
    - iterate through the quries
      - the current query represents the duration, and each of the remaining queries; len(queries) - (idx + 1), have to wait that long
      - so multiply the number of remaining queiries by the duration of the current query
      - add that value to the total_waiting_time
    - return total waiting time
"""


def minimum_time_waiting(queries):
    queries.sort()

    total_waiting_time = 0
    waiting_time_dict = {0: 0}

    for idx in range(1, len(queries)):
        previous_query = queries[idx - 1]
        previous_query_waiting_time = waiting_time_dict[idx - 1]

        current_waiting_time = previous_query + previous_query_waiting_time

        waiting_time_dict[idx] = current_waiting_time

        total_waiting_time += current_waiting_time

    return total_waiting_time

# Time Complexity: O(nlogn + n) --> O(nlogn)
# Space Complexity: O(n)


def minimum_time_waiting_2.0(queries):
    queries.sort()
    total_waiting_time = 0

    for idx, duration in enumerate(queries):
        queries_left = len(queries) - (idx + 1)
        waiting_time = queries_left * duration
        total_waiting_time += waiting_time

    return total_waiting_time

# Time Complexity: O(nlogn + n) --> O(nlogn)
# Space Complexity: O(1)
