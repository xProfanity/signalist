"use client";

import { NAV_ITEMS } from "@/lib/constanst";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

/**
 * Render a responsive list of navigation links and highlight the currently active route.
 *
 * The component maps `NAV_ITEMS` to Link elements and determines active state using the current
 * pathname: the root path (`"/"`) is treated as an exact match; other paths are active when the
 * pathname starts with the item's href. The active link receives the `text-gray-100` class.
 *
 * @returns The navigation list as a JSX element
 */
export default function NavItems() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";

    return pathname.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(href) ? "text-gray-100" : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
