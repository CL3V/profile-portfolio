import React, { useState, useRef, useEffect } from 'react';
import { Text } from '@radix-ui/themes';
import { ChevronRight, Dot, Ellipsis } from 'lucide-react';
import { SidebarHook } from './hooks/sidebar.hook';

export const ExplorerContent = () => {
    const { open } = SidebarHook();
    const [width, setWidth] = useState(() => {
        // Retrieve the cached width from localStorage or set default width
        const cachedWidth = localStorage.getItem('sidebarWidth');
        return cachedWidth ? parseInt(cachedWidth, 10) : 240;
    });
    const sidebarRef = useRef<HTMLDivElement>(null);
    const isResizing = useRef(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        isResizing.current = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isResizing.current && sidebarRef.current) {
            const newWidth = e.clientX - sidebarRef.current.getBoundingClientRect().left;
            setWidth(newWidth);
        }
    };

    const handleMouseUp = () => {
        isResizing.current = false;
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        // Cache the width in localStorage whenever it changes
        localStorage.setItem('sidebarWidth', width.toString());
    }, [width]);

    return (
        <div className='flex overflow-hidden' style={{ width: `${width}px` }} ref={sidebarRef}>
            <div className='flex flex-col w-full '>
                <div className='pl-5 pt-5 pr-3 pb-3 flex flex-row justify-between items-center'>
                    <Text className=''>Explorer</Text>
                    <Ellipsis />
                </div>
                <div className='select-none'>
                    <div className='w-full font-bold text-gray-600'>
                        <div className='flex items-center justify-between w-full font-bold text-gray-600 border-b-2'>
                            <div className='m-2 flex'>
                                <ChevronRight className='text-cyan-50' /> <Text className=''>GameHive</Text>
                            </div>
                            <Dot className='size-10 text-green-600' />
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
            <div
                className='w-3 cursor-col-resize h-screen'
                onMouseDown={handleMouseDown}
                style={{ cursor: 'col-resize' }}
            />
        </div>
    );
};
