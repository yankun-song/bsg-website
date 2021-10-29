import {
  Backdrop,
  Box,
  Container,
  Fade,
  IconButton,
  Modal,
  useScrollTrigger,
} from "@mui/material";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./style.scss";

export interface IModal {
  title?: string;
  open?: boolean;
  onClose?: any;
}

const BSGModal = (props: React.PropsWithChildren<any>) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  const { t, i18n } = useTranslation("content");
  const context = useContext(UserContext);

  return (
    <Modal
      open={props.open}
      disableAutoFocus={true}
      className="modal"
      closeAfterTransition
    >
      <Fade in={props.open}>
        <Container maxWidth="lg" sx={{ outline: "none" }}>
          <div className="modal-div">
            <div className="modal-top">
              <Box>
                <IconButton
                  onClick={props.onClose}
                  color="secondary"
                  aria-label="close"
                >
                  <HighlightOffIcon color="warning" fontSize="large" />
                </IconButton>
              </Box>
            </div>
            <div className="modal-title">
              <Box>{props.title}</Box>
            </div>
            <Box flexGrow={1}>
              <div className="modal-content">{props.children}</div>
            </Box>
            <Box alignItems="flex-end">
              <div className="modal-bottom"></div>
            </Box>
          </div>
        </Container>
      </Fade>
    </Modal>
  );
};

export default BSGModal;
