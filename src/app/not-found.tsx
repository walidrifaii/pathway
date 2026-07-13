import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h2 className="text-lg font-semibold">Page not found</h2>
      <p className="text-sm text-zinc-500">Could not find the requested resource.</p>
      <Link href="/" className="text-sm underline">
        Return home
      </Link>
    </div>
  );
}
