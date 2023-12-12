import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="h-24 bg-white/80 backdrop-blur-lg flex items-center sticky top-0 z-[100]">
      <nav className="container flex justify-between items-center gap-5">
        <Link className="lowercase text-2xl font-semibold" href="/">
          Blissful
        </Link>

        <ul className="flex items-center gap-5">
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <Link className="hover:text-rose transition" href={navLink.href}>
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-5 items-center">
          <Link
            className="text-green hover:text-rose transition"
            href="/sign-in"
          >
            Sign in
          </Link>
          <span className="h-4 w-px bg-gray"></span>
          <button className="relative">
            <span>
              <ShoppingBag size={20} />
            </span>
            <span className="absolute -right-1 -bottom-2 font-semibold w-4 h-4 text-white text-xs flex items-center justify-center rounded-full bg-green">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
