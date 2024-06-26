import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import Service from "@/components/pages/Service";
import ContactPage from "@/components/pages/ContactPage";
import BasicsOrtodont from "@/components/pages/BasicsOrtodont";

const Index: FC = () => {
	return (
		<>
			<Layout>
				<HomePage />
			
		<Service/>
			{/*	<BasicsOrtodont />*/}
			<AboutPage />
				<ContactPage />
			</Layout>
		</>
	);
};
export default Index;
