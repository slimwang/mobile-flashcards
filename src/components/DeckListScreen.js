import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Left,
  Title,
  Right,
  Body,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';

class DeckListScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <TouchableOpacity onPress={() => navigation.navigate('MonoDeck')}>
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
          </TouchableOpacity>
          <Card style={{ alignItems: 'center' }}>
            <CardItem header>
              <Text>New Deck</Text>
            </CardItem>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Text>0 cards</Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{ alignItems: 'center' }}>
            <CardItem header>
              <Text>New Deck 2</Text>
            </CardItem>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Text>0 cards</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>);
  }
}

export default DeckListScreen;