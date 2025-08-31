import "../App.css";
import { useState } from "react";

export default function DeleteMenu({ tasks, setTasks, toggleDeleteMenu }) {
	const [toDelete, setToDelete] = useState([]);

	function toggleDelete(index) {
		if (typeof index !== "number")
			throw Errow("Index passed in toggleDelete is not a number");
		if (toDelete.includes(index)) {
			setToDelete(toDelete.filter((i) => i !== index));
		} else {
			setToDelete([...toDelete, index]);
		}
	}

	function handleDelete() {
		setTasks(tasks.filter((_, index) => !toDelete.includes(index)));
		setToDelete([]);
		toggleDeleteMenu();
	}

	return (
		<div
			className="absolute h-screen w-screen flex justify-center items-center bg-black/30"
			onClick={(event) => {
				if (event.target === event.currentTarget) toggleDeleteMenu();
			}}
		>
			<div className="absolute flex flex-col items-start bg-gray-200 h-fill pb-12 w-xs p-6 rounded-xl shadow-lg  sm:w-sm ">
				<h1 className="font-bold pb-2">Select the tasks to delete</h1>
				{tasks.map((task, index) => {
					return (
						<button
							className={`cursor-pointer bg-gray-50 shadow-lg border-b-1 my-1 rounded-xl p-1 text-sm font-semibold ${
								toDelete.includes(index)
									? "border-none bg-red-600 text-red-50 shadow-md"
									: ""
							}`}
							onClick={() => {
								toggleDelete(index);
							}}
						>
							{task.value}
						</button>
					);
				})}
				<button
					className={`absolute bottom-4 right-6 bg-red-600 text-red-50 font-semibold p-1 rounded-xl border-red-950  focus:border-none ${
						!toDelete.length ? "opacity-40" : "border-b-2 shadow-xl"
					}`}
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
