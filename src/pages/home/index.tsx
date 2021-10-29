import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";
import { API } from "aws-amplify";
import useScrollTrigger from "../../hooks/scroll-trigger";
import { Container, Divider, Fade, Grid } from "@mui/material";
import ThemeCard from "../../components/card/theme-card";
import "../../custom.d.ts";
import "./style.scss";
import IconCard from "../../components/card/icon-card";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import EmojiSymbolsOutlinedIcon from "@mui/icons-material/EmojiSymbolsOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import Banner from "../../components/banner/banner";
import { DBusiness } from "../../model";
import ScrollCard from "../../components/card/scroll-card";
import BSGModal from "../../components/modal/bsg-modal";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import BusinessIcon from "@mui/icons-material/Business";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PollIcon from "@mui/icons-material/Poll";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EvStationIcon from "@mui/icons-material/EvStation";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import ApiIcon from "@mui/icons-material/Api";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SpeedIcon from "@mui/icons-material/Speed";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

import ContactForm from "../../components/form/contact-form";
import { useHistory } from "react-router";
import { ContextService } from "../../context/context-service";

const Home = (props: any) => {
  //const { children, window } = props;
  const { t, i18n } = useTranslation("content");

  const history = useHistory();
  const context = useContext(UserContext);

  const myRefWe = useRef<HTMLDivElement>(null);
  const myRefWhy = useRef<HTMLDivElement>(null);
  const myRefHow = useRef<HTMLDivElement>(null);
  const myRefContact = useRef<HTMLDivElement>(null);

  const getTrigger = useScrollTrigger();

  const [business, setBusiness] = useState<DBusiness>({ company: {} });

  const [triggerWe, setTriggerWe] = useState(
    getTrigger(myRefWe.current).trigger
  );
  const [triggerWhy, setTriggerWhy] = useState(
    getTrigger(myRefWhy.current).trigger
  );
  const [triggerHow, setTriggerHow] = useState(
    getTrigger(myRefHow.current).trigger
  );
  const [triggerContact, setTriggerContact] = useState(
    getTrigger(myRefContact.current).trigger
  );

  async function callAPI() {
    //const apiName = "users";
    const api = "business-bsg";
    const path = "";
    const myInit = {
      headers: {
        //"Cache-Control": "No-Cache",
        "Cache-Control": ContextService.CACHE_MAX_AGE,
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
    };
    let data = await API.get(api, path, myInit);
    //response = await response.json();
    //console.log(JSON.stringify(response));
    setBusiness(data as DBusiness);
  }

  useEffect(() => {
    document.title = "BSG:Welcome";

    window.onscroll = () => {
      setTriggerWe(getTrigger(myRefWe.current).trigger);
      setTriggerWhy(getTrigger(myRefWhy.current).trigger);
      setTriggerHow(getTrigger(myRefHow.current).trigger);
      setTriggerContact(getTrigger(myRefContact.current).trigger);
    };

    //Auth.currentCredentials().then((user) => {
    //  if (user) console.log(JSON.stringify(user));
    //});

    callAPI();

    window.scrollTo(0, 0);
  }, []);

  const [openConsulting, setOpenConsulting] = React.useState(false);
  const [openDevelopment, setOpenDevelopment] = React.useState(false);
  const [openTraining, setOpenTraining] = React.useState(false);
  const [openStaffing, setOpenStaffing] = React.useState(false);

  return (
    <div>
      <ThemeCard
        backgroundImg="https://my-bsg-asset.s3.amazonaws.com/image/theme_flight.jpg"
        opacity={1.0}
        title=""
        description=""
        caption="Somewhere in the sky, the Earth"
        minHeight={700}
      >
        <Container maxWidth="md">
          <h2 className="center primary-light">
            Engineering is complicated ...
          </h2>
          <h1 className="center secondary-light">Strategy shouldn't be. </h1>

          <h1>
            <br />
          </h1>
          <h2 className="center primary-light">
            Technology is complicated ...
          </h2>
          <h1 className="center secondary-light">
            User experience shouldn't be.
          </h1>

          <h1>
            <br />
            <br />
          </h1>
          <h1 className="center secondary-light">We are here to help. </h1>
        </Container>
      </ThemeCard>

      <Fade in={triggerWe} timeout={4000}>
        <div ref={myRefWe}>
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
                <h1>What we do</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  BSG offers high quality consulting, development and staffing
                  augmentation services for local and global clients without a
                  hefty price tag.
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="section-dark">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={8}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            alignContent="center"
          >
            <Grid container item xs={12} sm={6} lg={3} justifyContent="center">
              <IconCard
                icon={
                  <BubbleChartOutlinedIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="Consulting"
                description="We help business solve problems"
                onClick={() => {
                  setOpenConsulting(true);
                }}
                onClickText="Read more ..."
              />

              <BSGModal
                title="Consulting - Problem Solving"
                open={openConsulting}
                onClose={() => {
                  setOpenConsulting(false);
                }}
              >
                <Container maxWidth="lg">
                  <Grid
                    container
                    spacing={10}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                  >
                    <Grid container item xs={12} justifyContent="center">
                      <h2 className="center secondary-light">
                        Our experience and expertise is focused on the following
                        specific areas.
                      </h2>
                      <h3 className="center">
                        <a
                          href="#"
                          onClick={() => {
                            history.push("/contact-us");
                          }}
                        >
                          Contact us today
                        </a>{" "}
                        to explore how we may help accelerate strategy adoption.
                      </h3>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <CloudDoneIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Cloud Migration"
                        description="Cloud vendor assessment, solution architecture and cloud engineering"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <BubbleChartOutlinedIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Application Dev"
                        description="New application development, or legacy application modernization"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <CompareArrowsIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Data Engineering"
                        description="From data platform to ETL processing"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <BusinessIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Small Business Package"
                        description="We help small business to  more technology with less"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <BubbleChartOutlinedIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Vendor Assessment"
                        description="Assess vendor product(s) and make production and solution recommendation"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <BubbleChartOutlinedIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Architecture Assessment"
                        description="Analyze and document current state and propose & recommend future state"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <BubbleChartOutlinedIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Consulting"
                        description="We help you to define the problem (Analysis), lay out a recommendation and plan (Solution & Planning), then get it done (Engineering & Implementation)"
                      />
                    </Grid>
                  </Grid>
                </Container>
              </BSGModal>
            </Grid>
            <Grid container item xs={12} sm={6} lg={3} justifyContent="center">
              <IconCard
                icon={
                  <DeveloperModeIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="Developing"
                description="We build innovative products & solutions"
                onClick={() => {
                  setOpenDevelopment(true);
                }}
                onClickText="Read more ..."
              />

              <BSGModal
                title="Development - Together, let's build great things"
                open={openDevelopment}
                onClose={() => {
                  setOpenDevelopment(false);
                }}
              >
                <Container maxWidth="lg">
                  <Grid
                    container
                    spacing={10}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                  >
                    <Grid container item xs={12} justifyContent="center">
                      <h2 className="center secondary-light">
                        Our experience and expertise is focused on the following
                        specific areas.
                      </h2>
                      <h3 className="center">
                        <a
                          href="#"
                          onClick={() => {
                            history.push("/contact-us");
                          }}
                        >
                          Contact us today
                        </a>{" "}
                        to explore how we may help you accelerate project
                        development.
                      </h3>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <ChangeCircleIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Data Pipeline"
                        description="Develop pipeline to automate data migration, data ingestion, ETL, monitoring and reporting"
                      />
                    </Grid>

                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <TouchAppIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Front-end Development"
                        description="Develop modern web application using popular frameworks including Angular and React"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <ApiIcon color="secondary" style={{ fontSize: 48 }} />
                        }
                        title="API & Microservices Development"
                        description="Develop modern container and serverless backend using RESTFul and GraphQL APIs"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <SettingsEthernetIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="DevOps CICD Pipeline"
                        description="Develop Infrastructure-as-Code and CICD automation"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <SpeedIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Testing"
                        description="QA testing automation"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <CloudDoneIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Cloud CRM Platform Development"
                        description="Develop application on Cloud Platform for Salesforce and Microsoft Dynamnics"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <BuildCircleIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Custom Dev & Integration"
                        description="We partner with hundreds of technology providers and build solution to provide seamless integration and user experience. Please ask. "
                      />
                    </Grid>
                  </Grid>
                </Container>
              </BSGModal>
            </Grid>

            <Grid container item xs={12} sm={6} lg={3} justifyContent="center">
              <IconCard
                icon={
                  <EmojiSymbolsOutlinedIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="Training"
                description="We train professionals with real project experience"
                onClick={() => {
                  setOpenTraining(true);
                }}
                onClickText="Read more ..."
              />

              <BSGModal
                title="Training - Our experience to support your success"
                open={openTraining}
                onClose={() => {
                  setOpenTraining(false);
                }}
              >
                <Container maxWidth="lg">
                  <Grid
                    container
                    spacing={10}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                  >
                    <Grid container item xs={12} justifyContent="center">
                      <h3 className="center">
                        <a
                          href="#"
                          onClick={() => {
                            history.push("/contact-us");
                          }}
                        >
                          Contact us today
                        </a>{" "}
                        to explore how we may help you accelerate career
                        development.
                      </h3>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <BubbleChartOutlinedIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Career Coaching/Training"
                        description="Soft skill, leadership and communication that you need for professional career development"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <BubbleChartOutlinedIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Technical Training "
                        description="Technical training for IT/Data Consultant"
                      />
                    </Grid>
                  </Grid>
                </Container>
              </BSGModal>
            </Grid>
            <Grid container item xs={12} sm={6} lg={3} justifyContent="center">
              <IconCard
                icon={
                  <GroupAddOutlinedIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="Staffing"
                description="We are your extended team"
                onClick={() => {
                  setOpenStaffing(true);
                }}
                onClickText="Read more ..."
              />

              <BSGModal
                title="Staffing - We are your extended team"
                open={openStaffing}
                onClose={() => {
                  setOpenStaffing(false);
                }}
              >
                <Container maxWidth="lg">
                  <Grid
                    container
                    spacing={10}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                  >
                    <Grid container item xs={12} justifyContent="center">
                      <h2 className="center secondary-light">
                        We are specialized in Information and Data technology
                        domain.
                      </h2>
                      <h2 className="center secondary-light">
                        We offer different staffing augmentation options to
                        support your specific sourcing needs.
                      </h2>
                      <h3 className="center">
                        <a
                          href="#"
                          onClick={() => {
                            history.push("/contact-us");
                          }}
                        >
                          Contact us today
                        </a>{" "}
                        to explore how we may help accelerate talent acquisition
                        process.
                      </h3>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      justifyContent="center"
                    >
                      <IconCard
                        icon={
                          <BubbleChartOutlinedIcon
                            color="secondary"
                            style={{ fontSize: 48 }}
                          />
                        }
                        title="Get Started"
                        description="Get MSA (Master Service Agreement or GSA (General Service Agreement) in place, we are all ready to go to serve your staffing needs. "
                        onClickText="Contact us"
                        onClick={() => {
                          history.push("/contact-us");
                        }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </BSGModal>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Fade in={triggerWhy} timeout={4000}>
        <div ref={myRefWhy}>
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
                <h1>Our experience</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  Our extended experience cross different industries and
                  technology domains
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <Container maxWidth="md">
        <h1></h1>
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={4}
            justifyContent="center"
            alignContent="center"
          >
            <h2 className="center secondary-light">
              <FavoriteBorderIcon style={{ fontSize: 60 }} />
              <br />
              Healthcare & Lifescience
            </h2>
            <h3 className="center">
              Highly regulated industry requires special attention to security
              and compliance.
            </h3>
          </Grid>
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={4}
            justifyContent="center"
            alignContent="center"
          >
            <h2 className="center secondary-light">
              <LocalMallIcon style={{ fontSize: 60 }} />
              <br />
              Retail & eCommerce
            </h2>
            <h3 className="center">
              The innovative way of engaging customer requires solid & flexible
              backend APIs and services.
            </h3>
          </Grid>
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={4}
            justifyContent="center"
            alignContent="center"
          >
            <h2 className="center secondary-light">
              <PollIcon style={{ fontSize: 60 }} />
              <br />
              Finance & Insurance
            </h2>
            <h3 className="center">
              Performance without compromising security and high availability.
            </h3>
          </Grid>
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={4}
            justifyContent="center"
            alignContent="center"
          >
            <h2 className="center secondary-light">
              <AccountBalanceIcon style={{ fontSize: 60 }} />
              <br />
              Government Services
            </h2>
            <h3 className="center">
              Efficient program management is as equally important as innovative
              design and delivery.
            </h3>
          </Grid>{" "}
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={4}
            justifyContent="center"
            alignContent="center"
          >
            <h2 className="center secondary-light">
              <EvStationIcon style={{ fontSize: 60 }} />
              <br />
              Energy & Utilities
            </h2>
            <h3 className="center">Innovation with safety and efficiency</h3>
          </Grid>{" "}
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={4}
            justifyContent="center"
            alignContent="center"
          >
            <h2 className="center secondary-light">
              <GroupWorkIcon style={{ fontSize: 60 }} />
              <br />
              Community & Non-Profit
            </h2>
            <h3 className="center">
              We support our community and non-profit organizations.
            </h3>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md">
        <h1></h1>
        <Divider variant="middle" />

        <ScrollCard
          title=""
          description="Our technology experience"
          minHeight={80}
          scrollDirection="horizontal"
          scrollTimer={50}
          messages={business?.technologies?.map((technology) => {
            return (
              <img src={technology.logo} style={{ height: 64, margin: 20 }} />
            );
          })}
        ></ScrollCard>
        <h1></h1>
      </Container>

      <Fade in={triggerHow} timeout={4000}>
        <div ref={myRefHow}>
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
                <h1>BSG principles</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="center"
              >
                <h2>
                  "To give real service you must add something which cannot be
                  bought or measured with money, and that is{" "}
                  <span className="secondary-light">SINCERITY</span> and
                  <span className="secondary-light">INTEGRITY</span>"
                </h2>
                <h3>Douglas Adams</h3>
              </Grid>
            </Grid>
          </Banner>

          <Container maxWidth="md">
            <h1></h1>
            <Grid
              container
              spacing={6}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                justifyContent="center"
                alignContent="center"
              >
                <h2 className="center secondary-light">
                  <CenterFocusStrongIcon style={{ fontSize: 60 }} />
                  <br />
                  Professionalism
                </h2>
                <h3 className="center">
                  Professionalism is our conduct, behavior and attitude in work
                  and business activities with our employees, partners, and
                  customers.
                </h3>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                justifyContent="center"
                alignContent="center"
              >
                <h2 className="center secondary-light">
                  <LoyaltyIcon style={{ fontSize: 60 }} />
                  <br />
                  Commitment
                </h2>
                <h3 className="center">
                  Commitment is the feeling of responsibility that BSG has
                  towards the mission and goals for our customers, partners and
                  employees.
                </h3>
              </Grid>
            </Grid>
            <h1></h1>
          </Container>
        </div>
      </Fade>

      <Fade in={triggerContact} timeout={4000}>
        <div ref={myRefContact}>
          {" "}
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
                <h1>How may we help you?</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  We can typically provide the initial draft solution proposal
                  <span className="secondary-light">
                    within 3 business days
                  </span>{" "}
                  after the initial information gathering meeting.
                </h2>
                <h2>
                  Depending on technology and application domain, sometimes we
                  can demo a Proof-of-Concept prototype{" "}
                  <span className="secondary-light">within a week</span>.
                </h2>
                <h2>
                  Please provide a little info about your needs, we are ready to
                  help.
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>
      <div className="center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
