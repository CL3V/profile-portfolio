"use client";

import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import { Blocks, BugPlay, Files, GitGraph, Search, CircleUserRound, Settings } from 'lucide-react';

import { TabPanel } from './SideBarContent/tab-panel';
import { SidebarHook } from './SideBarContent/hooks/sidebar.hook';
import { ExplorerContent } from './SideBarContent/explorer-content';

const SideBar: React.FC<SideBarProps> = React.memo(({ children }) => {
    const { hideExplorer, a11yProps, value, handleChange } = SidebarHook();

    return (
        <div className="flex selection:select-none bg-inherit">
            <div className='flex flex-col justify-between border-r-2 border-gray-300 border-opacity-20'>
                <Tabs
                    // className='mt-16'
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    TabIndicatorProps={{
                        sx: {
                            left: 0,
                            width: 3,
                            display: hideExplorer ? 'flex' : 'none',
                        },
                    }}
                >
                    {[
                        { icon: Files, title: "Projects", index: 0 },
                        { icon: Search, title: "Search", index: 1 },
                        { icon: GitGraph, title: "Git Graph", index: 2 },
                        { icon: BugPlay, title: "Bug Play", index: 3 },
                        { icon: Blocks, title: "Blocks", index: 4 },
                    ].map(({ icon: Icon, title, index }) => (
                        <Tab
                            key={index}
                            label={<Tooltip placement='right' title={title}><Icon size={30} strokeWidth={1} color={value === index ? 'white' : 'gray'} /></Tooltip>}
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>
                <div className='flex flex-col justify-end'>
                    {[
                        { icon: CircleUserRound, title: "Profile", index: 5 },
                        { icon: Settings, title: "Laptop Minimal", index: 6 },
                    ].map(({ icon: Icon, title, index }) => (
                        <Tab
                            key={index}
                            className='flex self-end'
                            label={<Tooltip placement='right' title={title}><Icon size={30} strokeWidth={1} color={value === index ? 'white' : 'gray'} /></Tooltip>}
                            {...a11yProps(index)}
                        />
                    ))}
                </div>
            </div>
            {[
                { content: <ExplorerContent />, index: 0 },
                { content: <ExplorerContent />, index: 1 },
                { content: "Item Three", index: 2 },
                { content: "Item Four", index: 3 },
                { content: "Item Five", index: 4 },
                { content: "Item Six", index: 5 },
            ].map(({ content, index }) => (
                <div className='flex'>
                    <TabPanel key={index} value={value} index={index}>
                        {content}
                    </TabPanel>
                </div>
            ))}
            <div className='flex'>
                {children}
            </div>
        </div>
    );
});

export default SideBar;
