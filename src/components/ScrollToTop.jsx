import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Only scroll to top if there's no hash (anchor link)
        if (!hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });

            // Fallback for slower-loading content
            const timer = setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'instant'
                });
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
