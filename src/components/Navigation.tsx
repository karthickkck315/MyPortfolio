import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (sectionId: string) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);

        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
            const element = document.getElementById(sectionId);
            const header = document.querySelector('header');
            
            if (element && header) {
                const headerHeight = header.getBoundingClientRect().height;
                const elementPosition = element.offsetTop;
                
                // Add a small delay to ensure state updates are completed
                setTimeout(() => {
                    window.scrollTo({
                        top: Math.max(0, elementPosition - headerHeight),
                        behavior: 'smooth'
                    });
                }, 50);
            }
        });
    };

    // Add scroll spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 100; // offset for better detection

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
};

export default MyComponent;
