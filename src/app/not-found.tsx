import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <p className="text-lg">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
