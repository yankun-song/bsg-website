import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Fab,
  Fade,
  Grid,
  IconButton,
  MobileStepper,
  Paper,
  Slide,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import "./style.scss";

const ContentSlider = (props: React.PropsWithChildren<any>) => {
  const { t, i18n } = useTranslation("content");
  const context = useContext(UserContext);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const slideItems = props.items;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="slide-show">
      <div className="slide-show-content">{slideItems[activeStep]}</div>

      {slideItems.length > 1 && (
        <div className="slide-show-bottom">
          <MobileStepper
            variant="dots"
            color="secondary"
            steps={slideItems.length}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={handleNext}
                disabled={
                  activeStep === slideItems.length - 1 ||
                  slideItems.length === 0
                }
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      )}
    </div>
  );
};

export default ContentSlider;
