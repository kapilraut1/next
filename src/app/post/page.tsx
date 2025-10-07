export default async function PostPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
