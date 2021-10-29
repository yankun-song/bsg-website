import {
  Container,
  Fab,
  Fade,
  Grid,
  Paper,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//import { UserContext } from "../../context/user-context";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./style.scss";

import { Link, useHistory } from "react-router-dom";
import qrcode from "./qrcode";

export default function QRCode(props: any) {
  const { t, i18n } = useTranslation("content");

  const history = useHistory();

  //const context = useContext(UserContext);

  let text = props.text;
  let [code, setCode] = useState("");

  const getQRCode = (str: string) => {
    if (str != null && str.length < 100) {
      let qr = new qrcode(4, "L");
      qr.addData(str, "");
      qr.make();
      let data = qr.createImgTag(2, 8, "");

      setCode(data);
      //return data;
    }
  };

  useEffect(() => {
    if (text) getQRCode(text);
  }, [text]);

  return (
    <Container maxWidth="sm">
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: `${code}`,
            }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
}
