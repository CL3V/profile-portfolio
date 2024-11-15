import React, { useState } from 'react';

const Terminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setOutput([...output, `munchkin1199@DESKTOP-MQL26A3:~$ ${input}`]);
            setInput('');
        }
    };

    return (
        <div className='border-t-2 h-screen w-screen p-4 bg-black text-white'>
            <div>
                <div>Terminal</div>
            </div>
            <div>
                <pre>
                    <code>
                        {output.map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                    </code>
                </pre>
                <div>
                    <span style={{ color: '#86EFAC' }}>munchkin1199@DESKTOP-MQL26A3:~$ </span>
                    <input
                        type='text'
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className='bg-inherit text-white outline-none'
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;