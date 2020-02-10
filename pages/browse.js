import { Component } from "react";
import styled from "styled-components";

const Layout = styled.div`
  background: red;
  width: 200px;
  height: 200px;
`;

const Input = styled.input`
  padding: 15px;
  width: 100px;
`;

const Heading = styled.h1``;

const SomeButton = styled.button``;

const ViewWord = props => {
  const { word } = props;
  return <Heading>{word}</Heading>;
};
export default class Connections extends Component {
  state = {
    word: ""
  };
  alertMe = () => {
    alert(this.state.word);
  };
  onWordChange = ev => {
    this.setState({
      word: ev.target.value
    });
  };
  render() {
    const { word } = this.state;
    return (
      <Layout>
        <Input value={word} onChange={this.onWordChange} />
        <SomeButton onClick={this.alertMe}>Click me</SomeButton>
        <ViewWord word={word} />
      </Layout>
    );
  }
}
