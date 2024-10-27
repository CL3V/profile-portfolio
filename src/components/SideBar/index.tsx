"use client";
import { Blocks, BugPlay, ChevronDown, ChevronRight, CircleUserRound, CopyMinus, Dot, Ellipsis, ExpandIcon, FilePlus, Files, FileStack, FolderPlus, GitGraph, LaptopMinimal, RotateCcw, Search, Settings, User, UserRound } from 'lucide-react';
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Text } from '@radix-ui/themes';
import Tooltip from '@mui/material/Tooltip';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useTheme } from "next-themes";
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';


interface SideBarProps {
    children?: React.ReactNode;
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className='w-2/12 h-screen border-r-2 border-gray-300 border-opacity-20'
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Text>{children}</Text>
                </Box>
            )}
        </div>
    );
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState<boolean>(false);
    const [hideExplorer, setHideExplorer] = React.useState<boolean>(true);
    const { setTheme } = useTheme();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleShowContent = () => {
        setHideExplorer(!hideExplorer);
        setOpen(!open);
    };


    return (
        <div className="flex selection:select-none bg-inherit">
            <div className='flex flex-col justify-between h-screen border-r-2 border-gray-300 border-opacity-20'>
                <Tabs
                    className='mt-16'
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
                    <Tab
                        onClick={() => handleShowContent()}
                        label={<Tooltip placement='right' title="Projects"><Files size={30} strokeWidth={1} color={value === 0 ? 'white' : 'gray'} /></Tooltip>}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label={<Tooltip placement='right' title="Search"><Search size={30} strokeWidth={1} color={value === 1 ? 'white' : 'gray'} /></Tooltip>}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label={<Tooltip placement='right' title="Git Graph"><GitGraph size={30} strokeWidth={1} color={value === 2 ? 'white' : 'gray'} /></Tooltip>}
                        {...a11yProps(2)}
                    />
                    <Tab
                        label={<Tooltip placement='right' title="Bug Play"><BugPlay size={30} strokeWidth={1} color={value === 3 ? 'white' : 'gray'} /></Tooltip>}
                        {...a11yProps(3)}
                    />
                    <Tab
                        label={<Tooltip placement='right' title="Blocks"><Blocks size={30} strokeWidth={1} color={value === 4 ? 'white' : 'gray'} /></Tooltip>}
                        {...a11yProps(4)}
                    />
                </Tabs>
                <div className='flex flex-col justify-end'>
                    <Tab
                        className='flex self-end'
                        label={<Tooltip placement='right' title="Profile"><CircleUserRound size={30} strokeWidth={1} color={value === 5 ? 'white' : 'gray'} /></Tooltip>}
                        {...a11yProps(5)}
                    />
                    <Tab
                        label={<Tooltip placement='right' title="Laptop Minimal"><Settings size={30} strokeWidth={1} color={value === 5 ? 'white' : 'gray'} /></Tooltip>}
                        {...a11yProps(5)}
                    />
                </div>
            </div>
            {hideExplorer && (
                <TabPanel value={value} index={0}>
                    <div className='flex mt-16'>
                        <div className='flex flex-col w-full'>
                            <div className='pl-5 pt-5 pr-3 pb-3 flex flex-row justify-between items-center'>
                                <Text className=''>Explorer</Text>
                                <Ellipsis />
                            </div>
                            <div className='select-none'>
                                <div className='w-full font-bold text-gray-600 border-b-2 p-2'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex'>
                                            {open ? <ChevronDown className='text-cyan-50' /> : <ChevronRight className='text-cyan-50' />} <Text className=''>GameHive</Text>
                                        </div>
                                        {open && (
                                            <div className='flex gap-2 items-center text-cyan-50'>
                                                <FilePlus className='size-5' />
                                                <FolderPlus className='size-5' />
                                                <RotateCcw className='size-5' />
                                                <CopyMinus className='size-5' />
                                            </div>

                                        )}
                                    </div>
                                    {open && (
                                        <div className='flex flex-col ml-6 border-l-2 gap-1'>
                                            <div className='flex'>
                                                <ChevronRight className='text-cyan-50' /> <Text className=''>📁 App</Text>
                                            </div>
                                            <div className='flex'>
                                                <ChevronRight className='text-cyan-50' /> <Text className=''>📁 App</Text>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className='flex items-center justify-between w-full font-bold text-gray-600 border-b-2'>
                                    <div className='m-2 flex'>
                                        <ChevronRight className='text-cyan-50' /> <Text className=''>LogmeIN</Text>
                                    </div>
                                    <Dot className='size-10 text-green-600' />
                                </div>
                                <div className='flex items-center justify-between w-full font-bold text-gray-600 border-b-2'>
                                    <div className='m-2 flex'>
                                        <ChevronRight className='text-cyan-50' /> <Text className=''>Anti Cheating Detection</Text>
                                    </div>
                                    <Dot className='size-10 text-green-600' />
                                </div>
                                <div className='flex items-center justify-between w-full font-bold text-gray-600 border-b-2'>
                                    <div className='m-2 flex'>
                                        <ChevronRight className='text-cyan-50' /> <Text className=''>PSA-X Inventory System</Text>
                                    </div>
                                    <Dot className='size-10 text-green-600' />
                                </div>
                                <div className='flex items-center justify-between w-full font-bold text-gray-600 border-b-2'>
                                    <div className='m-2 flex'>
                                        <ChevronRight className='text-cyan-50' /> <Text className=''>Cencus Matching App</Text>
                                    </div>
                                    <Dot className='size-10 text-green-600' />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel >
            )}
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
        </div >
    );
};

export default SideBar;
