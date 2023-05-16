import { TodoistApi } from "@doist/todoist-api-typescript";

export const api = new TodoistApi("1b5fa53d606e3f55ae447140f860c5b43be8e80a");

api.getProjects()
	.then((projects) => console.log(projects))
	.catch((error) => console.log(error));