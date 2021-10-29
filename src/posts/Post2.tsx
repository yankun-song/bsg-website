import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../context/user-context";
import { useTheme } from "@mui/material/styles";
import "./style.scss";
import { Button, Fade, Grid } from "@mui/material";
import Post from "../components/post/Post";
import DemoCard from "../components/card/demo-card";
import Banner from "../components/banner/banner";
import useScrollTrigger from "../hooks/scroll-trigger";

export default function Post2() {
  const { t, i18n } = useTranslation("content");

  const { context, forceUpdate } = useContext(UserContext);
  const theme = useTheme();

  const myRef1 = useRef<HTMLDivElement>(null);
  const myRef2 = useRef<HTMLDivElement>(null);
  const myRef3 = useRef<HTMLDivElement>(null);

  const getTrigger = useScrollTrigger();

  const [trigger1, setTrigger1] = useState(getTrigger(myRef1.current).trigger);
  const [trigger2, setTrigger2] = useState(getTrigger(myRef2.current).trigger);
  const [trigger3, setTrigger3] = useState(getTrigger(myRef3.current).trigger);
  //let trigger2 = useScrollTrigger(myRef2.current);
  //let trigger3 = useScrollTrigger(myRef3.current);

  useEffect(() => {
    window.onscroll = () => {
      setTrigger1(getTrigger(myRef1.current).trigger);
      setTrigger2(getTrigger(myRef2.current).trigger);
      setTrigger3(getTrigger(myRef3.current).trigger);
    };
  }, []);

  return (
    <div className="navHeader">
      <Fade
        in={trigger1}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRef1}>
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
        </div>
      </Fade>

      <Post
        html={`
        <div>
          This is a html test - my props <h1>test</h1>
          <div>This is a test - my props </div>
          <Button>Test Button Style</Button>
          </div>
      `}
      >
        <div>
          This is a html test <h1>{t("welcome.title")}</h1>
          <div>This is a test - my children </div>
          <Button>Test Button Style</Button>
          <h3>My name is: {context.user.language} </h3>
          <DemoCard
            image="/image/pic_admin.jpg"
            title="系统设置与管理"
            description="系统的设置与管理"
          />
        </div>

        <div>
          <h1>Business Domain Focus </h1>
          <h2>Health & Medical</h2>
          Highly regulated industry requires special attention to security and
          compliance.
          <h2>Retail</h2>
          The innovative way of engaging customer requires solid & flexible
          backend APIs and services.
          <h2>Finance & Insurance</h2>
          Performance without compromising security and high availability.
          <h2>Government Services</h2> Efficient program management is as
          equally important as innovative design and delivery.
          <h1>Technology Consulting</h1>
          <h2>Strategy Consulting & Solution Architecture</h2> From strategy to
          implementation, we offer solutions to meet project needs at all size.
          Business application (off-the-shelf, or custom built) Integration
          solutions (API Gateway, Microservices) Mobile architecture & solution
          (native, hybrid)
          <h2>Product Development : From Mobile/IoT To ML/AI </h2>
          We offer end-to-end development services, including mobile/web
          frontend development, services development, embedded systems, and data
          systems.We help you build innovative product to win customers.
          <h2>Cloud Dev/Ops </h2>
          We help enterprise select right platform for cloud strategy. Amazon
          AWS, Microsoft Azure, Google Cloud, and likely a hybrid enterprise
          cloud approach for an established enterprise environment.
          <h2>Data = Intelligence</h2>
          From data platform to data solution, from data analytics to data
          science. It helps business make intelligent decisions.
        </div>
      </Post>

      <Fade
        in={trigger2}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRef2}>
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
        </div>
      </Fade>

      <Fade
        in={trigger3}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRef3}>
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
        </div>
      </Fade>
    </div>
  );
}
