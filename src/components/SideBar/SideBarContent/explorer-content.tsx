import React from 'react'
import { TabPanel } from './tab-panel'
import { Text } from '@radix-ui/themes';
import { Blocks, BugPlay, ChevronDown, ChevronRight, CircleUserRound, CopyMinus, Dot, Ellipsis, ExpandIcon, FilePlus, Files, FileStack, FolderPlus, GitGraph, LaptopMinimal, RotateCcw, Search, Settings, User, UserRound } from 'lucide-react';

import { SidebarHook } from './hooks/sidebar.hook';

export const ExplorerContent = () => {
    const { open } = SidebarHook();
    return (
        <div className='flex'>
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
    )
}
