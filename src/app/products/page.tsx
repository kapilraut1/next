import Prod from "../../models.json";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products Page</h1>;
      <ul>
        {Prod.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
