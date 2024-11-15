import React from 'react';
import Text from '@mui/material/Typography';
import { ArrowLeft, ArrowRight, Files, LayoutPanelLeft, Minus, PanelBottom, PanelLeft, PanelRight, Sun, Moon, X } from 'lucide-react';

const Welcome: React.FC = () => {
    return (
        <div className='pl-16'>
            <Text fontSize={50}>
                Clevane Villareal
            </Text>
            <Text fontSize={20} className='text-gray-400'>
                Web Developer/Computer Engineer
            </Text>
            <div className='mt-12 flex flex-col gap-2'>
                <Text fontSize={25} className='text-gray-400 font-bold'>
                    Start
                </Text>
                <div className='flex items-center gap-2'>
                    <LayoutPanelLeft />
                    <Text fontSize={22} className='text-green-300'>
                        New File
                    </Text>
                </div>
                <div className='flex items-center gap-2'>
                    <LayoutPanelLeft />
                    <Text fontSize={22} className='text-green-300'>
                        Open File
                    </Text>
                </div>
                <div className='flex items-center gap-2'>
                    <LayoutPanelLeft />
                    <Text fontSize={22} className='text-green-300'>
                        Open Folder
                    </Text>
                </div>
                <div className='flex items-center gap-2'>
                    <LayoutPanelLeft />
                    <Text fontSize={22} className='text-green-300'>
                        Clone This Repository
                    </Text>
                </div>
            </div>
            <div className='mt-12 flex flex-col gap-2'>
                <Text fontSize={25} className='text-gray-400 font-bold'>
                    Recent Jobs
                </Text>
                <div className='flex flex-row items-center gap-7'>
                    <Text fontSize={18} className='text-green-300'>
                        philippine-statistics-authority
                    </Text>
                    <Text fontSize={18} className='text-gray-400'>
                        C:\Position \ Intern \ mobile-developer
                    </Text>
                </div>
                <div className='flex flex-row items-center gap-7'>
                    <Text fontSize={18} className='text-green-300'>
                        hsi-technologies
                    </Text>
                    <Text fontSize={18} className='text-gray-400'>
                        C:\Position \ Regular \ front-end-developer
                    </Text>
                </div>
                <div className='flex flex-row items-center gap-7'>
                    <Text fontSize={18} className='text-green-300'>
                        wela-school-systems
                    </Text>
                    <Text fontSize={18} className='text-gray-400'>
                        C:\Position \ Regular \ web-developer
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default Welcome;