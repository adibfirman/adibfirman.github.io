import React from "react";

import Layout from "@components/Layout";
import { sumNum } from "@utils";

export default function App() {
	const firstNum = Math.floor(Math.random() * 100) + 1;
	const secNum = Math.floor(Math.random() * 100) + 1;

	return (
		<Layout>
			<h1>Hello World..!!</h1>
			{firstNum} + {secNum} = {sumNum({ a: firstNum, b: secNum })}
		</Layout>
	);
}
