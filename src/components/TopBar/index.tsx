"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { ArrowLeft, ArrowRight, Files, LayoutPanelLeft, Minus, PanelBottom, PanelLeft, PanelRight, Sun, Moon, X } from 'lucide-react';
import { Text } from '@radix-ui/themes';
import { useTheme } from "next-themes";

export default function TopBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className='shadow-none border-b-2 border-opacity-20 select-none bg-[#020916] z-50 overflow-hidden'>
        <Toolbar className='flex justify-between'>
          <div className="flex gap-3 items-center">
            <div className="flex items-center">
              <img
                src="https://seeklogo.com/images/V/visual-studio-logo-14F95CF819-seeklogo.com.png"
                className="h-8"
                alt="Visual Studio Logo"
              />
            </div>
            {['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'].map((text) => (
              <Text key={text} className="p-2 rounded-md hover:text-green-300 hover:bg-slate-950 cursor-pointer">{text}</Text>
            ))}
          </div>
          <div className="flex gap-3 items-center text-center">
            <Tooltip title="Go Back (Alt+Left Arrow)" classes={{ tooltip: 'bg-inherit border-2 border-opacity-20' }}>
              <ArrowLeft className="p-2 rounded-md size-10 hover:text-green-300 hover:bg-slate-950 cursor-pointer" />
            </Tooltip>
            <Tooltip title="Go Forward (Alt+Right Arrow)" classes={{ tooltip: 'bg-inherit border-2 border-opacity-20' }}>
              <ArrowRight className="p-2 rounded-md size-10 hover:text-green-300 hover:bg-slate-950 cursor-pointer" />
            </Tooltip>
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="relative flex items-center">
                  <Tooltip title="Search clev-dev-portfolio-index.tsx - clev-dev-portfolio - Visual Studio Code" classes={{ tooltip: 'bg-inherit border-2 border-opacity-20' }}>
                    <input
                      type="text"
                      placeholder="🔎 clev-dev-portfolio"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center w-[600px] z-50"
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1 items-center justify-center text-center">
            <div className="flex">
              <Tooltip title="Panel Left">
                <PanelLeft strokeWidth={1.5} className="p-2 rounded-md size-10 hover:text-green-300 hover:bg-slate-950 cursor-pointer" />
              </Tooltip>
              <Tooltip title="Panel Bottom">
                <PanelBottom strokeWidth={1.5} className="p-2 rounded-md size-10 hover:text-green-300 hover:bg-slate-950 cursor-pointer" />
              </Tooltip>
              <Tooltip title="Panel Right">
                <PanelRight strokeWidth={1.5} className="p-2 rounded-md size-10 hover:text-green-300 hover:bg-slate-950 cursor-pointer" />
              </Tooltip>
              <Tooltip title="Layout Panel Left">
                <LayoutPanelLeft strokeWidth={1.5} className="p-2 rounded-md size-10 hover:text-green-300 hover:bg-slate-950 cursor-pointer" />
              </Tooltip>
            </div>
            <Tooltip title="Minimize">
              <Minus className="p-2 rounded-md size-10 hover:text-green-300 hover:bg-slate-950 cursor-pointer" />
            </Tooltip>
            <Tooltip title="Files">
              <Files className="p-2 rounded-md size-10 hover:text-green-300 hover:bg-slate-950 cursor-pointer" />
            </Tooltip>
            <Tooltip title="Toggle Theme">
              {theme === 'dark' ? (
                <Sun
                  className="p-2 rounded-md size-10 hover:text-yellow-300 hover:bg-slate-950 cursor-pointer"
                  onClick={() => setTheme('light')}
                />
              ) : (
                <Moon
                  className="p-2 rounded-md size-10 hover:text-blue-300 hover:bg-slate-950 cursor-pointer"
                  onClick={() => setTheme('dark')}
                />
              )}
            </Tooltip>
            <Tooltip title="Close">
              <X
                className="p-2 rounded-md size-10 hover:bg-red-600 cursor-pointer"
                onClick={() => {
                  if (window.confirm("Are you sure you want to close this tab?")) {
                    window.open('', '_self', '');
                    window.close();
                  }
                }}
              />
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}