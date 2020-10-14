import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IGithubMemberDetail } from "./interfaces";

export const Detail: React.FC = (props) => {
  // Have the candidate do the following:
  // Use existing endpoint to grab data from Github
  // Store that data in a state to manage
  // Output the name of the member

  // Use the params passed in from react-router to form the API request, this can be provided
  const { username } = props.match.params;

  const [detail, setDetail] = React.useState<IGithubMemberDetail>();

  axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => setDetail(response.data));

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <h1>Github Member Detail Page</h1>
      <Link to="/">Back to list</Link>
      <div>Name is: {detail.name}</div>
    </React.Fragment>
  );
};
