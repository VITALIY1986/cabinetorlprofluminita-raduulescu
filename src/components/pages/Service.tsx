import React, { FC } from "react";
import scss from "./Style.module.scss";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import TeethIcon from "@/assets/icons/Teeth.webp";
import MedPlus from "@/assets/icons/med_plus.png";
import CheckMark from "@/assets/icons/check_mark.png";
import BxChild from "@/assets/icons/bx-child.png";
import ReactYoutube from "@/components/react-youtube/ReactYoutube";
import ContactForm from "@/components/contact/ContactForm";

const Service: FC = () => {
	return (
		<>
			<div id="service" className={scss.about__page}>
				<div className={scss.block__1}>
					<div className="container">
						<div className={scss.content}>

						<div className={scss.price }>
							<h2 >Prof. Dr. Rădulescu Luminița</h2>
							<p>Consultația cu investigațiile incluse </p>
							<ul>
								<li>Examen clinic cu otoscopie </li>
								<li>rinoscopie și bucofaringoscopie</li>
								<li>fibroscopie</li>
								<li>audiograma tonală/vocală</li>
								<li>timpanograma</li>
								<li>DPOAE</li>
								<li>reflex Stapedian, etc.</li>
							</ul>
							<p className={scss.price_ron}>350 RON</p>
						</div>


					<div className={scss.left}>
							<ContactForm className={scss.form__block} />
						</div>
					</div>
					</div>
				</div>

				
			</div>
		</>
	);
};
export default Service;
