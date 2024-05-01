import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-wrap place-content-center">
      <div className="flex flex-col items-center text-center gap-10">
        <h1 className="font-bold text-3xl">
          So, I think this is my portfolio haha 🤙
        </h1>

        <h2 className="font-bold text-7xl">
          Go and check{" "}
          <Link
            href={"https://stories.aragundy.com"}
            className="text-blue-800 hover:underline"
          >
            stories
          </Link>
          🚀
        </h2>

        <h3 className="font-bold text-3xl">
          You are asking why? Because I say so 🫵
        </h3>
      </div>
    </main>
  );
}
