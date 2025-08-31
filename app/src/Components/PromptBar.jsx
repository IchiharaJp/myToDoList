import "../App.css";
import { useState } from "react";

export default function PromptBar({ tasks, setTasks, togglePrompt }) {
	const [inputValue, setInputValue] = useState("");

	const handleAddingTask = () => {
		setTasks([...tasks, { value: inputValue, checked: false }]);
		togglePrompt();
	};

	return (
		<div
			className="w-screen h-screen absolute flex justify-center items-center bg-black/30 z-10"
			onClick={(event) => {
				if (event.target === event.currentTarget) togglePrompt();
			}}
		>
			<div className="relative bg-gray-50 w-xs h-20 rounded-lg shadow-2xl pt-3.5 pl-6 sm:w-sm sm:h-25 sm:pt-5">
				<input
					type="text"
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
					placeholder="Type here :>"
					className="w-60 sm:w-70"
					autoFocus
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							handleAddingTask();
						}
					}}
				></input>
				<button
					className={`absolute right-1 bottom-1 px-3 rounded-xl bg-gray-500 text-gray-50 border-gray-700 sm:right-2 sm:bottom-2 sm:scale-110 ${
						inputValue ? "shadow-lg border-b-2" : "opacity-40"
					}`}
					onClick={handleAddingTask}
				>
					Add
				</button>
			</div>
		</div>
	);
}
