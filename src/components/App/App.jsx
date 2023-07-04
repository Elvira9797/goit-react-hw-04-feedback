import React, { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

function App() {
  const [feedbackStats, setFeedbackStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = option => {
    setFeedbackStats(prevStats => ({
      ...prevStats,
      [option]: prevStats[option] + 1,
    }));
  };
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackStats;

    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedbackStats;

    const totalProperties = good + neutral + bad;

    return totalProperties === 0
      ? 0
      : Math.round((good / totalProperties) * 100);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={feedbackStats}
        onLeaveFeedback={leaveFeedback}
      />
      <Statistics
        good={feedbackStats.good}
        neutral={feedbackStats.neutral}
        bad={feedbackStats.bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}

export default App;
