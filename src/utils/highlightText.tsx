export const highlightedMatchingText = (
  text: string,
  highlight: string
) => {
  if (!highlight.trim()) {
    return text;
  }

  const lowerCaseText = text.toLowerCase();
  const lowerCaseHighlight = highlight.toLowerCase();
  const result: React.ReactNode[] = [];

  let currentIndex = lowerCaseText.indexOf(lowerCaseHighlight);
  let lastIndex = 0;

  while (currentIndex !== -1) {
    result.push(text.substring(lastIndex, currentIndex));
    result.push(
      <strong key={currentIndex}>
        {text.slice(currentIndex, currentIndex + highlight.length)}
      </strong>
    );

    lastIndex = currentIndex + highlight.length;
    currentIndex = lowerCaseText.indexOf(
      lowerCaseHighlight,
      lastIndex
    );
  }

  result.push(text.substring(lastIndex));
  return result;
};
