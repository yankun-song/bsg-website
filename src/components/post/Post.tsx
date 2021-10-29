import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";
import { useTheme } from "@mui/material/styles";
import "./style.scss";
import { Button } from "@mui/material";
import parser, { domToReact } from "html-react-parser";

//import { theme, styles } from "../../theme/Theme";

export interface IPost {
  html: string;
  children?: any;
}

const Post = (props: React.PropsWithChildren<IPost>) => {
  const { t, i18n } = useTranslation("content");

  const context = useContext(UserContext);
  const theme = useTheme();

  const options: any = {
    replace: (domNode: any, children: any) => {
      if (
        domNode?.attribs &&
        domNode.attribs &&
        domNode.attribs["random-tag-key"]
      ) {
        switch (domNode.attribs["random-tag-key"]) {
          case "random-tag-name":
            return <div>Test Tag</div>;
          case "random-tag-name2":
            return <div>Test Tag</div>;
          default:
            return React.createElement(domNode, domNode.attribs, children);
        }
      } else {
        //return React.createElement(domNode, domNode.attribs, children);
      }
    },
  };

  return (
    <>
      {parser(props.html, options)} {props.children}
    </>
  );
};

export default Post;
