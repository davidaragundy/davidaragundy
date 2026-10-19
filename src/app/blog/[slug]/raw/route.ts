import { getPosts, getRawPost } from "@/features/blog/queries/get-posts";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function GET(
  _request: Request,
  { params }: RouteContext<"/blog/[slug]/raw">,
) {
  const { slug } = await params;
  const raw = await getRawPost(slug);

  if (!raw) return new Response("Not found", { status: 404 });

  return new Response(raw, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
