import { Router } from "@reach/router";
import ReDir from "./components/Redir";
import BlackAndWhite from "./components/BlackAndWhite/BlackAndWhite";
import Technicolor from "./components/Technicolor/Technicolor";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Router>
				<ReDir path='/' />
				<BlackAndWhite path='/:input' />
				<Technicolor path='/:input/:bgColor/:textColor' />
			</Router>
		</div>
	);
}

export default App;
