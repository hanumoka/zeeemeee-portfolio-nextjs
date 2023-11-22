import Link from "next/link";
export default function PageNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="global">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </main>
  );
}
