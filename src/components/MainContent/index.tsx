"use client"

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';

import Welcome from './Welcome/welcome';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function MainContent(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} textColor='inherit' indicatorColor="primary">
                    <Tab style={{ textTransform: 'none' }} label="Welcome" {...a11yProps(0)} />
                    <Tab style={{ textTransform: 'none' }} label="clevane-villareal.profile.ts" {...a11yProps(1)} />
                    <Tab style={{ textTransform: 'none' }} label="clevane-villareal.profile.ts" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <MainContent value={value} index={0}>
                <Welcome />
            </MainContent>
            <MainContent value={value} index={1}>
                Item Two
            </MainContent>
            <MainContent value={value} index={2}>
                Item Three
            </MainContent>
        </Box>
    );
}