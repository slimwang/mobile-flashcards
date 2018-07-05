import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import { addNewDeck } from '../actions';
import { connect } from 'react-redux';

class NewDeckScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { title } = this.state;
    this.props.dispatch(addNewDeck({ title }));
  }

  render() {
    return (
      <Container>
        <Content>
          <Form id="newQuestionForm">
            <Item>
              <Input placeholder="New Deck Title" onChangeText={title => this.setState({ title })} />
            </Item>
            <Button
              full
              rounded
              dark
              style={{ marginTop: 10 }}
              onPress={() => this.handleSubmit()}
            >
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default connect()(NewDeckScreen);
