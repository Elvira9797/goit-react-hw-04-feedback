import toUpperCaseFirstLetter from '../../Utils/function';
import PropTypes from 'prop-types';
import Button from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsValue = Object.keys(options);

  return (
    <div>
      {optionsValue.map(optionValue => {
        return (
          <Button
            key={optionValue}
            type="button"
            onClick={() => {
              onLeaveFeedback(optionValue);
            }}
          >
            {toUpperCaseFirstLetter(optionValue)}
          </Button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
