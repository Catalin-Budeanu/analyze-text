const TextareaSettings = ({
  text,
  excludeSpaces,
  setExcludeSpaces,
  hasCharacterLimit,
  setHasCharacterLimit,
  characterLimit,
  setCharacterLimit,
}) => {
  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces);
  };

  const handleHasCharacterLimit = () => {
    setHasCharacterLimit(!hasCharacterLimit);
  };

  const handleCharacterLimitChange = (e) => {
    const newCharacterLimit = Number(e.target.value);
    setCharacterLimit(newCharacterLimit);
  };

  const getReadingTime = () => {
    if (text.length === 0) {
      return '0';
    } else if (text.length <= 300) {
      return '<1';
    } else {
      return '<4';
    }
  };

  return (
    <>
      <div className="textarea-settings-container">
        {/* -----------------Exclude Spaces------------- */}
        <div className="settings-textarea">
          <div>
            <input
              type="checkbox"
              id="exclude-spaces"
              onChange={handleExcludeSpaces}
              value={excludeSpaces}
            />
            <label htmlFor="exclude-spaces">Exclude spaces</label>
          </div>

          {/* -------------Character limit------------- */}
          <div>
            <input
              type="checkbox"
              id="character-limit"
              onChange={handleHasCharacterLimit}
            />
            <label htmlFor="character-limit">Set character limits</label>
            {hasCharacterLimit === true ? (
              <input
                type="number"
                onChange={handleCharacterLimitChange}
                value={characterLimit}
              />
            ) : null}
          </div>
        </div>
        {/* ------------Aprox reading time---------  */}
        <p>Approx. reading time: {getReadingTime()} minute</p>
      </div>
    </>
  );
};

export default TextareaSettings;
