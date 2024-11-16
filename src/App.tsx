import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
			<div className="max-w-4xl mx-auto">
				{/* Logo Section with Animation */}
				<div className="flex justify-center items-center gap-8 mb-12 pt-8">
					<a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
						<img src={viteLogo} className="h-16 w-16 md:h-24 md:w-24 animate-float" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
						<img src={reactLogo} className="h-16 w-16 md:h-24 md:w-24 animate-spin-slow" alt="React logo" />
					</a>
				</div>

				{/* Title Section */}
				<h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Vite + React + Bolt</h1>

				{/* Card Section */}
				<div className="bg-slate-700/50 backdrop-blur-lg rounded-xl p-8 shadow-2xl mb-12 border border-slate-600">
					<div className="flex flex-col items-center gap-6">
						<button
							onClick={() => setCount((count) => count + 1)}
							className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-lg font-semibold 
                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
                       active:scale-95"
						>
							Count is {count}
						</button>

						<p className="text-slate-300 text-center">
							Edit <code className="bg-slate-800 px-2 py-1 rounded-md font-mono">src/App.tsx</code> and save to test HMR
						</p>
					</div>
				</div>

				{/* Footer Section */}
				<p className="text-slate-400 text-center text-sm md:text-base animate-pulse">Click on the Vite and React logos to learn more</p>
			</div>
		</div>
	);
}

export default App;
