import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Title,
  Right,
  Body,
  Button,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';

class MonoDeckScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card style={{ alignItems: 'center' }}>
            <CardItem header>
              <Text>Udacicards</Text>
            </CardItem>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Text>3 cards</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Text>Add Card</Text>
          </Button>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Profile')}
          >
            <Text>Start Quiz</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default MonoDeckScreen;
