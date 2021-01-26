function buildGraph(list) {
	let graph = {};

	list.forEach((preReq) => {
		let [ course, pre ] = preReq.map(String);

		if (course in graph) {
			graph[course].push(pre);
		} else {
			graph[course] = [ pre ];
		}
	});
	return graph;
}

function canFinish(numCourses, prerequisites) {
	const preReq = buildGraph(prerequisites);
	const totalCourse = Object.keys(preReq);
	const completed = new Set();

	let eligibleCourseExisits = true;

	while (eligibleCourseExisits) {
		eligibleCourseExisits = false;
		for (let course in preReq) {
			let hasEveryPreBeenMet = preReq[course].every((pre) => completed.has(pre));

			if (!completed.has(course) && hasEveryPreBeenMet) {
				completed.add(course);
				eligibleCourseExisits = true;
			}
		}
	}
	return completed.size === totalCourse;
}
