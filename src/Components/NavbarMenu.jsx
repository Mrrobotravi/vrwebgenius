"use client";
import React, { useContext, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./AceternityUi/NavbarC";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router-dom";
import MagneticButton from "./Effect/MagneticButton";
import { DarkModeContext } from "./Effect/DarkModeContext";
import DarkModeButton from "./Effect/DarkModeButton";

export default function NavbarMenu() {
    return (
        (<div className="relative w-full   flex items-en justify-center">

            <Navbar className="top-2" />

        </div>)
    );
}

function Navbar({
    className
}) {
    const [active, setActive] = useState(null);

    const { darkMode } = useContext(DarkModeContext);

    return (
        (
            <div className={`${darkMode ? "dark" : ""}`}>
                <div
                    className={cn(" fixed  inset-x-0 max-w-4xl mx-auto z-50", className)}
                >

                    <Menu setActive={setActive} >
                        <NavLink className="text-black  dark:text-white " to='/' > <MagneticButton>Home</MagneticButton> </NavLink>
                        <NavLink className="text-black  dark:text-white" to='/about' > <MagneticButton>About</MagneticButton></NavLink>
                        <NavLink className="text-black  dark:text-white" to='/service' > <MagneticButton>Service</MagneticButton></NavLink>
                        <NavLink className="text-black  dark:text-white" to='/project' ><MagneticButton>Project</MagneticButton></NavLink>
                        <NavLink className="text-black  dark:text-white" to='/contact' ><MagneticButton>Contact</MagneticButton> </NavLink>
                        <MagneticButton><DarkModeButton /></MagneticButton>


                    </Menu>
                </div> </div>)
    );
}
