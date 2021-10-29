import React, { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import { theme, styles } from "../../theme/Theme";
import Banner from "../../components/banner/banner";
import { Container, Fade, Grid } from "@mui/material";
import useScrollTrigger from "../../hooks/scroll-trigger";
import GoogleSlideCard from "../../components/card/google-slide-card";

interface Person {
  firstname: string;
  lastname: string;
}

export interface Props {
  text: string;
  /**
     * 
    ok: boolean;
    id?: number;  // ? optional
    fn: (bob: string) => string;
    person: Person;
     */
}

export default function Test() {
  const { t, i18n } = useTranslation("content");

  const { context, contextUpdate, forceUpdate } = useContext(UserContext);
  const classes: any = styles(theme);

  const myRef = useRef<HTMLDivElement>(null);

  const trigger = true; //useScrollTrigger(myRef.current);

  useEffect(() => {
    context.getCognitoJWT().then((jwt) => {
      console.log("Cognito JWT Token: " + jwt);
    });
  }, []);
  return (
    <div>
      <Banner>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignContent="flex-start"
        >
          <Grid
            container
            item
            xs={12}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <h1>一次报名 长期受益</h1>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <h2>
              下面列出了本培训计划提供的职业发展服务的细节项目。
              BSG一直在持续的改进和增加培训的价值，并引入更多的服务项目来支持新老学员的职业发展需要。我们的老学员也一直在和我们一起发展的旅程中，获得更多的价值。{" "}
            </h2>
          </Grid>
        </Grid>
      </Banner>

      <h1>{t("welcome.title")}</h1>
      <div className={classes.navHeader}>This is a test</div>
      <button
        onClick={() => {
          context.setLanguage("cn");
          i18n.changeLanguage("cn");
        }}
      >
        中文
      </button>
      <button
        onClick={() => {
          context.setLanguage("en");
          i18n.changeLanguage("en");
        }}
      >
        en
      </button>
      <h3>My name is: {context.user.language} </h3>

      <Banner>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignContent="flex-start"
          ref={myRef}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <h1>一次报名 长期受益</h1>

            <Container maxWidth="lg">
              <GoogleSlideCard
                src="2PACX-1vTNBQZ1AwdLcxZsOz8pLpx0Y9dNX8G6MYLMHGRUtvKcfh02Wqe-8bIl6DS5fibxS5eZjev1FbVaFII0"
                title="BSG Career Coaching Program Introduction"
                description="BSG Career Coaching Program Introduction"
              ></GoogleSlideCard>
            </Container>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <h2>
              下面列出了本培训计划提供的职业发展服务的细节项目。
              BSG一直在持续的改进和增加培训的价值，并引入更多的服务项目来支持新老学员的职业发展需要。我们的老学员也一直在和我们一起发展的旅程中，获得更多的价值。{" "}
            </h2>
          </Grid>
        </Grid>
      </Banner>
    </div>
  );
}
