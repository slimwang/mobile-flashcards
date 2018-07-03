import React, { Component } from 'react';
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
    };
    this.toggleViewAnswer.bind(this);
  }

  toggleViewAnswer() {
    this.setState(prevState => ({ viewAnswer: !prevState.viewAnswer }));
  }

  render() {
    const { card } = this.props.navigation.state.params;
    return (
      <Container>
        <Content padder>
          <Card style={{ alignItems: 'center' }}>
            <CardItem header>
              <Text>{ card.questions[0].question }</Text>
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
                { this.state.viewAnswer && (<Text>{ card.questions[0].answer }</Text>)}
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

export default QuizScreen;
