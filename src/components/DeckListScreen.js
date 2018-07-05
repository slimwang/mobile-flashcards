import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Entypo } from '@expo/vector-icons'
import {
  Container,
  Body,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';

class DeckListScreen extends Component {
  render() {
    const { cards, navigation } = this.props;
    return (
      <Container>
        <Content padder>
          {cards.map(card => (
            <TouchableOpacity key={card.title} onPress={() => navigation.navigate('MonoDeck', { card })}>
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
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => navigation.navigate('AddDeck')}>
            <Card style={{ alignItems: 'center' }}>
              <CardItem header>
                <Text><Entypo name="add-to-list" size={20}/> Add A New Deck</Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Content>
      </Container>);
  }
}

function mapStateToProps(state) {
  return { cards: Object.values(state) };
}

export default connect(mapStateToProps)(DeckListScreen);
