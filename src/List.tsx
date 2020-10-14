import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IGithubMember } from "./interfaces";

export const List: React.FC = () => {
  // Have the candidate do the following:
  // Create a state via useState
  // Make an API request using Axios
  // Store that data in the state to manage it
  // Output the list of users wtih <Link to /> element, this can be provided
  const [list, setList] = React.useState<IGithubMember[]>();
  axios
    .get(`https://api.github.com/orgs/twilio/members`)
    .then((response) => setList(response.data));

  if (!list) {
    return <div>Loading...</div>;
  }

  const listItems = list.map((item) => {
    const url = `/detail/${item.login}`;
    return (
      <div key={item.id}>
        <Link to={url}>{item.login}</Link>
      </div>
    );
  });

  return (
    <React.Fragment>
      <h1>Github Members</h1>
      {listItems}
    </React.Fragment>
  );
};
