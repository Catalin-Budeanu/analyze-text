const Textarea = ({ text, setText, characterLimit, hasCharacterLimit }) => {
  const handleTextChange = (e) => {
    setText(e.target.value.trim());
  };

  return (
    <>
      <textarea
        rows="6"
        cols="100"
        placeholder="Start typing here ... (or paste your text)"
        onChange={handleTextChange}
        className="textarea-card"
      ></textarea>
      {hasCharacterLimit === true && text.length > characterLimit ? (
        <p className="error-character-limit">
          Limit reached! Your text exceeds {characterLimit} characters.
        </p>
      ) : null}
    </>
  );
};

export default Textarea;
