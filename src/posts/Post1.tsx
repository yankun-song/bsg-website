import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../context/user-context";
import { useTheme } from "@mui/material/styles";
import "./style.scss";
import { Button } from "@mui/material";
import Post from "../components/post/Post";
import DemoCard from "../components/card/demo-card";

export default function Post1() {
  const { t, i18n } = useTranslation("content");

  const { context, forceUpdate } = useContext(UserContext);
  const theme = useTheme();

  return (
    <div className="navHeader">
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
      </Post>
    </div>
  );
}
