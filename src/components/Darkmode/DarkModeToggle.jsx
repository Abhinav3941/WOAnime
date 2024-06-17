"use client";
import React, { useContext } from 'react';
import styles from "@/components/Darkmode/dark.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌕</div>
            <div  className={styles.icon}>🌑</div>
            <div
                className={styles.ball}
                style={mode === 'dark' ? { right: '2px' } : { left: '2px' }}
            />
        </div>
    );
};

export default DarkModeToggle;
