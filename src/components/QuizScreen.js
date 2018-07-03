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
                <Button danger transparent small style={{ alignItems: 'center' }}><Text> Answer </Text></Button>
                <Text>{ card.questions[0].answer } cards</Text>
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
