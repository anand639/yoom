import { SignIn } from "@clerk/nextjs";
import React from "react";

const signInPage = () => {
	return (
		<main className="flex h-screen w-full items-center justify-center">
			<SignIn />
		</main>
	);
};

export default signInPage;
