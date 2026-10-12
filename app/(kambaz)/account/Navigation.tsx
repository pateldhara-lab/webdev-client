"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

const LINKS = [
  { href: "/account/signin", label: "Signin" },
  { href: "/account/signup", label: "Signup" },
  { href: "/account/profile", label: "Profile" },
];

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            pathname === link.href
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
