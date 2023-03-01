/*
207. Course Schedule
Medium
12.8K
501
Companies
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you
  must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 
you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    
};

/**
 * https://leetcode.com/problems/course-schedule/
 * Time O((V)^2 + E) | Space O(V + E)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
  const { graph, path } = buildGraph(numCourses, prerequisites);

  return hasPath(numCourses, graph, path);
}

var initGraph = (numCourses) => ({
  graph: new Array(numCourses).fill().map(() => []),
  path: new Array(numCourses).fill(false)
})

var buildGraph = (numCourses, prerequisites) => {
  const { graph, path } = initGraph(numCourses);

  for (const [ src, dst ] of prerequisites) {
      const neighbors = (graph[dst] || []);

      neighbors.push(src);

      graph[dst] = neighbors;
  }

  return { graph, path };
}

var hasPath = (numCourses, graph, path) => {
  for (let course = 0; course < numCourses; course++) {
      if (isCyclic(course, graph, path)) return false;
  }

  return true;
}

var isCyclic = (currCourse, graph, path) => {
  const hasSeen = path[currCourse]
  if (hasSeen) return true

  const isMissingNext = !(currCourse in graph)
  if (isMissingNext) return false;

  return backTrack(currCourse, graph, path);
}

var backTrack = (currCourse, graph, path) => {
  path[currCourse] = true;
      const _hasCycle = hasCycle(currCourse, graph, path)
  path[currCourse] = false;

  return _hasCycle
}

var hasCycle = (currCourse, graph, path) => {
  for (const neighbor of graph[currCourse]) {
      if (isCyclic(neighbor, graph, path)) return true;
  }

  return false
}

/**
* https://leetcode.com/problems/course-schedule/
* Time O(V + E) | Space O(V + E)
* @param {number} numCourses
* @param {number[][]} prerequisites
* @return {boolean}
*/
var canFinish = function(numCourses, prerequisites) {
  const { graph, visited, path }  = buildGraph(numCourses, prerequisites);

  for (let currCourse = 0; currCourse < numCourses; currCourse++) {
      if (isCyclic(currCourse, graph, visited, path)) return false;
  }

  return true;
}

var initGraph = (numCourses) => ({
  graph: new Array(numCourses).fill().map(() => []),
  visited: new Array(numCourses).fill(false),
  path: new Array(numCourses).fill(false)
})

var buildGraph = (numCourses, prerequisites) => {
  const { graph, visited, path } = initGraph(numCourses);

  for (const [ src, dst ] of prerequisites) {
      const neighbors = (graph[dst] || []);

      neighbors.push(src);

      graph[dst] = neighbors;
  }

  return { graph, visited, path };
}

var isCyclic = (currCourse, graph, visited, path) => {
  const isVisited = visited[currCourse]
  if (isVisited) return false;

  const hasSeen = path[currCourse]
  if (hasSeen) return true;

  const isMissingNext = !(currCourse in graph)
  if (isMissingNext) return false;

  const _isCyclic = backTrack(currCourse, graph, visited, path);

  visited[currCourse] = true;

  return _isCyclic
}

var backTrack = (currCourse, graph, visited, path) => {
  path[currCourse] = true;
      const _hasCycle = hasCycle(currCourse, graph, visited, path)
  path[currCourse] = false;

  return _hasCycle
}

var hasCycle = (currCourse, graph, visited, path) => {
  for (const neighbor of graph[currCourse]) {
      if (isCyclic(neighbor, graph, visited, path)) return true;
  }

  return false
}

/**
* https://leetcode.com/problems/course-schedule/
* Time O(V + E) | Space O(V + E)
* @param {number} numCourses
* @param {number[][]} prerequisites
* @return {boolean}
*/
var canFinish = function(numCourses, prerequisites) {
  const { graph, indegree } = buildGraph(numCourses, prerequisites);
  const topologicalOrder = topologicalSort(graph, indegree);
  const isDirectedAcyclicGraph = topologicalOrder.length === numCourses;

  return isDirectedAcyclicGraph;
};

var initGraph = (numCourses) => ({
  graph: new Array(numCourses).fill().map(() => []),
  indegree: new Array(numCourses).fill(0)
})

var buildGraph = (numCourses, prerequisites) => {
  const { graph, indegree } = initGraph(numCourses);

  for (const [ src, dst ] of prerequisites){
      graph[src].push(dst);
      indegree[dst]++;
  }

  return { graph, indegree };
}

var topologicalSort = (graph, indegree, order = []) => {
  const queue = searchGraph(graph, indegree);

  bfs(graph, indegree, queue, order);

  return order;
}

var searchGraph = (graph, indegree, queue = new Queue([])) => {
  for (const node in graph) {
      const isSource = indegree[node] === 0;
      if (isSource) queue.enqueue(node);
  }

  return queue;
}

var bfs = (graph, indegree, queue, order) => {
  while (!queue.isEmpty()) {
      for (let i = (queue.size() - 1); 0 <= i; i--) {
          checkNeighbors(graph, indegree, queue, order);
      }
  }
}

var checkNeighbors = (graph, indegree, queue, order) => {
  const node = queue.dequeue();

  order.push(node);

  for (const neighbor of graph[node]) {
      indegree[neighbor]--;

      const isSource = indegree[neighbor] === 0;
      if (isSource) queue.enqueue(neighbor);
  }
}



















