import React from "react";
import { cn as createCn } from "@bem-react/classname";
import cx from "classnames";

import "./link.scss";

type Props = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const cn = createCn("link");

const Link = ({ children, className, ...props }: Props) => (
	<a
		{ ...props }
		className={ cx(cn(), className) }
	>
		{children}
	</a>
);

export default Link;