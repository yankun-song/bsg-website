import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import useScrollTrigger from "../../hooks/scroll-trigger";
import { Box, Chip, Container, Fade, Grid, Stack } from "@mui/material";
import ThemeCard from "../../components/card/theme-card";
import "../../custom.d.ts";
import "./style.scss";
import Banner from "../../components/banner/banner";
import ContactForm from "../../components/form/contact-form";
import { DProject } from "../../model";
import { API } from "aws-amplify";
import ProjectCard from "../../components/card/project-card";
import DoneIcon from "@mui/icons-material/Done";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ContextService } from "../../context/context-service";

export interface IFilter {
  keyword: string;
  selected: boolean;
}

const CaseStudy = (props: any) => {
  //const { children, window } = props;
  const { t, i18n } = useTranslation("content");

  const context = useContext(UserContext);

  let projectCategory = props.match.params.category;

  const query = new URLSearchParams(props.location.search);

  let [projects, setProjects] = useState([] as DProject[]);

  let [filters, setFilters] = useState([] as IFilter[]);

  let [initial, setInitial] = useState(true);
  let [filterAll, setFilterAll] = useState(false);

  const myRefWe = useRef<HTMLDivElement>(null);

  const getTrigger = useScrollTrigger();

  const [triggerWe, setTriggerWe] = useState(
    getTrigger(myRefWe.current).trigger
  );

  async function getProjects() {
    //const apiName = "users";
    const apiName = "case-study-bsg";
    const path = "";
    const myInit = {
      headers: {
        //"Cache-Control": "No-Cache",
        "Cache-Control": ContextService.CACHE_MAX_AGE,
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
    };

    let response = await API.get(apiName, path, myInit);

    //return API.get(apiName, path, myInit);
    //setProjects(response as DProject[]);
    return response as DProject[];
  }

  const selectFilterAll = (selectAll: boolean) => {
    setFilters(
      filters.map((filter) => {
        return { ...filter, selected: selectAll };
      })
    );

    setFilterAll(selectAll);
  };

  const updateFilter = (keyword: string) => {
    if (initial) setInitial(false);

    setFilterAll(false);

    setFilters(
      filters.map((filter) => {
        if (filter.keyword.toLocaleLowerCase() == keyword.toLocaleLowerCase()) {
          return { ...filter, selected: !filter.selected };
        } else {
          return filter;
        }
      })
    );
  };

  const matchFilter = (project: DProject) => {
    if (initial) {
      return true;
    }

    // if none is selected, set it to initial state.
    let filter = filters.find((x) => x.selected == true);
    if (filter != undefined) {
    } else {
      setInitial(true);
      return true;
    }

    let matched = false;

    project.category?.forEach((category) => {
      let filter = filters.find(
        (x) =>
          x.selected &&
          x.keyword.toLocaleLowerCase() === category.toLocaleLowerCase()
      );
      if (filter != undefined) {
        matched = true;
      }
    });
    return matched;
  };

  useEffect(() => {
    window.onscroll = () => {
      setTriggerWe(getTrigger(myRefWe.current).trigger);
    };

    document.title = "BSG:Case Study";
    window.scrollTo(0, 0);

    getProjects().then((projects) => {
      setProjects(projects);

      // generate filter list
      let myFilters: IFilter[] = [];
      projects.forEach((project) => {
        project.category?.forEach((category) => {
          let filter = myFilters.find(
            (x) => x.keyword.toLocaleLowerCase() == category.toLocaleLowerCase()
          );
          if (filter == undefined) {
            let selected =
              projectCategory?.toLocaleLowerCase() ==
              category.toLocaleLowerCase();
            myFilters.push({ keyword: category, selected: selected });
          }
        });
      });

      setFilters(myFilters);

      if (projectCategory != undefined) {
        setInitial(false);
      }
    });
  }, []);

  return (
    <div>
      <ThemeCard
        backgroundImg="https://my-bsg-asset.s3.amazonaws.com/image/theme_building.jpg"
        opacity={0.9}
        title=""
        description=""
        caption="Austin, TX - USA"
        minHeight={600}
      >
        <Container maxWidth="md">
          <h1 className="center secondary-light">
            Design. Developing. Delivered.{" "}
          </h1>
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
                <h1 className="primary-light">BSG Experience - Case Study</h1>
              </Grid>

              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  Our experience accelerates ROI & business value realization
                  for your business by leveraging proven technology,
                  architecture design, and implementation.
                </h2>
                <h2>
                  This page is best viewed in{" "}
                  <span className="secondary-light">desktop</span> mode.{" "}
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="primary-dark">
        <Container maxWidth={false} sx={{ width: "100%" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignContent="center"
            spacing={6}
          >
            <Grid
              container
              item
              md={12}
              lg={10}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h1></h1>
              <h3>
                <b>Filter by Tags:</b>
              </h3>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip
                    icon={filterAll ? <HighlightOffIcon /> : <DoneIcon />}
                    label="All"
                    color={filterAll ? "secondary" : "primary"}
                    onClick={() => {
                      selectFilterAll(!filterAll);
                    }}
                  />
                </Grid>
                {filters.map((filter) => {
                  return (
                    <Grid item>
                      <Chip
                        icon={
                          filter.selected ? <HighlightOffIcon /> : <DoneIcon />
                        }
                        label={filter.keyword}
                        color={filter.selected ? "secondary" : "primary"}
                        onClick={() => {
                          updateFilter(filter.keyword);
                        }}
                      />{" "}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            {projects?.map((project, index) => {
              return matchFilter(project) ? (
                <Grid
                  container
                  item
                  md={12}
                  lg={10}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <ProjectCard project={project}></ProjectCard>
                </Grid>
              ) : (
                ""
              );
            })}

            <h1></h1>
          </Grid>
        </Container>
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
              <h1>Contact Us</h1>
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
                Depending on technology and application domain, sometimes we can
                demo a Proof-of-Concept or prototype
                <span className="secondary-light">within a week</span>.
              </h2>
              <h2>
                Are you a potenntial partner or professional or student who is
                interested in working with us?
              </h2>
              <h2>
                Please provide a little info about your needs, we will get back
                to you shortly.
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

export default CaseStudy;
