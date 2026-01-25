import React, { useState, useEffect, useRef } from "react";

const TypingAnimation = () => {
  const [lines, setLines] = useState([
    { text: "Hi,", completed: false, currentText: "" },
    { text: "I'm Rahat", completed: false, currentText: "" },
    { text: "Full-stack Developer", completed: false, currentText: "" },
  ]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const typingIntervalRef = useRef(null);

  useEffect(() => {
    // Start typing the first line
    if (currentLineIndex < lines.length) {
      startTypingLine(currentLineIndex);
    }

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [currentLineIndex]);

  const startTypingLine = (lineIndex) => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    const line = lines[lineIndex];
    let currentCharIndex = 0;

    typingIntervalRef.current = setInterval(() => {
      setLines((prevLines) => {
        const updatedLines = [...prevLines];

        if (lineIndex === 1) {
          // Special handling for the second line with colored name
          if (currentCharIndex <= 4) {
            // Type "I'm " normally
            updatedLines[lineIndex] = {
              ...updatedLines[lineIndex],
              currentText: line.text.substring(0, currentCharIndex + 1),
            };
          } else {
            // Type "Rahat" with styling
            const regularPart = line.text.substring(0, 4);
            const styledPart = line.text.substring(4, currentCharIndex + 1);

            updatedLines[lineIndex] = {
              ...updatedLines[lineIndex],
              currentText: (
                <span>
                  {regularPart}
                  <span className="text-brand-1 ">{styledPart}</span>
                </span>
              ),
            };
          }
        } else {
          // Normal typing for other lines
          updatedLines[lineIndex] = {
            ...updatedLines[lineIndex],
            currentText: line.text.substring(0, currentCharIndex + 1),
          };
        }

        return updatedLines;
      });

      currentCharIndex++;

      // Check if line is complete
      if (currentCharIndex >= line.text.length) {
        clearInterval(typingIntervalRef.current);

        setLines((prevLines) => {
          const updatedLines = [...prevLines];
          updatedLines[lineIndex] = {
            ...updatedLines[lineIndex],
            completed: true,
          };
          return updatedLines;
        });

        setShowCursor(false);

        // Move to next line after delay
        if (lineIndex < lines.length - 1) {
          setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
            setShowCursor(true);
          }, 800);
        }
      }
    }, 100);
  };

  // Render the lines
  const renderLine = (line, index) => {
    const isCurrentLine = index === currentLineIndex;

    return (
      <div key={index} className="line">
        <span>{line.currentText}</span>
        {isCurrentLine && showCursor && (
          <span className="typing-cursor">|</span>
        )}
      </div>
    );
  };

  return (
    <div className="typing-container intro-text pl-6 min-h-[110px] md:min-h-[220px] ">
      {lines.map(renderLine)}
    </div>
  );
};

export default TypingAnimation;
