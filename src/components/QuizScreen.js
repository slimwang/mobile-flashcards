import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Body,
  Button,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';

class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAnswer: false,
      viewScore: false,
      questionIndex: 0,
      corrects: 0,
    };
    this.toggleViewAnswer.bind(this);
  }

  toggleViewAnswer() {
    this.setState(prevState => ({ viewAnswer: !prevState.viewAnswer }));
  }

  handleJudge(judge) {
    const { questionIndex } = this.state;
    const { questions } = this.props;
    const lastIndex = questions.length - 1;
    const newIndex = questionIndex + 1;
    if (questionIndex === lastIndex) {
      this.setState((prevState) => ({ viewScore: true }));
    }
    if (newIndex <= lastIndex) {
      this.setState({ questionIndex: newIndex});
    }
    if (judge === 'correct' && this.state.corrects < questions.length) {
      this.setState((prevState) => ({ corrects: prevState.corrects + 1}));
    }
  }

  render() {
    const { card } = this.props.navigation.state.params;
    const { questions } = this.props;
    const { questionIndex } = this.state;
    const score = (
      <Card style={{ alignItems: 'center' }}>
        <CardItem header>
          <Text>{`Congratulations! ${this.state.corrects} of ${questions.length} correct.`}</Text>
        </CardItem>
      </Card>
    );
    return (
      <Container>
        <Content padder>
          <Card style={{ alignItems: 'center' }}>
            <Text>{`${this.state.questionIndex + 1}/${card.questions.length}`}</Text>
            <CardItem header>
              <Text>{ questions[questionIndex].question }</Text>
            </CardItem>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Button
                  full
                  danger
                  transparent
                  small
                  onPress={() => this.toggleViewAnswer()}
                >
                  <Text>ANSWER</Text>
                </Button>
                { this.state.viewAnswer && (<Text>{ questions[questionIndex].answer }</Text>)}
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            success
            style={{ marginTop: 10 }}
            onPress={() => this.handleJudge('correct')}
          >
            <Text>Correct</Text>
          </Button>
          <Button
            full
            rounded
            danger
            style={{ marginTop: 10 }}
            onPress={() => this.handleJudge('incorrect')}
          >
            <Text>Incorrect</Text>
          </Button>
          { this.state.viewScore && score}
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { card } = ownProps.navigation.state.params;
  return { questions: state[card.title].questions };
}

export default connect(mapStateToProps)(QuizScreen);
