import "../App.css";

export default function List({ children }) {
	return (
		<div className="bg-gray-50 w-full h-full p-5 border-t-8 border-blue-400 shadow-xl relative">
			{children}
		</div>
	);
}
