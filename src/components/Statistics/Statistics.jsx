import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import Reviews from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2>Statistics</h2>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <div>
          <Reviews>Good: {good}</Reviews>
          <Reviews>Neutral: {neutral}</Reviews>
          <Reviews>Bad: {bad}</Reviews>
          <Reviews>Total: {total}</Reviews>
          <Reviews>Positive feedback: {positivePercentage}%</Reviews>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
