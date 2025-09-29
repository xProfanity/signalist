"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

export default function UserDropDown() {
  const router = useRouter();
  const handleSignOut = () => {
    router.push("/sign-in");
  };

  const user = {
    name: "John",
    email: "John.wick@gmail.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
        >
          <Avatar className="h-8 w-8">
            {/* <AvatarImage src={"https://github.com/shadcn.png"} /> */}
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-8 w-8">
              {/* <AvatarImage src={"https://github.com/shadcn.png"} /> */}
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
          <DropdownMenuSeparator className="bg-gray-600" />
          <DropdownMenuItem
            onClick={handleSignOut}
            className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition cursor-pointer"
          >
            <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
            Logout
          </DropdownMenuItem>
          <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
          <nav className="sm:hidden">
            <NavItems />
          </nav>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
