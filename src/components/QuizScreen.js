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
      questionIndex: 0,
    };
    this.toggleViewAnswer.bind(this);
  }

  toggleViewAnswer() {
    this.setState(prevState => ({ viewAnswer: !prevState.viewAnswer }));
  }

  render() {
    const { card } = this.props.navigation.state.params;
    const { questions } = this.props;
    const { questionIndex } = this.state;
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
                  <Text> Answer </Text>
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
            onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Text>Correct</Text>
          </Button>
          <Button
            full
            rounded
            danger
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Profile')}
          >
            <Text>Incorrect</Text>
          </Button>
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
