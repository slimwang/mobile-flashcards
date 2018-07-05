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

class MonoDeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.card.title });

  render() {
    const { card } = this.props.navigation.state.params;
    return (
      <Container>
        <Content padder>
          <Card style={{ alignItems: 'center' }}>
            <CardItem header>
              <Text>{ card.title }</Text>
            </CardItem>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Text>{ card.questions.length } cards</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            bordered
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('AddCard', { card })}
          >
            <Text>Add Card</Text>
          </Button>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Quiz', { card })}
          >
            <Text>Start Quiz</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default MonoDeckScreen;
