import React, { useEffect, useState } from "react";
import Axios from "axios";
import baseURL from "./Github";
import RepoCard from "./RepoCard";
import { Grid } from "@material-ui/core";

function GitHubCards() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let repoUrls = [baseURL('asteroid-meteorite-data-analysis'), 
        baseURL('restaurant-db'), 
        baseURL('pitbull-chrome-extension'), 
        baseURL('covey-town')];

      repoUrls.map(
        async (url) =>
          await Axios.get(url).then(async (res) => {
              setRepos(r => r.concat(res.data));
          })
      );
    }

    fetchData();
  }, []);

  return (
    <Grid container spacing={1}>
      {repos.map((data, i) => (
        <RepoCard repo={data} key={i} />
      ))}
    </Grid>
  );
}

export default GitHubCards;
