import Task from "./Components/Task.jsx";
import List from "./Components/List.jsx";
import PromptComponent from "./Components/PromptComponent.jsx";
import "./App.css";
import { useState } from "react";

function AddBtn() {}

function App() {
	const headerStyle = "border-b font-bold mb-0.5";

	return (
		<div className="flex flex-col items-center justify-center h-screen text-lg">
			<List>
				<h1 className={headerStyle}>To do</h1>
				<Task>This is a task</Task>
				<Task>Hello!</Task>
				<Task>Clean the room</Task>
			</List>
			<PromptComponent />
		</div>
	);
}

export default App;
