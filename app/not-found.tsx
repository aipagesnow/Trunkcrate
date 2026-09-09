import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start px-4 py-20 sm:px-6">
      <h1 className="font-display text-3xl text-foreground">Page not found</h1>
      <p className="mt-3 text-base text-muted">
        That link does not match a kit or organizer in this shop.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
      >
        Back home
      </Link>
    </div>
  );
}
