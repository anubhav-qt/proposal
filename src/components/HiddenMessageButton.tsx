import { useState } from 'react';
import Button from "./Button.tsx";

const HiddenMessageButton = () => {
    const [clicked, setClicked] = useState(false);
    const [oCount, setOCount] = useState(1);
    const [showExtraText, setShowExtraText] = useState(false);

    const handleClick = () => {
        setClicked(true);
        const interval = setInterval(() => {
            setOCount(prevOCount => prevOCount + 1);
        }, 100);
        setTimeout(() => {
            clearInterval(interval);
            setShowExtraText(true);
        }, 3000);
    };

    return (
        <div className="relative left-[20px] bottom-[75px]">
            {!clicked ? (
                <Button props={handleClick}/>
            ) : (
                <div className="w-[255px]">I love you s{'o'.repeat(oCount)} much! <span className={`extraText ${showExtraText ? 'show' : ''}`}> (so much that it goes out of the screen🤭)</span></div>
            )}
        </div>
    )
}

export default HiddenMessageButton;