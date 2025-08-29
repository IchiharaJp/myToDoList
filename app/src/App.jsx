import "./App.css";
import { useState } from "react";
import Task from "./Components/Task.jsx";
import List from "./Components/List.jsx";
import PromptBar from "./Components/PromptBar.jsx";
import Icons from "./Components/Icons.jsx";
import DeleteMenu from "./Components/DeleteMenu.jsx";

function App() {
	const [tasks, setTasks] = useState([]);
	const [showPrompt, setShowPrompt] = useState(false);
	const [showDeleteMenu, setShowDeleteMenu] = useState(false);
	const [showCompletedTasks, setShowCompletedTasks] = useState(false);
	const [showCompletedBtn, setShowCompletedBtn] = useState(false);

	const { plusIcon, trashIcon } = Icons;

	const togglePrompt = () => setShowPrompt((current) => !current);
	const toggleDeleteMenu = () => setShowDeleteMenu((current) => !current);
	const toggleCompletedBtn = () => {
		setShowCompletedBtn((current) => !current);
		setShowCompletedTasks(false);
	};
	const handleChecked = (taskId) => {
		setTasks(
			tasks.map((task, index) => {
				if (index === taskId) task.checked = !task.checked;
				return task;
			})
		);
	};
	const completedTasksCount = () => {
		const count = tasks.filter((task) => task.checked).length;
		if (count) return count;
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen text-xl [&_*]:duration-400">
			<List>
				<h1 className="border-b font-bold mb-0.5">To do</h1>

				{tasks.map((task, index) => {
					if (!task.checked)
						return (
							<Task
								handleChecked={handleChecked}
								taskId={index}
								task={tasks[index]}
								key={index}
							>
								{task.value}
							</Task>
						);
				})}

				<button
					className="absolute right-5 top-5 hover:bg-gray-300 text-gray-800 scale-115 rounded-md cursor-pointer"
					onClick={togglePrompt}
				>
					{plusIcon}
				</button>

				<button
					className={`text-xs absolute right-16 top-5 inset-ring-1 p-1 rounded-md text-gray-700 ${
						completedTasksCount()
							? "hover:bg-gray-100 cursor-pointer"
							: "opacity-40"
					}`}
					onClick={toggleCompletedBtn}
				>
					{showCompletedBtn ? "Hide Completed" : "Show Completed"}
				</button>

				<button
					className="absolute right-3 bottom-3 text-red-400 opacity-80"
					onClick={toggleDeleteMenu}
				>
					{trashIcon}
				</button>
				{showCompletedBtn && (
					<button
						className="flex scale-80 gap-1 text-gray-900"
						onClick={() => setShowCompletedTasks((toggle) => !toggle)}
					>
						<div className={showCompletedTasks ? "rotate-90 mt-0.5" : ""}>
							&gt;
						</div>
						<b>Completed</b>&nbsp;{completedTasksCount()}
					</button>
				)}
				{showCompletedTasks &&
					tasks.map((task, index) => {
						if (task.checked)
							return (
								<Task
									handleChecked={handleChecked}
									taskId={index}
									task={tasks[index]}
									key={index}
								>
									{task.value}
								</Task>
							);
					})}
			</List>
			{showPrompt && (
				<PromptBar
					tasks={tasks}
					setTasks={setTasks}
					togglePrompt={togglePrompt}
				/>
			)}
			{showDeleteMenu && (
				<DeleteMenu
					tasks={tasks}
					setTasks={setTasks}
					toggleDeleteMenu={toggleDeleteMenu}
				/>
			)}
		</div>
	);
}

export default App;
