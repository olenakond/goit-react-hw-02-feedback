import { Container, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(option => (
        <Button
          key={option}
          name={option}
          onClick={onLeaveFeedback}
          type="button"
        >
          {option}
        </Button>
      ))}
    </Container>
  );
};

export default FeedbackOptions;
