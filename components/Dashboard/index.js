import { Component } from "react";
import styled from "styled-components";
import * as algoliasearch from "algoliasearch";
import map from "lodash/map";

import { Router, Link } from "../../routes";
import UserCard from "../UserCard";

var client = algoliasearch("F1TM0UX9BN", "1b52b2b7dc3915bfef09fc5c1baf9104");
var index = client.initIndex("users");

const SearchImage = styled.img`
  opacity: ${({ searched }) => (searched ? "0" : "1")};
  transition: opacity 0.6s;
`;
const DashboardContainer = styled.div`
  height: calc(100vh - 50px);
  flex: 1 1 auto;
  position: relative;
  background: ${({ theme, auth }) => theme.color.yellow.toString()};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

const SearchInput = styled.input`
  width: 360px;
  height: 60px;
  border: none;
  border-radius: 4px;
  width: calc(100% - 40px);
  margin: auto;
  text-align: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  outline: none;
`;
const SearchContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: ${({ searched }) => (searched ? "calc(100vh - 130px)" : "40vh")};
  transition: bottom 1s;
  text-align: center;
  left: 0;
`;
const TipContainer = styled.div`
  font-family: Source Sans Pro;
  line-height: 21px;
  font-size: 13px;
  text-align: center;
  background: #252525;
  opacity: 0.2;
  border-radius: 30px;
`;
const SearchResultsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 150px);
  padding-top: 20px;
  top: ${({ searched }) => (searched ? "150px" : "100vh")};
  left: 0;
  background: ${({ theme }) => theme.color.white.toString()};
  transition: top 1s;
`;

export default class TouchDashboard extends Component {
  state = {
    searched: false,
    results: [],
    searchTerms: ""
  };
  search = searchTerms => {
    this.setState({ searched: true });
    index.search(
      {
        query: searchTerms
      },
      (err, content) => {
        if (err) throw err;
        this.setState({
          results: content.hits
        });
        console.log(content.hits);
      }
    );
  };
  componentDidMount() {}
  render() {
    const { auth } = this.props;
    const { searched, results } = this.state;
    return (
      <DashboardContainer>
        <SearchContainer searched={searched}>
          <SearchImage searched={searched} src="/static/person1.png" />
          <SearchInput
            onChange={ev => {
              this.search(ev.target.value);
            }}
            placeholder="Search"
          />
        </SearchContainer>
        <SearchResultsContainer searched={searched}>
          {results.length !== 0 &&
            map(results, result => {
              return <UserCard key={result.objectID} user={result} />;
            })}
        </SearchResultsContainer>
      </DashboardContainer>
    );
  }
}
