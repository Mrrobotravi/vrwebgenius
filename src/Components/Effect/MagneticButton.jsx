import React, { useEffect, useRef } from 'react';
import { gsap, Power4 } from 'gsap';

const MagneticButton = ({ strength = 50, children }) => {
    const magnetRef = useRef(null);

    useEffect(() => {
        const magnetButton = magnetRef.current;

        const moveMagnet = (event) => {
            const bounding = magnetButton.getBoundingClientRect();
            gsap.to(magnetButton, {
                duration: 1,
                x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
                y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
                ease: Power4.easeOut,
            });
        };

        const resetPosition = () => {
            gsap.to(magnetButton, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Power4.easeOut,
            });
        };

        magnetButton.addEventListener('mousemove', moveMagnet);
        magnetButton.addEventListener('mouseout', resetPosition);

        return () => {
            magnetButton.removeEventListener('mousemove', moveMagnet);
            magnetButton.removeEventListener('mouseout', resetPosition);
        };
    }, [strength]);

    return (
        <div ref={magnetRef} className="magnetic">
            {children}
        </div>
    );
};

export default MagneticButton;
