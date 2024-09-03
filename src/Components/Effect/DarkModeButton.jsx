import React, { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from './DarkModeContext';

export default function DarkModeButton() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? <LightModeIcon className="dark:text-white" /> : <DarkModeIcon />}
        </button>
    );
}
