import PropTypes from 'prop-types';
import FeedbackSection from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <h1>{title}</h1>
      {children}
    </FeedbackSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
