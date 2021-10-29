import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./style.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";

import {
  Avatar,
  Box,
  CardHeader,
  Chip,
  Divider,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";

import { styles } from "../../theme/Theme";
import { DProject } from "../../model";
import { UserContext } from "../../context/user-context";
import API from "@aws-amplify/api";
import ContentSlider from "../slide/content-slider";
import ContentCard from "./content-card";

const ProjectCard = (props: any) => {
  const { context, contextUpdate, forceUpdate } = useContext(UserContext);

  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  const project = props.project as DProject;

  const oauthLinkedIn = () => {
    let linkedInState = context.setLinkedInState({
      timestamp: new Date().getTime(),
      redirectLink: {
        external: false,
        uri: `/case-study/${project.id}`,
      },
    });

    let oauthLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77lih5m97nz8kj&redirect_uri=${context.urlRoot}/sign-in&state=${linkedInState}&scope=r_liteprofile%20r_emailaddress`;

    window.location.href = oauthLink;
  };

  return (
    <Card className="project-card" raised>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignContent="flex-start"
        spacing={0}
      >
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <h1 className="center primary-dark">
            <CheckCircleIcon sx={{ fontSize: 36 }} /> {project.name}
          </h1>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="10px"
        >
          <h4 className="primary-dark">
            <b>Project Category: </b>
            {project.category?.map((item, index) => (
              <Chip
                key={`category-${index}`}
                label={item}
                size="small"
                variant="outlined"
                color="secondary"
              />
            ))}
          </h4>
          <h3 className="primary-dark">
            <b>Summary: </b>
          </h3>
          <ul>
            {project.summary?.map((item, index) => (
              <h3 key={`summary-${index}`}>
                <CheckIcon /> {item}
              </h3>
            ))}
          </ul>
          {project.content ? (
            <h3 className="primary-dark">
              <b>Attached Materials: </b>
              <ul>Please review project highlights below. </ul>
            </h3>
          ) : (
            ""
          )}
        </Grid>

        <Grid
          container
          item
          xs={12}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <ContentSlider
            items={project.content?.map((item) => (
              <ContentCard content={item}></ContentCard>
            ))}
          ></ContentSlider>
        </Grid>

        <Grid
          container
          item
          xs={12}
          justifyContent="flex-start"
          alignItems="flex-start"
        ></Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
