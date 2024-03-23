import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor: React.FC = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('a');

        const onMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            gsap.to(cursor, {
                x: clientX,
                y: clientY,
            });
        };

        const onMouseEnterLink = (event: Event) => {
            const link = event.target as HTMLElement;

            if (link.classList.contains('view')) {
                gsap.to(cursor, {
                    scale: 4,
                });

            } else {
                gsap.to(cursor, {
                    scale: 4,
                });
            }
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {
                scale: 1,
            });
        };

        document.addEventListener('mousemove', onMouseMove);

        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });

    
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            links.forEach((link) => {
                link.removeEventListener('mouseenter', onMouseEnterLink);
                link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <div id='custom-cursor' className='custom-cursor'>
        </div>
    );
};

export default Cursor;