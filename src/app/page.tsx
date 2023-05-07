import Link from "next/link";

export const metadata = {
	title: "This is the home page",
	description: "home page",
};

export default function Home() {
	return <Link href="/test">Go to test page</Link>;
}
