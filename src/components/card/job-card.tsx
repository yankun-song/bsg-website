import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./style.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import {
  Avatar,
  Box,
  CardHeader,
  Chip,
  Divider,
  Hidden,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";

import { styles } from "../../theme/Theme";
import { DJob, DJobApplication } from "../../model";
import { UserContext } from "../../context/user-context";
import API from "@aws-amplify/api";
import QRCode from "../qrcode";

//const JobCard = (props: React.PropsWithChildren<DJob>) => {
const JobCard = (props: any) => {
  const { context, contextUpdate, forceUpdate } = useContext(UserContext);

  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  const job = props.job as DJob;
  const action = props.action as string;

  const [application, setApplication] = useState<DJobApplication>({
    firstName: context.user.linkedInFirstname,
    lastName: context.user.linkedInLastname,
    email: context.user.linkedInEmail,
    jobId: job.id,
  });

  let [applicationResponse, setApplicationResponse] = useState<any>({
    status: "",
  });

  const applyJob = () => {
    const api = "job-application";
    const path = "";
    const myInit = {
      headers: {
        "Cache-Control": "No-Cache",
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
      body: {
        data: application,
      },
    };
    //let data = await API.post(api, path, myInit);
    API.post(api, path, myInit).then((data) => {
      setApplicationResponse(data);
      setApplication({});
    });
  };

  const oauthLinkedIn = () => {
    let linkedInState = context.setLinkedInState({
      timestamp: new Date().getTime(),
      redirectLink: {
        external: false,
        uri: `/jobs/${job.id}/apply`,
        //external: true,
        //uri: "https://my.bostonsoftwaregroup.com",
      },
    });

    let oauthLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77lih5m97nz8kj&redirect_uri=${context.urlRoot}/sign-in&state=${linkedInState}&scope=r_liteprofile%20r_emailaddress`;

    window.location.href = oauthLink;
  };

  useEffect(() => {
    if (context.user.authorized && action == "apply") {
      applyJob();
    }
  }, []);

  return (
    <Card className="job-card" raised>
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Box>
          <QRCode text={`${context.urlRoot}/jobs/${job.id}`}></QRCode>
        </Box>
        <Box>
          <Chip
            label={job.id}
            size="small"
            onClick={() => {
              history.push(`/jobs/${job.id}`);
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          alignContent: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Hidden mdDown>
            <h1 className="center secondary-light">{job.title}</h1>
          </Hidden>
          <Hidden mdUp>
            <h2 className="center secondary-light">{job.title}</h2>
          </Hidden>

          {applicationResponse.status! == "ok" ? (
            <h3 className="center info-dark">
              <ThumbUpIcon /> Your application has been submited.
            </h3>
          ) : (
            ""
          )}
        </Box>
      </Box>

      <Box
        flexGrow={1}
        sx={{
          width: "100%",
          justifyContent: "flex-start",
          alignContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {job.employer ? (
          <div>
            <h2 className="secondary-light">Hired By</h2>
            <h3>
              <li>{job.employer}</li>
            </h3>
          </div>
        ) : (
          ""
        )}
        {job.type ? (
          <div>
            <h2 className="secondary-light">Job Type</h2>
            <h3>
              <li>{job.type}</li>
            </h3>
          </div>
        ) : (
          ""
        )}
        {job.level ? (
          <div>
            <h2 className="secondary-light">Job Level</h2>
            <h3>
              <li>{job.level}</li>
            </h3>
          </div>
        ) : (
          ""
        )}
        {job.summary ? (
          <div>
            <h2 className="secondary-light">Summary</h2>
            <h3>
              {job.summary?.map((item, index) => (
                <li key={`summary-${index}`}>{item}</li>
              ))}
            </h3>
          </div>
        ) : (
          ""
        )}
        {job.duty ? (
          <div>
            <h2 className="secondary-light">Duties and Responsibilities</h2>
            <h3>
              {job.duty?.map((item, index) => (
                <li key={`description-${index}`}>{item}</li>
              ))}
            </h3>
          </div>
        ) : (
          ""
        )}
        {job.qualification ? (
          <div>
            <h2 className="secondary-light">Qualifications</h2>
            <h3>
              {job.qualification?.map((item, index) => (
                <li key={`qualification-${index}`}>{item}</li>
              ))}
            </h3>
          </div>
        ) : (
          ""
        )}
        {job.niceToHave ? (
          <div>
            <h2 className="secondary-light">Nice to Have</h2>
            <h3>
              {job.niceToHave?.map((item, index) => (
                <li key={`nicetohave-${index}`}>{item}</li>
              ))}
            </h3>
          </div>
        ) : (
          ""
        )}
        {job.benefit ? (
          <div>
            <h2 className="secondary-light">What We Offer</h2>
            <h3>
              {job.benefit?.map((item, index) => (
                <li key={`benefit-${index}`}>{item}</li>
              ))}
            </h3>
          </div>
        ) : (
          ""
        )}
        {job.pay ? (
          <div>
            <h2 className="secondary-light">Salary/Compensation</h2>
            <h3>
              <li>{job.pay ? job.pay : "Depend on experience"}</li>
            </h3>
          </div>
        ) : (
          ""
        )}
        {job.sponsorship ? (
          <div>
            <h2 className="secondary-light">Sponsorship</h2>
            <h3>
              <li>{job.sponsorship}</li>
            </h3>
          </div>
        ) : (
          ""
        )}
        <h3>{props.children}</h3>
        <h1>
          <br />
        </h1>
      </Box>
      <Box
        flexGrow={1}
        sx={{ width: "100%", justifyContent: "center", alignContent: "center" }}
      >
        {context.user.authorized ? (
          applicationResponse.status! != "ok" ? (
            <Button variant="contained" color="secondary" onClick={applyJob}>
              <LinkedInIcon />
              Apply
            </Button>
          ) : (
            <h3 className="center info-dark">
              <ThumbUpIcon /> Your application has been submited.
            </h3>
          )
        ) : (
          <Button variant="contained" color="secondary" onClick={oauthLinkedIn}>
            <LinkedInIcon />
            Apply with your LinkedIn
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default JobCard;
