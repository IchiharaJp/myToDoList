import "../App.css";

export default function List({ children }) {
	return (
		<div className="bg-gray-200 w-2xs h-60 rounded-xl p-5 border-l-5 border-gray-500 shadow-xl">
			{children}
		</div>
	);
}
