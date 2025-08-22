import { useState } from "react";
import "../App.css";

export default function Task({ children }) {
	if (typeof children !== "string")
		throw Error("Task description not a string");

	return (
		<div>
			<input
				type="checkbox"
				id="task"
				className="peer mr-1.5 checked:opacity-40"
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
