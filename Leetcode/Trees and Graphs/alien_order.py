from collections import defaultdict, Counter, deque


class Solution:
    def alien_order(self, words):
        adj_list = defaultdict(set)
        in_degree = Counter({c: 0 for word in words for c in word})

        # Step 1 to populate the adj_list and in_degree counter
        for first_word, second_word in zip(words, words[1:]):
            for char_first, char_second in zip(first_word, second_word):
                if char_first != char_second:
                    if char_second not in adj_list[char_first]:
                        adj_list[char_first].add(char_second)
                        in_degree[char_second] += 1
                    break

            else:
                if len(second_word) < len(first_word):
                    return ""

        # Step 2, add nodes with an indegree of 0 to queue and populate output
        output = []
        queue = deque([char for char in in_degree if in_degree[char] == 0])

        while queue:
            char = queue.popleft()
            output.append(char)

            for letter in adj_list[char]:
                in_degree[letter] -= 1
                if in_degree[letter] == 0:
                    queue.append(letter)

        if len(output) < len(in_degree):
            return ''

        return ''.join(output)

# Time Complexity: O(C + U + min(U^2, N))
# where c is the total length of all strings in the input list, added together
# where U is total number of vertices
# where min(U^2, N), represents the number of edges

# Space Complexity: O(U + min(U^2, N))
