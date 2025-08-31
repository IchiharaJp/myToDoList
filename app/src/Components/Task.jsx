import "../App.css";

export default function Task({ children, taskId, task, handleChecked }) {
	if (typeof children !== "string")
		throw Error("Task description not a string");

	return (
		<div
			className="py-1 border-b-1 border-gray-400/30 mb-1 hover:bg-gray-200/50 hover:border-none rounded-md cursor-pointer *:cursor-pointer"
			onClick={() => handleChecked(taskId)}
		>
			<input
				type="checkbox"
				id="task"
				className="peer mr-1.5 checked:opacity-40"
				checked={task.checked}
			/>
			<label
				htmlFor="task"
				className="peer-checked:line-through peer-checked:opacity-40"
			>
				{children}
			</label>
		</div>
	);
}
