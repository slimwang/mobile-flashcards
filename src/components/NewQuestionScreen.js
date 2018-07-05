import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import { addNewQuestion } from '../actions';
import { connect } from 'react-redux';

class NewQuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { card } = this.props.navigation.state.params;
    const question = {
      question: this.state.question,
      answer: this.state.answer
    };
    this.props.dispatch(addNewQuestion({ question, cardTitle: card.title }));
    this.props.navigation.navigate('MonoDeck', { card })
  }

  render() {
    return (
      <Container>
        <Content>
          <Form id="newQuestionForm">
            <Item>
              <Input placeholder="New Question Title" onChangeText={question => this.setState({question})} />
            </Item>
            <Item>
              <Input placeholder="New Question Answer" onChangeText={answer => this.setState({answer})} />
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

export default connect()(NewQuestionScreen);
