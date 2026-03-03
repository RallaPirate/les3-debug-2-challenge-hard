import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 px-5 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">🧩 Hard Challenge</h3>
          <p className="text-gray-400 leading-7 text-sm">
            Een gevorderd debug project van NOVI Hogeschool.
            Leer omgaan met echte development fouten.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Pagina&apos;s</h3>
          <div className="flex flex-col gap-2.5">
            <Link href="/" className="text-gray-400 no-underline text-sm">Home</Link>
            <Link href="/blog" className="text-gray-400 no-underline text-sm">Blog</Link>
            <Link href="/dashboard" className="text-gray-400 no-underline text-sm">Dashboard</Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm leading-7">
            NOVI Hogeschool<br />
            AI Development Cursus<br />
            Utrecht, Nederland
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-xs">
        © 2025 Debug Challenge Hard — Les 3 Huiswerk
      </div>
    </footer>
  );
}
