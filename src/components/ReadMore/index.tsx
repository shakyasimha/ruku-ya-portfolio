"use client";

import { useState } from "react";

interface ReadMoreProps {
    id: string,
    text: string, 
    amountOfWords?: number
};

export default function ReadMore({id, text, amountOfWords = 36}: ReadMoreProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const splittedText = text.split(' ');   // Converting the text into an array 
    const canOverflow = splittedText.length - 1 > amountOfWords;   // Checking if the words can overflow

    // Logic = if the text overflows than a certain value, then cut it down and create the "read more" section
    const beginText = canOverflow ? splittedText.slice(0, amountOfWords - 1).join(' ') : text; 
    const endText = splittedText.slice(amountOfWords - 1).join(' ');

    // For handling keyboard
    const handleKeyboard = (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
        setIsExpanded(!isExpanded)
        }
    };

    return(
        <p 
            id={id}
            className="text-gray-700 mt-2 text-justify"
        >
            {beginText}
            { canOverflow && (
                <>
                    {!isExpanded && <span>... </span>}
                    <span 
                        className={`${!isExpanded && 'hidden'}`} 
                        aria-hidden={!isExpanded}
                    >
                        {endText}
                    </span>
                    <span
                        className='text-violet-400 ml-2'
                        role="button"
                        tabIndex={0}
                        aria-expanded={isExpanded}
                        aria-controls={id}
                        onKeyDown={handleKeyboard}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'show less' : 'show more'}
                    </span>
                </>
            )}
        </p>
    )
}