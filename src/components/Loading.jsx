import React, { useEffect, useState } from 'react';
import './Loading.css'; 

const Loading = ({ onComplete }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            if (onComplete) {
                onComplete(); 
            }
        }, 2000); 

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!show) return null; 

    return (
        <div className="loading-container">
            <div className="loader"></div>
        </div>
    );
};

export default Loading;
