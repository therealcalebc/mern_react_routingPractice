import { useEffect } from "react";
import { navigate } from "@reach/router";

const ReDir = () => {
	useEffect(() => {
		console.log("ReDir redirected to home");
		navigate("/home");
	}, []);
	return <div></div>;
};

export default ReDir;
