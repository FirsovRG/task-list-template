import React from "react";
import { cn as createCn } from "@bem-react/classname";

import { gitHubUrl } from "../../constants";
import Link from "../../ui/link";

import gitHubLogo from "./images/github-mark.svg";
import "./footer.scss";

const cn = createCn("footer");

const Footer = () => (
	<div className={ cn() }>
		<div className={ cn("inner-wrapper") }>
			<Link
				className={ cn("github-link") }
				href={ gitHubUrl }
				target='_blank'
			>
				<img
					src={ gitHubLogo }
					alt='GitHub link'
					className={ cn("github-logo") }
				/>
				<span className={ cn("link-label") }>
                    FirsovRG
				</span>
			</Link>
		</div>
	</div>
);

export default Footer;