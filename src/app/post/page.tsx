import Link from "next/link";
export default async function PostPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      {data.map((post: { id: number; title: string }) => (
        <li key={post.id} className="post-item">
          <Link href={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </li>
      ))}
    </div>
  );
}
