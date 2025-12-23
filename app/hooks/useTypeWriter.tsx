import { useState, useEffect } from 'react';

export function useTypewriter(text: string, typingSpeed = 120, pauseTime = 1500) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        let timeoutId: NodeJS.Timeout;

        const type = () => {
            if (index <= text.length) {
                setDisplayedText(text.slice(0, index));
                index++;
                timeoutId = setTimeout(type, typingSpeed);
            } else {
                timeoutId = setTimeout(() => {
                    index = 0;
                    setDisplayedText("");
                    type();
                }, pauseTime);
            }
        };

        type();

        return () => clearTimeout(timeoutId);
    }, [text, typingSpeed, pauseTime]);

    return displayedText;
}