import React from "react";

import { useTheme } from "@mui/material/styles";
import { styles } from "../../theme/Theme";

import "./style.scss";

import Grid from "@mui/material/Grid";
import { useScrollTrigger, Zoom } from "@mui/material";
import DemoCard from "../../components/card/demo-card";

export const Services = (props: any) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  const theme = useTheme();
  const classes: any = styles(theme);

  return (
    <Zoom in={!trigger} timeout={3000} style={{ transitionDelay: "100ms" }}>
      <div className={classes.containerRoot}>
        <h2>Our Services</h2>

        <Grid container spacing={6} direction="row" justifyContent="center">
          <Grid
            container
            item
            xs={12}
            sm={6}
            lg={3}
            spacing={3}
            justifyContent="center"
          >
            <DemoCard
              image="/image/pic_navigation.gif"
              title="Consulting"
              description="Our professional services"
              route="/amap"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            lg={3}
            spacing={3}
            justifyContent="center"
          >
            <DemoCard
              image="/image/pic_visualization.gif"
              title="Training"
              description="Personlized training tailor to your needs"
              route="/dashboard"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            lg={3}
            spacing={3}
            justifyContent="center"
          >
            <DemoCard
              image="/image/pic_api.gif"
              title="Staffing"
              description="定位数据的API调用接口"
              route="/table/summary"
            />
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={6}
            lg={3}
            spacing={3}
            justifyContent="center"
          >
            <DemoCard
              image="/image/pic_iot.gif"
              title="Sensor 监控与管理"
              description="物联网定位sensor监控与管理"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            lg={3}
            spacing={3}
            justifyContent="center"
          >
            <DemoCard
              image="/image/pic_admin.jpg"
              title="系统设置与管理"
              description="系统的设置与管理"
            />
          </Grid>
        </Grid>
      </div>
    </Zoom>
  );
};
