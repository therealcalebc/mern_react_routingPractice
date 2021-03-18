import React from "react";
import styles from "./Technicolor.module.css";

const Technicolor = (props) => {
	const { input, bgColor, textColor } = props;
	const inlineStyles = {
		backgroundColor: `${bgColor}`,
		color: `${textColor}`,
	};
	return (
		<div className={styles.Technicolor} style={inlineStyles}>
			{isNaN(+input)
				? input === "home"
					? "Welcome"
					: `The word is: ${input}`
				: `The number is: ${input}`}
		</div>
	);
};

export default Technicolor;
