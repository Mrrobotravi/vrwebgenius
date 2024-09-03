import React, { useContext } from 'react'

import { HeroParallaxDemo } from '../Components/HeroParallaxDemo'
import { DarkModeContext } from '../Components/Effect/DarkModeContext';

import Services from '../Components/Services';
import { MyTimeLine } from '../Components/MyTimeLine';
import { CardSpotlightEffect } from '../Components/Effect/CardSpotlightEffect';
import { TechIcon } from '../Components/TechIcon';


export default function Home() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`${darkMode ? "dark" : ""}  dark:bg-neutral-950`}>
            <HeroParallaxDemo />
            <MyTimeLine />
            <Services />
            {/* <CardSpotlightEffect /> */}
            <TechIcon />


        </div>
    );
}