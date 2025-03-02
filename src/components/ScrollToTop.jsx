import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Hech narsa return qilmaydi, faqat scrollni boshqaradi
};

export default ScrollToTop;
