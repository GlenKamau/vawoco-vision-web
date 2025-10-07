import React, { useState, useEffect } from "react";

const TextType = ({
  text = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1000,
  fadeDuration = 500, // fade out time before deleting
  loop = true,
  showCursor = true,
  cursorCharacter = "|",
  allowHtml = false,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fade, setFade] = useState(false); // for fade animation

  useEffect(() => {
    let timer;
    const currentText = text[index];

    // Skip HTML tags while typing
    const getNextChar = (current, nextIndex) => {
      if (current[nextIndex] === "<") {
        const end = current.indexOf(">", nextIndex);
        return current.slice(nextIndex, end + 1);
      }
      return current[nextIndex];
    };

    // Skip HTML tags while deleting
    const getPrevChar = (currentDisplayed) => {
      if (currentDisplayed.endsWith(">")) {
        const start = currentDisplayed.lastIndexOf("<");
        return currentDisplayed.slice(0, start);
      }
      return currentDisplayed.slice(0, -1);
    };

    if (!isDeleting && displayedText.length < currentText.length) {
      timer = setTimeout(() => {
        const nextChar = getNextChar(currentText, displayedText.length);
        setDisplayedText(displayedText + nextChar);
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      // start fade before deleting
      timer = setTimeout(() => {
        setFade(true);
        setTimeout(() => {
          setFade(false);
          setIsDeleting(true);
        }, fadeDuration);
      }, pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(getPrevChar(displayedText));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % text.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed, pauseDuration, fadeDuration]);

  return (
    <span
      className={`whitespace-pre transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      } ${className}`}
    >
      {allowHtml ? (
        <span dangerouslySetInnerHTML={{ __html: displayedText }} />
      ) : (
        displayedText
      )}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
