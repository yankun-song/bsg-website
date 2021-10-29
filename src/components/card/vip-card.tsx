import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./style.scss";
import { IPerson } from "./icard";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Avatar, Box, CardHeader, IconButton, useTheme } from "@mui/material";

import { styles } from "../../theme/Theme";

const VIPCard = (props: React.PropsWithChildren<IPerson>) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  //const theme = useTheme();
  //const classes = styles(theme);

  return (
    <Card className="vip-card" raised>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyContent: "flex-end",
          alignContent: "flex-end",
        }}
      >
        <Box>
          {props.picture ? (
            <img alt={`${props.fname} ${props.lname}`} src={props.picture} />
          ) : (
            ""
          )}
        </Box>
        <Box
          flexGrow={1}
          sx={{ justifyContent: "center", alignContent: "flex-end" }}
        >
          <h1 className="secondary-light">
            {props.fname} {props.lname}
          </h1>
          <h2>
            {props.title}
            <br />
            {props.subtitle}
          </h2>
        </Box>
      </Box>

      <Box flexGrow={1}>
        <h3>{props.children}</h3>
      </Box>

      <Box alignItems="flex-end">
        <CardActions>
          <div className="action-button">
            {props.onClick ? (
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                  props.onClick();
                }}
              >
                {props.onClickText}
              </Button>
            ) : (
              ""
            )}
          </div>
        </CardActions>
      </Box>
    </Card>
  );
};

export default VIPCard;
