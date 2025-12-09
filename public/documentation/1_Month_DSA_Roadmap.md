# 1-Month DSA Roadmap for AI Agent Engineers (Interview-Ready Edition)

## Overview
This roadmap is engineered for two specific goals:
1.  **Cracking Product-Based Interviews:** Focusing on patterns (Sliding Window, Two Pointers, DFS/BFS) rather than memorizing solutions.
2.  **Building AI Systems:** Mastering the specific data structures (Hash Maps, Graphs, Trees) essential for RAG, vector search, and agent orchestration.

**Commitment:** 2-3 hours/day (Morning: Code, Afternoon: Concept, Evening: Practice)

---

## WEEK 1: The "Big Three" (Arrays, Strings, Hash Maps)
**Focus:** Handling data efficiently. Hash Maps are the single most important structure for system design and AI applications.

| Day | Topic | Key Concepts to Master | Morning (Code) | Afternoon (Theory Resource) | Evening (Practice) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mon** | **Arrays & Big O** | RAM access, O(1) vs O(n), Resizing logic | [Implement Dynamic Array](https://www.geeksforgeeks.org/implementation-of-dynamic-array-in-python/) | [Big O in 100 Seconds](https://www.youtube.com/watch?v=g2o22C3CRfU) | [LC 217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) |
| **Tue** | **Two Pointers** | Reducing O(n²) to O(n) | [LC 167. Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | [Two Pointers Pattern](https://www.youtube.com/watch?v=On03HWe2tZM) | [LC 125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) |
| **Wed** | **Sliding Window** | Subarray problems, Fixed vs Variable | [LC 209. Min Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | [Sliding Window Pattern](https://www.youtube.com/watch?v=GCm7m5671Ps) | [LC 3. Longest Substring Without Repeating](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| **Thu** | **Hash Maps** | Collisions, O(1) lookup, Frequency counting | [LC 1. Two Sum](https://leetcode.com/problems/two-sum/) | [Hash Maps Explained](https://www.youtube.com/watch?v=R2C4d-a5_58) | [LC 49. Group Anagrams](https://leetcode.com/problems/group-anagrams/) |
| **Fri** | **Prefix Sums** | Range queries in O(1) | [LC 303. Range Sum Query](https://leetcode.com/problems/range-sum-query-immutable/) | [Prefix Sum Technique](https://usaco.guide/silver/prefix-sums?lang=py) | [LC 560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) |
| **Sat** | **Review & Hard** | Combining patterns | [LC 76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | Review Week 1 Notes | Re-solve "Group Anagrams" without help |
| **Sun** | **AI Project** | **Inverted Index** | Build a search index: `word -> [doc_ids]` | Read: "How Search Engines Work" | Test search on 5 text files |

---

## WEEK 2: Linear Data Structures & Recursion
**Focus:** Managing state and flow. Recursion is the foundation for Trees and Graphs.

| Day | Topic | Key Concepts to Master | Morning (Code) | Afternoon (Theory Resource) | Evening (Practice) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mon** | **Linked Lists** | Pointers, Reversal, Fast/Slow Pointer | [LC 206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | [Linked Lists Intro](https://www.youtube.com/watch?v=Hj_rA0dhr2I) | [LC 141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) |
| **Tue** | **Stacks** | LIFO, Parsing, Monotonic Stack | [LC 20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | [Stacks & Queues](https://www.youtube.com/watch?v=wjI1WNcIntg) | [LC 739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) |
| **Wed** | **Queues** | FIFO, BFS Foundation | [LC 225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) | [Queue Implementation](https://www.geeksforgeeks.org/queue-in-python/) | [LC 933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/) |
| **Thu** | **Recursion** | Base case, Recursive step, Call stack | [LC 509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | [Recursion in 5 mins](https://www.youtube.com/watch?v=Mv9NEXX1VHc) | [LC 344. Reverse String (Recursive)](https://leetcode.com/problems/reverse-string/) |
| **Fri** | **Binary Search** | Divide & Conquer, Search Space | [LC 704. Binary Search](https://leetcode.com/problems/binary-search/) | [Binary Search Logic](https://www.youtube.com/watch?v=P3YID7liBug) | [LC 33. Search in Rotated Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) |
| **Sat** | **Backtracking** | Exhaustive search, Pruning | [LC 46. Permutations](https://leetcode.com/problems/permutations/) | [Backtracking Blueprint](https://www.youtube.com/watch?v=Zq4upTEaQyM) | [LC 78. Subsets](https://leetcode.com/problems/subsets/) |
| **Sun** | **AI Project** | **Token Queue** | Build a class to process "streaming" tokens | Read: "How LLM Streaming Works" | Implement FIFO buffer for text generation |

---

## WEEK 3: Trees & Heaps (Hierarchical Data)
**Focus:** Organizing data for quick retrieval. Essential for databases, decision trees, and priority tasks.

| Day | Topic | Key Concepts to Master | Morning (Code) | Afternoon (Theory Resource) | Evening (Practice) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mon** | **Binary Trees** | Node structure, Height, Depth | [LC 104. Max Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | [Trees Introduction](https://www.youtube.com/watch?v=qH6yxkw0u78) | [LC 226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) |
| **Tue** | **DFS Traversal** | Pre/In/Post Order, Recursion | [LC 94. Binary Tree Inorder](https://leetcode.com/problems/binary-tree-inorder-traversal/) | [Tree Traversals](https://www.youtube.com/watch?v=WLvU5EQVZqY) | [LC 112. Path Sum](https://leetcode.com/problems/path-sum/) |
| **Wed** | **BFS Traversal** | Level Order, Queues | [LC 102. Binary Tree Level Order](https://leetcode.com/problems/binary-tree-level-order-traversal/) | [BFS on Trees](https://www.youtube.com/watch?v=6ZnyEApgFYg) | [LC 199. Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) |
| **Thu** | **BST** | Search property, O(log n) lookup | [LC 98. Validate BST](https://leetcode.com/problems/validate-binary-search-tree/) | [BST Properties](https://www.youtube.com/watch?v=pYT9F8_LFTM) | [LC 235. LCA of BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) |
| **Fri** | **Heaps/PQ** | Min/Max Heap, Priority | [LC 215. Kth Largest Element](https://leetcode.com/problems/kth-largest-element-in-an-array/) | [Heaps Explained](https://www.youtube.com/watch?v=t0Cq6tVNRBA) | [LC 1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) |
| **Sat** | **Tries** | Prefix tree, Autocomplete | [LC 208. Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/) | [Tries (Prefix Trees)](https://www.youtube.com/watch?v=zHgKJJOwe1g) | [LC 211. Design Add & Search](https://leetcode.com/problems/design-add-and-search-words-data-structure/) |
| **Sun** | **AI Project** | **AutoComplete** | Build a Trie for dictionary words | Read: "Tries in NLP" | Implement `search(prefix)` method |

---

## WEEK 4: Graphs & Dynamic Programming (Complex Relationships)
**Focus:** Modeling connections and optimizing performance. Graphs are the language of Agents (LangGraph).

| Day | Topic | Key Concepts to Master | Morning (Code) | Afternoon (Theory Resource) | Evening (Practice) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mon** | **Graph Basics** | Adj List vs Matrix, Directed/Undirected | [LC 200. Number of Islands](https://leetcode.com/problems/number-of-islands/) | [Graph Intro & BFS/DFS](https://www.youtube.com/watch?v=DBRW8nwZV-g) | [LC 733. Flood Fill](https://leetcode.com/problems/flood-fill/) |
| **Tue** | **Graph DFS/BFS** | Connectivity, Cycle Detection | [LC 547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | [Graph Traversals](https://www.youtube.com/watch?v=TIbUe5OfIcw) | [LC 133. Clone Graph](https://leetcode.com/problems/clone-graph/) |
| **Wed** | **Topological Sort** | Dependency resolution (DAGs) | [LC 207. Course Schedule](https://leetcode.com/problems/course-schedule/) | [Kahn's Algorithm](https://www.youtube.com/watch?v=cIBFEhD77b4) | [LC 210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) |
| **Thu** | **Shortest Path** | Dijkstra's Algorithm | [LC 743. Network Delay Time](https://leetcode.com/problems/network-delay-time/) | [Dijkstra's Visualized](https://www.youtube.com/watch?v=XB4MIexjvY0) | [LC 787. Cheapest Flights](https://leetcode.com/problems/cheapest-flights-within-k-stops/) |
| **Fri** | **Intro to DP** | Memoization, Top-Down | [LC 70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | [DP for Beginners](https://www.youtube.com/watch?v=oBt53YbR9Kk) | [LC 198. House Robber](https://leetcode.com/problems/house-robber/) |
| **Sat** | **2D DP** | Grid paths, LCS | [LC 62. Unique Paths](https://leetcode.com/problems/unique-paths/) | [2D DP Explained](https://www.youtube.com/watch?v=mBNrRy2_hVs) | [LC 1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) |
| **Sun** | **AI Project** | **Agent Router** | Model cities/flights as a Graph | Use Dijkstra's for cost | Find cheapest path between cities |

---

## Company-Specific DSA Focus Areas (2024-2025 Trend)

This list is based on recent interview experiences and problem frequency for major tech companies.

| Company | Primary DSA Focus | Key Patterns to Master | Specific "Must-Do" LeetCode Problems |
| :--- | :--- | :--- | :--- |
| **Google** | **Graphs & DP** | Union-Find, Dijkstra, 2D Dynamic Programming, Topological Sort | • [Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/)<br>• [Longest Increasing Path in Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)<br>• [Evaluate Division](https://leetcode.com/problems/evaluate-division/) |
| **Microsoft** | **Arrays, Strings & Trees** | Sliding Window, Two Pointers, Tree Traversals, Matrix manipulation | • [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)<br>• [Lowest Common Ancestor](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)<br>• [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) |
| **Amazon** | **Graphs (BFS/DFS) & Arrays** | BFS for shortest path, Sliding Window, Priority Queues (Heaps) | • [Number of Islands](https://leetcode.com/problems/number-of-islands/)<br>• [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)<br>• [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) |
| **Meta (Facebook)** | **Arrays, Strings & Graphs** | Subarray Sums, Valid Parentheses variations, Graph cloning, Interval merging | • [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)<br>• [Merge Intervals](https://leetcode.com/problems/merge-intervals/)<br>• [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) |
| **Netflix** | **System Design & Hash Maps** | Caching logic (LRU Cache), String manipulation, Grouping data | • [LRU Cache](https://leetcode.com/problems/lru-cache/)<br>• [Group Anagrams](https://leetcode.com/problems/group-anagrams/)<br>• [Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/) |
| **Uber/Lyft** | **Graphs & Heaps** | Shortest Path (Dijkstra), Interval scheduling, Geometry basics | • [Bus Routes](https://leetcode.com/problems/bus-routes/)<br>• [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)<br>• [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) |

---

## Quick Daily Routine (Checklist)

1.  **Morning (Code):** Spend 30-45 mins implementing the "Morning" problem. Don't look at solution for first 20 mins.
2.  **Afternoon (Learn):** Watch the linked video concept (15-20 mins) during lunch or break.
3.  **Evening (Apply):** Solve the "Evening" practice problem (45 mins). If stuck > 30 mins, look at logic (not code), then retry.
