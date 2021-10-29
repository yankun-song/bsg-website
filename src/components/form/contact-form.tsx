import {
  Button,
  Container,
  Fab,
  Fade,
  Grid,
  Paper,
  Slide,
  TextField,
  useScrollTrigger,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./style.scss";
import { Link } from "react-router-dom";
import { DInquiry } from "../../model";
import { API } from "aws-amplify";

export default function ContactForm(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  const { t, i18n } = useTranslation("content");
  const context = useContext(UserContext);

  const [inquiry, setInquiry] = useState<DInquiry>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [inquiryResponse, setInquiryResponse] = useState<any>({ status: "" });

  async function callAPI() {
    //const apiName = "users";
    const api = "online-inquiry";
    const path = "";
    const myInit = {
      headers: {
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
      body: {
        data: inquiry,
      },
    };
    let data = await API.post(api, path, myInit);
    //response = await response.json();
    //console.log(JSON.stringify(data));
    setInquiryResponse(data);
    setInquiry({});
  }

  return (
    <Container maxWidth="md">
      <div className="form">
        {inquiryResponse.status! != "ok" ? (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                color="secondary"
                id="name"
                label="Your name"
                value={inquiry.name}
                onChange={(e) => {
                  setInquiry({ ...inquiry, name: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                color="secondary"
                id="email"
                label="Your email"
                value={inquiry.email}
                onChange={(e) => {
                  setInquiry({ ...inquiry, email: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                color="secondary"
                id="phone"
                label="Your phone #"
                value={inquiry.phone}
                onChange={(e) => {
                  setInquiry({ ...inquiry, phone: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} spacing={3}>
              <TextField
                required
                variant="outlined"
                color="secondary"
                id="note"
                label="Your brief message"
                multiline
                rows={4}
                value={inquiry.message}
                onChange={(e) => {
                  setInquiry({ ...inquiry, message: e.target.value });
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              * Your information will only be collected for this business
              communication purpose.
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                onClick={callAPI}
                disabled={
                  inquiry.name!.length < 2 ||
                  inquiry.email!.length < 2 ||
                  inquiry.phone!.length < 7 ||
                  inquiry.message!.length < 10
                }
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        ) : (
          <h2>Thank you!</h2>
        )}
      </div>
    </Container>
  );
}
