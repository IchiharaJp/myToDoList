import { useState } from "react";
import "../App.css";

export default function PromptComponent() {
	const [inputValue, setInputValue] = useState("");

	return (
		<div className="w-screen h-screen absolute flex justify-center items-center bg-black/30">
			<div className="relative bg-gray-50 w-xs h-20 rounded-lg shadow-2xl pt-3.5 pl-6">
				<input
					type="text"
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
					placeholder="Type here :>"
					className="w-60"
				></input>
				<button className="inset-ring-1 absolute right-1 bottom-1 px-3 rounded-xl">
					Add
				</button>
			</div>
		</div>
	);
}
