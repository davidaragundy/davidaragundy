import { kv } from "@vercel/kv";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const views = await kv.incr("views");

  return (
    <main className="flex relative w-full min-h-screen flex-wrap place-content-center">
      <span className="absolute top-4 right-4 bg-white/10 py-1 font-bold px-2 rounded-lg">
        {Intl.NumberFormat("en-us").format(views)} views
      </span>

      <div className="flex flex-col items-center text-center gap-10">
        <h1 className="font-medium text-3xl">
          welcome to the best portfolio in town 😎
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

        <h3 className="font-medium text-3xl">
          you are asking why? because I say so 🫵
        </h3>
      </div>
    </main>
  );
}
