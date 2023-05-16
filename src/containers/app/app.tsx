import React from "react";
import { cn as createCn } from "@bem-react/classname";

import "./app.scss";
import Heading from "../../components/heading/heading";
import Footer from "../../components/footer/footer";

const cn = createCn("app");

const App = () => (
	<div className={ cn() }>
		<Heading />
		<Footer />
	</div>
);


export default App;