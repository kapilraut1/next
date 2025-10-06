import Image from "next/image";

export default function About() {
  return (
    <section className="flex min-h-screen justify-between p-24">
      <div>
        <Image
          src="/images.png"
          alt="Next.js Logo"
          width={500}
          height={700}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <p>About Page</p>
        <h1 className="text-4xl font-bold">Empowering makers worldwide</h1>
        <p>This is the about page of our awesome application.</p>
      </div>
    </section>
  );
}

// to add new pages in our app
// folder in app called page.tsx
// this is a special file name
// nextjs will automatically treat it as a route
