const StatisticsCards = ({ text, excludeSpaces }) => {
  const wordCount = text
    .replaceAll('.', ' ')
    .replaceAll('!', ' ')
    .replaceAll('?', ' ')
    .split(' ')
    .filter((word) => word !== '').length;

  const sentenceCount = text
    .replaceAll('?', '.')
    .replaceAll('!', '.')
    .replaceAll('...', '.')
    .split('.')
    .filter((word) => word !== '').length;
  return (
    <>
      {/* --------------------Cards------------------- */}
      <div className="statistics-card-container">
        <div className="total-characters-card statistics-card">
          <p>
            {excludeSpaces === true
              ? text.replaceAll(' ', '').length
              : text.length}
          </p>
          <h3>Total Characters</h3>
        </div>
        <div className="word-count-card statistics-card">
          <p>{wordCount}</p>
          <h3>Word Count</h3>
        </div>
        <div className="sentence-count-card statistics-card">
          <p>{sentenceCount}</p>
          <h3>Sentence Count</h3>
        </div>
      </div>
    </>
  );
};

export default StatisticsCards;
