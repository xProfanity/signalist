import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import UserDropDown from "./UserDropDown";

/**
 * Render the site header containing the logo, main navigation, and user menu.
 *
 * @returns The header JSX element with a linked logo ("/"), a responsive navigation area, and a user dropdown.
 */
export default function Header() {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            alt="signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropDown />
      </div>
    </header>
  );
}
