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
import { Logo } from "@/components/Logo";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function TopBar() {
  const { setTheme } = useTheme();
  return (
    <div className="position: fixed w-full items-center justify-center flex select-none overflow-hidden bg-inherit z-10">
      <div className="items-center justify-between text-center pt-5 pb-5 flex lg:w-4/5">
        <div>
          <Logo />
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


// "use client";

// import React from "react";
// import { ArrowLeft, ArrowRight, Files, LayoutPanelLeft, Minus, PanelBottom, PanelLeft, PanelRight, X } from "lucide-react";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Logo } from "@/components/Logo";
// import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
// import { Text } from "@radix-ui/themes";

// interface TopBarProps {
//   children?: React.ReactNode;
// }

// const TopBar: React.FC<TopBarProps> = ({ children }) => {
//   const { setTheme } = useTheme();
//   return (
//     <div className="flex flex-col w-full">
//       <div className="w-full items-center justify-center flex bg-inherit border-b-2 border-gray-300 border-opacity-20 select-none z-50">
//         <div className="items-center justify-between text-center pt-2 pb-3 pl-3 pr-3 flex lg:w-full">
//           <div className="flex gap-6 items-center">
//             <div className="flex items-center">
//               {/* <Logo /> */}
//               <img
//                 src="https://seeklogo.com/images/V/visual-studio-logo-14F95CF819-seeklogo.com.png"
//                 className="h-8"
//                 alt="Visual Studio Logo"
//               />
//             </div>
//             <Text>File</Text>
//             <Text>Edit</Text>
//             <Text>Selection</Text>
//             <Text>View</Text>
//             <Text>Go</Text>
//             <Text>Run</Text>
//             <Text>Terminal</Text>
//             <Text>Help</Text>
//           </div>
//           <div className="flex gap-3 items-center text-center">
//             <ArrowLeft />
//             <ArrowRight />
//             <div className="relative flex items-center justify-center">
//               <div className="relative">
//                 <div className="relative flex items-center">
//                   <input
//                     type="text"
//                     placeholder="🔎 clev-dev-portfolio"
//                     className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center w-[600px] z-50"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
// <div className="flex gap-8 items-center justify-center text-center">
//   <div className="flex gap-4">
//     <PanelLeft strokeWidth={1.5} />
//     <PanelBottom strokeWidth={1.5} />
//     <PanelRight strokeWidth={1.5} />
//     <LayoutPanelLeft strokeWidth={1.5} />
//   </div>
//   <Minus />
//   <Files />
//   <X />
// </div>
//         </div>
//       </div>
//       <div>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default TopBar;
