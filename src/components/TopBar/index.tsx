"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function TopBar() {
  const { setTheme } = useTheme();
  return (
    <div className="position: fixed w-full items-center justify-center flex select-none overflow-hidden bg-inherit z-10">
      <div className="items-center justify-between text-center pt-5 pb-5 flex lg:w-4/5">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
            CV
          </h1>
        </div>
        <div className="flex gap-8 items-center justify-center text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-lg">
            About
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-lg">
            Portfolio
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-lg">
            Contact
          </h1>
          <LinkedInLogoIcon />
          <GitHubLogoIcon />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
