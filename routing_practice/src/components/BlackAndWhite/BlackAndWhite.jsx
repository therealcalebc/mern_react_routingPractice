import React from "react";
import styles from "./BlackAndWhite.module.css";

const BlackAndWhite = ({ input }) => {
	return (
		<div className={styles.BlackAndWhite}>
			{isNaN(+input)
				? input === "home"
					? "Welcome"
					: `The word is: ${input}`
				: `The number is: ${input}`}
		</div>
	);
};

export default BlackAndWhite;
