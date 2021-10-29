import React, {
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { UserContext, UserContextProvider } from "../../context/user-context";

import useScrollTrigger from "../../hooks/scroll-trigger";
import { Button, Container, Fade, Grid } from "@mui/material";
import ThemeCard from "../../components/card/theme-card";
import "../../custom.d.ts";
import "./style.scss";
import Banner from "../../components/banner/banner";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Card from "@mui/material/Card";
import { API } from "aws-amplify";
import {
  DJob,
  DLinkedInCompositeProfile,
  DLinkedInEmailHandler,
  DLinkedInProfile,
} from "../../model";
import JobCard from "../../components/card/job-card";
import ContactForm from "../../components/form/contact-form";
import { ContextService } from "../../context/context-service";
import { useHistory } from "react-router";
import useDynamicRef from "../../hooks/dynamic-ref";

const Jobs = (props: any) => {
  //const { children, window } = props;
  const { t, i18n } = useTranslation("content");

  const { context, contextUpdate, forceUpdate } = useContext(UserContext);
  const history = useHistory();

  const id = props.match.params.id;
  const action = props.match.params.action;

  const query = new URLSearchParams(props.location.search);

  let [jobs, setJobs] = useState([] as DJob[]);

  //let myRefs = useRef<HTMLDivElement[]>(null);

  const [jobId, setJobId] = useState(id);

  const myRefWe = useRef<HTMLDivElement>(null);

  const [getRef, setRef] = useDynamicRef();

  const getTrigger = useScrollTrigger();

  const [triggerWe, setTriggerWe] = useState(
    getTrigger(myRefWe.current).trigger
  );

  let [refMap, setRefMap] = useState(
    new Map<string, React.RefObject<HTMLDivElement>>()
  );

  //let refMap = useRef<Map<string, React.RefObject<HTMLDivElement>>>(new Map());

  async function getJobs() {
    //const apiName = "users";
    const apiName = "jobs-bsg";
    const path = "";
    const myInit = {
      headers: {
        //"Cache-Control": "No-Cache",
        "Cache-Control": ContextService.CACHE_MAX_AGE,
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
    };
    //let response = await API.get(apiName, path, myInit);
    //setJobs(response as DJob[]);

    API.get(apiName, path, myInit).then((data) => {
      setJobs(data as DJob[]);

      if (jobId != undefined && jobId != "") {
        (
          getRef(jobId) as React.RefObject<HTMLDivElement>
        ).current?.scrollIntoView();
      }
    });
  }

  const oauthLinkedIn = () => {
    let linkedInState = context.setLinkedInState({
      timestamp: new Date().getTime(),
      redirectLink: {
        external: false,
        uri: "/jobs",
        //external: true,
        //uri: "https://my.bostonsoftwaregroup.com",
      },
    });

    let oauthLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77lih5m97nz8kj&redirect_uri=${context.urlRoot}/sign-in&state=${linkedInState}&scope=r_liteprofile%20r_emailaddress`;

    window.location.href = oauthLink;
  };

  useEffect(() => {
    window.onscroll = () => {
      setTriggerWe(getTrigger(myRefWe.current).trigger);
    };

    document.title = "BSG:Jobs";
    window.scrollTo(0, 0);

    getJobs();
  }, []);

  return (
    <div>
      <ThemeCard
        backgroundImg="https://my-bsg-asset.s3.amazonaws.com/image/theme_boston3.jpg"
        opacity={0.9}
        title=""
        description=""
        minHeight={600}
        caption="Financial District/South Station, Boston, MA - USA"
      >
        <Container maxWidth="md">
          <h1 className="center secondary-light">Join Us. It is a Career.</h1>
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
                <h1>Why BSG?</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2 className="secondary-light">
                  Leadership & Career Development
                </h2>
                <h2>
                  With a flat, simple yet efficient corporate structure, we
                  offer you the most promising career development opportunities.
                </h2>
                <h2 className="secondary-light">Diversity</h2>
                <h2>
                  We are an equal opportunity employer and is committed to
                  having a workforce that’s diverse and to providing a work
                  environment that is free of discrimination.
                </h2>
                <h2 className="secondary-light">What We Offer</h2>
                <h2>
                  We offer competitive salary and benefits for our employees
                  including medical & dental coverage, Paid Time Off (PTO), and
                  training program & career development opportunities.
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="primary-light">
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignContent="flex-start"
            spacing={6}
          >
            <Grid
              container
              item
              xs={12}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h1 className="primary-dark">Current Openings</h1>

              {id ? (
                <h3>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      history.push("/jobs");
                    }}
                  >
                    View All Jobs
                  </Button>
                </h3>
              ) : (
                ""
              )}
            </Grid>

            {jobs?.map((job, index) => {
              return job.status == "POSTED" && (!jobId || jobId === job.id) ? (
                <Grid
                  container
                  item
                  xs={12}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <div
                    ref={setRef(jobId) as React.RefObject<HTMLDivElement>}
                  ></div>
                  <JobCard job={job} action={action}></JobCard>
                </Grid>
              ) : (
                ""
              );
            })}
          </Grid>

          <Grid
            container
            item
            xs={12}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <h4 className="primary-dark">
              BSG is committed to providing rewarding and flexible career
              development opportunities and welcomes talents with different
              background and experience.
            </h4>
            <h4 className="primary-dark">
              BSG is an Equal Opportunity Employer.
            </h4>
            <h4 className="primary-dark">
              BSG does not discriminate on the basis of race, religion, color,
              sex, gender identity, sexual orientation, age, non-disqualifying
              physical or mental disability, national origin, veteran status or
              any other basis covered by appropriate law. All employment is
              decided on the basis of qualifications, merit, and business need.
            </h4>
          </Grid>
        </Container>
      </div>

      <div>
        <h1></h1>
        <h1></h1>
      </div>

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
              <h1>Stay Connected</h1>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h2>Please feel free to write us a note and say hi.</h2>
              <h2>
                Let's connect and go from there for immediate and/or future
                opportunities.
              </h2>
            </Grid>
          </Grid>
        </Banner>
      </div>

      <div className="center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Jobs;
