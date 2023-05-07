import Link from "next/link";

export const metadata = {
	title: "This is the test page",
	description: "test page",
};

const Page = () => {
	return <Link href="/">Go to home</Link>;
};

export default Page;
