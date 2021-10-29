import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";
import Amplify, { Auth, API } from "aws-amplify";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Collapse,
  Container,
  Fab,
  Fade,
  Grid,
  IconButton,
  Paper,
  //useScrollTrigger,
  Zoom,
} from "@mui/material";
import ThemeCard from "../../components/card/theme-card";
import "../../custom.d.ts";
import "./style.scss";
import Link from "@mui/material/Link";
import IconCard from "../../components/card/icon-card";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import Banner from "../../components/banner/banner";
import YouTubeCard from "../../components/card/youtube-card";
import TestimonialCard from "../../components/card/testimonial-card";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import CountCard from "../../components/card/count-card";
import useScrollTrigger from "../../hooks/scroll-trigger";
import PersonCard from "../../components/card/person-card";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ProgramCard from "../../components/card/program-card";
import { DProgram } from "../../model";
import ScrollCard from "../../components/card/scroll-card";
import School from "@mui/icons-material/School";
import BSGModal from "../../components/modal/bsg-modal";
import StarIcon from "@mui/icons-material/Star";
import RoomIcon from "@mui/icons-material/Room";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import PublishIcon from "@mui/icons-material/Publish";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import LaunchIcon from "@mui/icons-material/Launch";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import LockIcon from "@mui/icons-material/Lock";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import VIPCard from "../../components/card/vip-card";
import { ContextService } from "../../context/context-service";

const CareerCoaching = (props: any) => {
  const { t, i18n } = useTranslation("content");
  const context = useContext(UserContext);

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  const [expandedJulian, setExpandedJulian] = React.useState(false);
  const [expandedYujie, setExpandedYujie] = React.useState(false);

  const myRef0 = useRef<HTMLDivElement>(null);
  const myRef1 = useRef<HTMLDivElement>(null);
  const myRef2 = useRef<HTMLDivElement>(null);
  const myRefSignup = useRef<HTMLDivElement>(null);
  const myRef4 = useRef<HTMLDivElement>(null);
  const myRef5 = useRef<HTMLDivElement>(null);
  const myRefPanel = useRef<HTMLDivElement>(null);
  const myRefFAQ = useRef<HTMLDivElement>(null);
  const myRefSchool = useRef<HTMLDivElement>(null);
  const myRefCompany = useRef<HTMLDivElement>(null);

  const getTrigger = useScrollTrigger();

  const [trigger0, setTrigger0] = useState(getTrigger(myRef0.current).trigger);
  const [trigger1, setTrigger1] = useState(getTrigger(myRef1.current).trigger);
  const [trigger2, setTrigger2] = useState(getTrigger(myRef2.current).trigger);
  const [triggerSignup, setTriggerSignup] = useState(
    getTrigger(myRefSignup.current).trigger
  );
  const [trigger4, setTrigger4] = useState(getTrigger(myRef4.current).trigger);
  const [trigger5, setTrigger5] = useState(getTrigger(myRef5.current).trigger);

  const [triggerPanel, setTriggerPanel] = useState(
    getTrigger(myRefPanel.current).trigger
  );
  const [triggerFAQ, setTriggerFAQ] = useState(
    getTrigger(myRefFAQ.current).trigger
  );
  const [triggerSchool, setTriggerSchool] = useState(
    getTrigger(myRefSchool.current).trigger
  );
  const [triggerCompany, setTriggerCompany] = useState(
    getTrigger(myRefCompany.current).trigger
  );

  const [newsModal, setNewsModal] = React.useState(false);
  const [guestModal, setGuestModal] = React.useState(false);

  const handleNewsModalOpen = () => {
    setNewsModal(true);
  };

  const handleNewsModalClose = () => {
    setNewsModal(false);
  };

  const handleGuestModalOpen = () => {
    setGuestModal(true);
  };

  const handleGuestModalClose = () => {
    setGuestModal(false);
  };
  const [program, setProgram] = useState<DProgram>({});

  async function callAPI() {
    //const apiName = "users";
    const apiName = "program-active";
    const path = "";
    const myInit = {
      headers: {
        //"Cache-Control": "No-Cache",
        "Cache-Control": ContextService.CACHE_MAX_AGE,
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
    };
    let response = await API.get(apiName, path, myInit);
    //console.log(JSON.stringify(response));
    setProgram(response as DProgram);
  }

  useEffect(() => {
    document.title = "BSG:Career Coaching 职业发展培训计划";

    window.onscroll = () => {
      setTrigger0(getTrigger(myRef0.current).trigger);
      setTrigger1(getTrigger(myRef1.current).trigger);
      setTrigger2(getTrigger(myRef2.current).trigger);
      setTriggerSignup(getTrigger(myRefSignup.current).trigger);
      setTrigger4(getTrigger(myRef4.current).trigger);
      setTrigger5(getTrigger(myRef5.current).trigger);
      setTriggerPanel(getTrigger(myRefPanel.current).trigger);
      setTriggerFAQ(getTrigger(myRefFAQ.current).trigger);
      setTriggerSchool(getTrigger(myRefSchool.current).trigger);
      setTriggerCompany(getTrigger(myRefCompany.current).trigger);
    };

    callAPI();
  }, [
    myRef0,
    myRef1,
    myRef2,
    myRefSignup,
    myRef4,
    myRef5,
    myRefPanel,
    myRefFAQ,
    myRefSchool,
    myRefCompany,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div id="signup">
        <Fade
          in={!triggerSignup}
          timeout={4000}
          //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
        >
          <Fab
            variant="extended"
            color="secondary"
            size="large"
            aria-label="Sign Up"
            style={{ margin: 0 }}
            onClick={() => {
              myRefSignup.current?.scrollIntoView();
            }}
          >
            <TouchAppRoundedIcon style={{ fontSize: 30 }} />
            <h3>报名</h3>
          </Fab>
        </Fade>
      </div>
      <ThemeCard
        backgroundImg="https://my-bsg-asset.s3.amazonaws.com/image/theme_madrid4.jpg"
        title="BSG Career Coaching 职业发展培训计划"
        description=""
        caption="Madrid, Spain"
        minHeight={800}
      >
        <Container maxWidth="lg">
          {" "}
          <h2 className="primary-light center">Since 2017</h2>
          <Grid container spacing={6} direction="row" justifyContent="center">
            <Grid container item xs={12} sm={6} lg={3} justifyContent="center">
              <CountCard
                title="行业嘉宾"
                number={125}
                description="邀请的行业嘉宾参加到培训计划直接分享经验和推进工作机会"
              />
            </Grid>
            <Grid container item xs={12} sm={6} lg={3} justifyContent="center">
              <CountCard
                title="专题讲座"
                number={32}
                description="定期举办公开和内部职业发展讲座探讨职场具体问题和经验分享"
              />
            </Grid>
            <Grid container item xs={12} sm={6} lg={3} justifyContent="center">
              <CountCard
                title="入职机会"
                number={86}
                unit="%"
                description="学员获得入职/升职机会来自多方位的合作和努力"
              />
            </Grid>
            <Grid container item xs={12} sm={6} lg={3} justifyContent="center">
              <CountCard
                title="受益人群"
                number={1237}
                description="我们一如既往的以专业的经验和专注的支持帮助大家一起发展"
              />
            </Grid>
          </Grid>
        </Container>
        <h1>
          <br />
        </h1>
        <Container maxWidth="sm">
          <Grid container spacing={6} direction="row" justifyContent="center">
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => {
                  myRefPanel.current?.scrollIntoView();
                }}
              >
                <EventAvailableIcon /> 本期训练营: {program.date}
              </Button>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <a href="https://my.bostonsoftwaregroup.com" target="_blank">
                <Button variant="contained" size="small" color="secondary">
                  <LockIcon /> myBSG 学员登陆入口
                </Button>
              </a>
            </Grid>
          </Grid>
        </Container>
      </ThemeCard>

      <div>
        <Banner>
          <Grid
            container
            direction="row"
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
              <h1>学员最新动态</h1>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h2>学员和导师的长期共同努力结出累累硕果。</h2>
              <h2>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  onClick={handleNewsModalOpen}
                >
                  <LaunchIcon /> view all ...
                </Button>
                <BSGModal
                  title="BSG学员动态"
                  open={newsModal}
                  onClose={handleNewsModalClose}
                >
                  {program.news?.map((news, index) => (
                    <h3 key={`news-${index}`} className="primary-dark">
                      <StarIcon color="secondary" fontSize="large" /> {news}
                      <br />
                    </h3>
                  ))}
                </BSGModal>
              </h2>
            </Grid>
          </Grid>
        </Banner>
        <ScrollCard
          title=""
          description=""
          minHeight={60}
          scrollDirection="horizontal"
          scrollTimer={60}
          messages={program?.companies?.map((company) => {
            return <img src={company.logo} style={{ height: 40, margin: 0 }} />;
          })}
        ></ScrollCard>
        <ScrollCard
          title=""
          description=""
          minHeight={160}
          scrollDirection="vertical"
          scrollTimer={150}
          icon={<StarIcon />}
          messages={program?.news}
        ></ScrollCard>
      </div>

      <Fade
        in={trigger0}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRef0}>
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
                <h1>Welcome 欢迎！</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  专业精神（Professionalism）和
                  专注投入（Commitment）是我们信奉的职场宗旨。希望我们的
                  专业团队多年的职场经验带给你的是职场发展的效率和收获。
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="section-dark">
        <Container maxWidth="lg">
          <Grid container spacing={6} direction="row" justifyContent="center">
            <Grid
              container
              item
              xs={12}
              sm={10}
              md={6}
              lg={6}
              justifyContent="center"
              alignContent="stretch"
            >
              <VIPCard
                fname="Julian"
                lname="Zhu"
                picture="https://my-bsg-asset.s3.amazonaws.com/people/julian_zhu.png"
                title="BSG 职业导师"
                subtitle=""
                description=""
                onClick={() => {
                  setExpandedJulian(!expandedJulian);
                }}
                onClickText="Read more ..."
              >
                大家好！我是Boston Software Group 创始人Julian。
                90年代来到波士顿，经历留学，找工作，H1B
                申请，公司升职，跳槽，创业等很多人正在经历或将要经历的职场阶段。近年来投身到自己喜欢的咨询行业
                。。。
                <BSGModal
                  title="About Julian"
                  open={expandedJulian}
                  onClose={() => {
                    setExpandedJulian(!expandedJulian);
                  }}
                >
                  <h2 className="secondary-light">欢迎 Welcome!</h2>

                  <h3>大家好！我是Boston Software Group Inc 创始人Julian。</h3>
                  <h3>
                    1996年来到波士顿，经历留学，找工作，H1B
                    申请，公司升职，跳槽，创业等很多人正在经历或将要经历的职场阶段。
                  </h3>
                  <h3>
                    近年来投身到自己喜欢的咨询行业。目前服务于不同大小和类型的公司和行业，包括零售、电商、生物技术、医疗、金融、保险、政府、能源、国际商业房地产等行业。
                    创立和发展Boston Software Group 的目标主要在下面三个层面：
                    <ul>
                      <li>
                        个人层面：为自己创造个人发展空间（做自己喜欢的咨询工作）
                      </li>
                      <li>
                        公司层面：创造一个咨询公司在北美及其他国家的市场份额
                      </li>
                      <li>社区层面：创造一个良性的社区职场合作</li>
                    </ul>
                  </h3>
                  <h2 className="secondary-light">Contact Julian</h2>
                  <h3>WeChat: julian6866</h3>
                  <h3>Mobile/SMS: +1 617 TODO BSG</h3>
                  <h3>WhatsApp: +1 617 863 6274 </h3>
                </BSGModal>
              </VIPCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={10}
              md={6}
              lg={6}
              justifyContent="center"
              alignContent="stretch"
            >
              <VIPCard
                fname="Yujie"
                lname="Zong"
                picture="https://my-bsg-asset.s3.amazonaws.com/people/yujie_zong.jpg"
                title="BSG 职业导师"
                subtitle=""
                description=""
                onClick={() => {
                  setExpandedYujie(!expandedYujie);
                }}
                onClickText="Read more ..."
              >
                大家好，我是宗宇杰，担任BSG Academy培训主管。2008 –
                2018，来美十年（三年学习+七年工作），感触良多。进入职场后我先后服务于Staples（美国最大办公用品零售商）和CVS（美国最大医疗健康服务和药品零售商），跟过不同风格的领导。。。
                <BSGModal
                  title="About Yujie"
                  open={expandedYujie}
                  onClose={() => {
                    setExpandedYujie(!expandedYujie);
                  }}
                >
                  <h2 className="secondary-light">欢迎 Welcome!</h2>
                  <h3>
                    大家好，我是宗宇杰，担任BSG
                    Academy培训主管。自2008年以来，来美十多年（三年学习+九年工作），感触良多。
                  </h3>
                  <h3>
                    进入职场后我先后服务于Staples（美国最大办公用品零售商）和CVS（美国最大医疗健康服务和药品零售商），跟过不同风格的领导。无论领导是谁，除了做好本职工作以外，我都经常跟他们保持良好的沟通：了解他的目标、需求，将自己个人的发展目标跟领导的目标联系在一起、主动帮他承担团队工作。也许是因为这种积极主动的态度和较强的工作能力，在短短几年内我完成了分析师初级→中级→高级→经理→高级经理的五级跳。在这家有二十多万员工、五百强（Fortune
                    500）排名第七的龙头企业，我是该级别最年轻的经理人之一：
                    <ul>
                      <li>
                        积极主动的作风——在我以临时工身份进入Staples的时候，分析部门才刚刚组建，百废待兴。我迅速接手部门手头的业务，一边学习一边从中发现问题并及时修正，大大提高了团队的工作效率。部门领导看到了我的积极主动和发展潜力，几个月内迅速把我转正并升职。
                      </li>

                      <li>
                        换位思考和寻求合作的心态——除了做好本职工作外，我利用额外的时间研究的本部门的业务情况并从领导角度出发提出合理建议，帮助团队短时间内业务量扩大了一倍。同时我积极的将这个新理念传递各合作部门，争取最广泛的支持。在这中间领导看到了我独挡一面的工作能力并很快将我提拔为高级分析师。
                      </li>

                      <li>
                        快速学习并分享的能力——在学校里我们学习的更多是一种思维能力，进入职场要不断的利用这种能力吸收新东西。在我工作的每一年几乎都能学到新知识和新技能，我不仅可以快速学会并掌握它们，而且能够将学习成果分享给团队里的成员，让好的技术和方法迅速在部门里推广开来。对于新加入的同事我也能适时开展各种培训，让他们尽快进入工作状态。在这里领导看到了我的领导潜质和带队伍能力，从而进一步考察我并将我晋升为经理。
                      </li>

                      <li>
                        从不拒绝新的机会——在CVS的前三年，团队处于快速发展期，需要支持不同的业务部门和新的挑战。由于我各方面能力强，领导安排我在一个“冲锋陷阵”的位置——每当合作新部门对接新业务时都由我来挑大梁，三年下来我是全部门几十人里唯一个在五项核心业务里接触过四项的人。于是我顺理成章的成为团队里重点培养对象。在这段时间里我由分析师提升为经理，进而晋升为高级经理，独立带队负责公司一块重要线上业务的数据分析。
                      </li>
                    </ul>
                  </h3>
                  <h3>
                    我们大部分人的思维模式是“获取者”和“互利者”，很少人愿意主动做“付出者”，而在职场中往往“付出者”会取得成功。BSG
                    Academy希望通过平台的优势帮助到广大职场年轻人，系统的输出正确价值观、工作态度、挖掘个人潜力、以及传授可复制的成功模式，在职场中磨砺自己，为今后的发展奠定坚实基础。
                  </h3>{" "}
                  <h2 className="secondary-light">Contact Yujie</h2>
                  <h3>WeChat: ZYJ37526132</h3>
                </BSGModal>
              </VIPCard>
            </Grid>
          </Grid>
        </Container>
      </div>

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
                <h1>培训目标 BSG</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  职业培训计划通过专业的评估和规划，来帮助学员最有效的提升职场发展能力，发现、挖掘并抓住机会，最快实现求职/升职/跳槽的职业发展目标。
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="section-dark">
        <Container maxWidth="lg">
          <Grid container spacing={6} direction="row" justifyContent="center">
            <Grid container item xs={12} sm={6} lg={4} justifyContent="center">
              <IconCard
                icon={
                  <PersonPinCircleIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="分析定位"
                description=""
              >
                <h1 className="center secondary-light">
                  自我评估
                  <br /> 职业定位
                  <br /> 发展规划
                </h1>
              </IconCard>
            </Grid>
            <Grid container item xs={12} sm={6} lg={4} justifyContent="center">
              <IconCard
                icon={
                  <PublishIcon color="secondary" style={{ fontSize: 64 }} />
                }
                title="技巧提升"
                description=""
              >
                <h1 className="center secondary-light">
                  自我包装
                  <br /> 面试技巧
                  <br /> 薪资谈判
                </h1>
              </IconCard>
            </Grid>
            <Grid container item xs={12} sm={6} lg={4} justifyContent="center">
              <IconCard
                icon={
                  <EmojiFoodBeverageIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="资源扩展"
                description=""
              >
                <h1 className="center secondary-light">
                  人脉扩展
                  <br />
                  内推机会
                  <br />
                  自我提升
                </h1>
              </IconCard>
            </Grid>
          </Grid>
        </Container>
      </div>

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

      <div className="section-dark">
        <Container maxWidth="lg">
          <Grid container spacing={6} direction="row" justifyContent="center">
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <FormatListBulletedIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="职业评估报告"
                description=""
              >
                <h3>
                  分析个人优势和劣势
                  分析职业市场并针对学员背景和能力制订发展计划和目标
                  为每名学员撰写个人定制化的职业评估报告
                  由导师根据每名学员的需求亲自撰写，内容包括： 职业定位和规划
                  简历精修意见和模板 面试准备和练习方法 薪资谈判技巧
                  职场关系处理与沟通技巧 与老板谈升职和加薪
                </h3>
              </IconCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <WhatsAppIcon color="secondary" style={{ fontSize: 64 }} />
                }
                title="模拟面试及指导"
                description=""
              >
                <h3>
                  <li>与导师进行职场范式的mock interview</li>
                  <li>定期为学员举办内部职业训练营（单日课）</li>
                  <li>Skills Work Group训练机会</li>
                  利用线上渠道与导师进行1对1 使用市场上招聘的真实职位
                  完全模拟Hiring Manager面试的流程和规范
                  针对学员问题给出反馈意见
                </h3>
              </IconCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <ContactPhoneIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="专属内推机会"
                description=""
              >
                <h3>
                  独家工作机会仅开放给内部学员，渠道来源包括： BSG客户项目
                  导师/嘉宾所在公司 BSG合作猎头招聘
                </h3>
              </IconCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={<RoomIcon color="secondary" style={{ fontSize: 64 }} />}
                title="小班个性化集训"
                description=""
              >
                <h3>
                  <li>与导师进行1对1单人辅导 优先获得BSG职场人脉资源</li>
                  <li>优先获得导师/嘉宾提供的内推机会 </li>
                  <li>新增myBSG内部信息支持平台</li>
                  全天强化集中训练，最一线职场培训内容 小班教学，规模仅限10人
                  邀请各行业前辈进行主题演讲/经验分享
                  订制化的解决方案训练营每期仅接收最多10名新学员。本培训计划参与学员可无限次参加将来的训练营。
                </h3>
              </IconCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <CardMembershipIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="BSG培训认证证书"
                description=""
              >
                <h3>
                  每期职业训练营学员获得BSG颁发的培训认证证书。
                  波士顿地区多家大型企业中高层领导认可背书
                </h3>
              </IconCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <GroupAddOutlinedIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="BSG 嘉宾团"
                description=""
              >
                <h3>
                  每期职业训练营请到若干名职场资深管理层专家来分享和教授职场发展经验。并为后继的发展提供更多潜在机会。
                </h3>
              </IconCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <>
                    <img
                      src="https://my-bsg-asset.s3.amazonaws.com/company/drive.png"
                      style={{ height: 36 }}
                    />{" "}
                    <img
                      src="https://my-bsg-asset.s3.amazonaws.com/company/youtube.png"
                      style={{ width: 36 }}
                    />
                  </>
                }
                title="BSG Training Materials"
                description=""
              >
                <h3>
                  你可以访问之前的培训材料以及本培训计划将来增加的包括Google
                  Drive/视频等相关培训材料。
                </h3>
              </IconCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <img
                    src="https://my-bsg-asset.s3.amazonaws.com/company/bsg.png"
                    style={{ width: 64 }}
                  />
                }
                title="myBSG"
                description=""
                linkUrl="https://my.bostonsoftwaregroup.com"
                linkText="Go myBSG"
              >
                <h3>myBSG Invitation</h3>
              </IconCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <>
                    <img
                      src="https://my-bsg-asset.s3.amazonaws.com/company/slack.png"
                      style={{ width: 36 }}
                    />
                    <img
                      src="https://my-bsg-asset.s3.amazonaws.com/company/zoom.png"
                      style={{ width: 36 }}
                    />
                  </>
                }
                title="BSG Slack/Zoom"
                description=""
              >
                <h3>
                  Slack和Zoom是美国公司使用的主流沟通工具之一。加入我们的培训计划，你将会被邀请加入BSG
                  Slack
                  Channel，并有机会熟悉和使用该工具的机会，并以此作为熟悉美国企业文化的一部分。
                </h3>
              </IconCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <img
                    src="https://my-bsg-asset.s3.amazonaws.com/company/wechat.png"
                    style={{ width: 64 }}
                  />
                }
                title="BSG学员校友微信群"
                description=""
              >
                <h3>
                  你会被邀请加入我们的学员校友微信群，所有的学员都是我们可以快速建立职场人脉网络的一部分，并可以接受学员分享的各类工作和内推机会。
                  BSG学员定期的活动也会在微信群发布和交流。
                </h3>
              </IconCard>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Fade
        in={triggerPanel}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRefPanel}>
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
                <h1>Keynote/Panel Guests 本期嘉宾团</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>分享最直接有效的职场经验 我们宝贵的职场人脉资源。</h2>
                <h2>
                  我们的培训会帮助学员学习拓展人脉的合适有效的做法，同时培训导师们会根据学员自身的情况和发展阶段来针对性的促成一些合适的内推工作机会。
                </h2>
                <h2 className="secondary-light">
                  每期培训嘉宾阵容会根据学员背景/嘉宾时间适当调整，可能网页不能及时更新。
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>
      <div className="section-dark">
        <Container maxWidth="lg">
          <Grid container spacing={6} direction="row" justifyContent="center">
            {program.panels?.map((person) => (
              <Grid
                container
                item
                xs={12}
                sm={6}
                lg={6}
                justifyContent="center"
                alignContent="stretch"
              >
                <PersonCard
                  fname={person.fname as string}
                  lname={person.lname as string}
                  picture={person.picture as string}
                  title={person.title as string}
                  subtitle={person.subtitle as string}
                  description={person.description as string}
                >
                  <span>{person.description as string}</span>
                </PersonCard>
              </Grid>
            ))}

            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              <h2 className="center">
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  onClick={handleGuestModalOpen}
                >
                  <LaunchIcon />
                  查看历届嘉宾团 ...
                </Button>
                <BSGModal
                  title="Keynote/Panel Guests 历届嘉宾团"
                  open={guestModal}
                  onClose={handleGuestModalClose}
                >
                  <Grid
                    container
                    spacing={6}
                    direction="row"
                    justifyContent="center"
                  >
                    {program.guests?.map((person) => (
                      <Grid
                        container
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        justifyContent="center"
                        alignContent="stretch"
                      >
                        <PersonCard
                          fname={person.fname as string}
                          lname={person.lname as string}
                          picture={person.picture as string}
                          title={person.title as string}
                          subtitle={person.subtitle as string}
                          description={person.description as string}
                        >
                          <span>{person.description as string}</span>
                        </PersonCard>
                      </Grid>
                    ))}
                  </Grid>
                </BSGModal>
              </h2>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Fade
        in={triggerSchool}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRefSchool}>
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
                <h1>学员来源</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  我们的学员遍布北美各州，正在积极准备进入职场或已经进入职场，也包括有一定职场经验的人员。
                  大家的目标一致，希望在职场获得更大的发展机会，包括新的工作机会，跳槽，提升等。
                  <p>
                    我们75%的学员来自波士顿及美国各大学的应届生或职场新人。
                    <br />
                    20%的学员是已经有了3～5年左右工作经验处于职场上升期的职场人。
                    <br />
                    5%的学员是工作了7年以上的处于职场发展瓶颈期或寻求职业转型的资深职场人。
                  </p>
                  <p>
                    逐渐扩大的学员圈子以及大家的积极回馈为新学员快速扩展职场人脉和增加内推机会。
                  </p>
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="primary-light">
        <Container maxWidth="lg">
          <Grid container direction="row" justifyContent="center">
            {program.schools?.map((school, index) => (
              <div key={`school-${index}`}>
                <img
                  src={school.logo}
                  style={{ height: 50, padding: 10 }}
                ></img>
              </div>
            ))}
          </Grid>
        </Container>
      </div>

      <Fade
        in={triggerCompany}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRefCompany}>
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
                <h1>学员去向</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  据统计，33%的职位招聘机会来自员工的内推。
                  <br />
                  26%的机会来自猎头公司和咨询公司。
                  <br />
                  除了自身不断的努力提升，良性的职场人脉关系至关重要。
                </h2>
                <h2>
                  我们的学员目前都就职于北美和亚洲的各大公司担任或正在成长成团队骨干。很多已经在management或lead职位。
                  这些老学员积极的回馈我们的学员圈子，提供各类内推机会并参与BSG定期举办的交流和讲座。
                </h2>
                <h2>
                  BSG Career Coaching
                  Program的成功和价值和学员的成长和积极回馈分不开。
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="primary-light">
        <Container maxWidth="lg">
          <Grid container direction="row" justifyContent="center">
            {program.companies?.map((company, index) => (
              <div key={`company-${index}`}>
                <img
                  src={company.logo}
                  style={{ height: 50, padding: 10 }}
                ></img>
              </div>
            ))}
          </Grid>
        </Container>
      </div>

      <Fade in={triggerFAQ} timeout={4000}>
        <div ref={myRefFAQ}>
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
                <h1>常见问题</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>新学员常常问到的问题</h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="faq">
        <Container maxWidth="md">
          <div></div>
          {program.faqs?.map((question, index) => (
            <Accordion key={`faq-${index}`}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h2 className="secondary-light">{question.question}</h2>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<h3>${question.answer}</h3>`,
                  }}
                ></div>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </div>

      <Fade
        in={trigger4}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRef4}>
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
                <h1>相关视频说明</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>请参考关于BSG Career Coaching的相关视频说明</h2>
                <h2 className="secondary-light">
                  加入本培训计划的学员将可以access之前的培训录像，包括各位嘉宾的分享视屏以及学员圈组织的讲座和交流分享视屏。
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>
      <div className="section-dark">
        <Container maxWidth="lg">
          <Grid container spacing={6} direction="row" justifyContent="center">
            <Grid
              container
              item
              xs={12}
              sm={10}
              lg={6}
              justifyContent="center"
              alignContent="stretch"
            >
              <YouTubeCard
                video="5CEuLF9aRHQ"
                title="BSG Career Coaching Program Introduction"
                description="BSG Career Coaching Program Introduction"
              />
            </Grid>
            <Grid container item xs={12} sm={10} lg={6} justifyContent="center">
              <YouTubeCard
                video="rdfu2m3PGnc"
                title="myBSG Platform Introduction"
                description="myBSG Platform Introduction"
              />
            </Grid>
            <Grid container item xs={12} sm={10} lg={6} justifyContent="center">
              <YouTubeCard
                video="OqFNRNDGw-8"
                title="AWS 14 Leadership Principles"
                description="AWS 14 Leadership Principles"
              />
            </Grid>
            <Grid container item xs={12} sm={10} lg={6} justifyContent="center">
              <YouTubeCard
                video="r2VANcHMTYE"
                title="培训学员可以获得myBSG平台的使用"
                description="培训学员可以获得myBSG平台的使用"
              />
            </Grid>
            <Grid container item xs={12} sm={10} lg={6} justifyContent="center">
              <YouTubeCard
                video="NhT5yxH4W7g"
                title="内推工作机会的操作流程"
                description="内推工作机会的操作流程"
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      <Fade
        in={trigger5}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRef5}>
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
                <h1>Testimonials 学员评价</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  提供长期的职场发展价值是我们的核心理念
                  请联系我们以前的学员或职场朋友圈了解我们的价值。
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
            spacing={6}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
              alignContent="stretch"
            >
              <TestimonialCard
                image="https://my-bsg-asset.s3.amazonaws.com/company/lending_club.png"
                title="Joyce G."
                subtitle="Data Scientist, California"
                description=""
              >
                <span>
                  “临近毕业前被一家公司因为签证问题撤销了offer，沮丧同时又很幸运地被朋友介绍加入了BSG，感谢Julian和Yujie帮助修改简历，分析我的优缺点，并且进行非常细致的mock
                  interview，从个别语音纠正到如何针对不同面试官回答问题，他们的指导都非常得细致，平时的培训课也会教授如何提高软实力，这让我很快又收获了其他两个offer。之后每次有职场问题或者跳槽拿到offer后，我都会向Julian和Yujie询问建议，他们的回答都很专业耐心，每次和他们的谈话都受益匪浅，并且也感谢课上教授的薪资谈判技巧让我每次都能成功和HR谈提薪，让我在两年内工资翻倍。十分推荐BSG给正在找工作或者在职场中比较迷茫的人。”
                </span>
              </TestimonialCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
              alignContent="stretch"
            >
              <TestimonialCard
                image="https://my-bsg-asset.s3.amazonaws.com/company/google.png"
                title="Eric Z."
                subtitle="Cloud Software Engineer, California"
                description=""
              >
                <span>
                  “非常感谢BSG提供的学习与分享的平台，帮助我顺利完成了从学生到职场人的角色切换。相比于职业技能的培养，BSG更侧重于Career
                  Coaching和Soft Skills。这就好比在安全领域里的Social
                  Engineering，即虽然你的密码在软件层面上无懈可击（职业技能），但是你任然有可能在输入密码的时候被别人在后面偷看从而引起安全问题（软技能），而软技能可能正是打破当前阶段瓶颈的关键。Julian作为咨询领域的OG，和他交流能快速发现自己在当前求职阶段的痛点，让人醍醐灌顶；Yujie虽然主管培训，但是更是面试准备和薪资谈判方面的专家；以及BSG每次邀请的各行各业嘉宾真的能让人开拓视野，从而在更高的维度上审视自己。最后希望自己和更多的朋友能在BSG提供的终生交流分享平台上受益。
                  ”
                </span>
              </TestimonialCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
              alignContent="stretch"
            >
              <TestimonialCard
                image="https://my-bsg-asset.s3.amazonaws.com/company/cvs.png"
                title="Shang Sha"
                subtitle="Sr. Data Analyst, Boston"
                description=""
              >
                <span>
                  “我(2020)二月加入BSG 是因为 有一个心仪的职位面试
                  但是自己之前面试其他公司的结果不太好 对自己越来越没信心
                  也不清楚自己差在哪里 所以通过朋友介绍加入了 BSG
                  加入由于我第二天就有第一轮面试 Julian 老师和
                  YuJie老师都尽量安排自己的休息时间来帮我梳理JD，指出我的不足
                  给我非常多的insights 让我顿时心里有了很多信心
                  知道该如何在面试官面前表现的自己 第二天的面试非常顺利
                  直接拿了下一轮面试 一路面下来我已经拿到offer
                  4月初入职。非常感谢Julian老师和Yujie老师不吝分享的帮助和让我感觉我不是一个人在战斗。”
                </span>
              </TestimonialCard>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <TestimonialCard
                image="https://my-bsg-asset.s3.amazonaws.com/company/microsoft.png"
                title="Jenny Wu"
                subtitle="Sr. Program Manager, Seattle, Washington"
                description=""
              >
                <span>
                  “非常赞赏BSG这样一个开放的平台，分享专家经验，提供各类解决方案，支持个性化的个人职业发展。曾经因为坚持自己的求职目标，求职过程颇具挑战。Julian专业又敬业，给我提出简历修改建议，并提醒我突出自己international
                  project manager
                  的经历;在我拿到offer之际，又及时提醒鼓励我，给我很多支持。Yujie非常高效，无论是求职还是个人职业发展路径都对我很有启发和帮助。希望更多人受益于BSG的平台和培训项目。”
                </span>
              </TestimonialCard>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <TestimonialCard
                title="Winnie C."
                subtitle="Supply Chain Analyst, California"
                description=""
              >
                <span>
                  “透過BSG mock interview，Julian 是根據實際公司和相對應Job
                  description來完成模擬。大部分我準備的問題，都有派上用場。最大的收穫是BSG提供的反饋，那才是真的mock
                  interview
                  的價值所在。要把面試引導成「雙向對話」，而非「你問，我答」精簡扼要的回答问题如何把簡歷套上實際的遇過的困難，變成例子解釋給面試官聽對於以上的反饋，我私下又在跟Julian/Yujie
                  詢問何謂雙向對話的面試，如何引導說故事，以及增強我英文表達的抑揚頓挫。對於結合本身經驗做出例子，我也先模擬過稿，再給Julian
                  聽，之後獲取反饋來達成「精簡扼要回答」的目標。”
                </span>
              </TestimonialCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <TestimonialCard
                image="https://my-bsg-asset.s3.amazonaws.com/company/amazon.png"
                title="Xinxin D."
                subtitle="BI Analyst, Amazon Blink, Boston"
                description=""
              >
                <span>
                  这次培训一共请了8个导师，每个导师专业和侧重点不同，所以给出了针对不同的方面的指导，cover了求职的每一个环节：
                  面试前如何研究心仪的公司，如何准备不同阶段的面试（phone
                  interview, behavior
                  interview)、面试官有哪些常问问题以及如何回答、面试后如何再次提升自己的竞争力或者补救、拿到offer后如何argue工资、如何和公司沟通H1B和绿卡的事情等等；
                  我在接受培训后得了认证证书，并且为我之后如何提升自己提供了个性化的方案；
                  老学员之后可以免费参加之后的活动。这一点很吸引我，因为每次请的嘉宾都不一样，所以多了更多networking的机会。这样的场合和嘉宾互动，感觉更有效。
                  希望以后能有机会找到合适的嘉宾帮我内推工作～
                  一个好朋友在培训结束后找工作期间，依然得到了导师耐心且建设性的帮助，帮助她分析面试官，customize
                  portfolio，最终用一周时间顺利找到工作。希望能像她一样～期待下次培训！
                </span>
              </TestimonialCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <TestimonialCard
                image="https://my-bsg-asset.s3.amazonaws.com/company/glassdoor.png"
                title="Lynn Z."
                subtitle="Data Scientist, Boston"
                description=""
              >
                <span>
                  “BSG职业训练营对我帮助很大，助我成功拿到上市公司的Data
                  scientist
                  offer并谈薪提高了五位数。老师根据我之前失败面试经历，详细分析我优劣势并提出很好的建议。在面试过程中帮我分析如何应对各面试官。在谈薪资过程中详细指导话术策略。非常感谢宇杰老师的细致指导，感谢BSG老师们的辛苦付出，推荐给正在找工作或者想升职加薪的伙伴们。”
                </span>
              </TestimonialCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <TestimonialCard
                image="https://my-bsg-asset.s3.amazonaws.com/company/focuskpi.png"
                title="Fan L."
                subtitle="Digital Intelligence Manager, Sharkninja, Boston"
                description=""
              >
                <span>
                  ”I was a bit skeptical when I first signed up for this Career
                  Development Bootcamp, wondering how much I could get out of it
                  as I was in my professional career for 7 years. It turned out
                  mind-blowing. The bootcamp was very career driven at all
                  levels, you could find it helpful no matter you are
                  job-seeking, job-changing or trying to level up in your own
                  job. All advice are spot-on and practical. Yujie did a very
                  great job identifying different pain points of every
                  attendees, and assisting everyone with customized solutions.
                  For me, the salary negotiation skills I picked up, definitely
                  helped me to get a higher pay for a new job! ”
                </span>
              </TestimonialCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <TestimonialCard
                title="邱媛"
                subtitle="UI/UX Designer，New York City"
                description=""
              >
                <span>
                  “作为一个多媒体设计专业的学生，我在BSG的培训过程中参与到了一些软件开发的项目中，得到了与其他人组成团队一起工作的机会，积累了很多项目经验，对我后来的求职和创业都非常有帮助。
                  我目前是Victoria’s Secret的设计师，也是oFree
                  App的创始人，很快就要开始全职创业了！非常感谢Julian在我的工作，求职以及后来的创业过程中的指导和帮助！”
                </span>
              </TestimonialCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <TestimonialCard
                image="https://my-bsg-asset.s3.amazonaws.com/company/bloomberg.png"
                title="Mubing L."
                subtitle="Software Engineer, Bloomburg LP, New York City"
                description=""
              >
                <span>
                  “刚毕业时与Julian一起在BSG做项目的经历对于我从学生到职场新人的转变起到了至关重要的作用。在Julian的带领下，我有机会体验了实际的软件开发过程，这使我在之后的工作中少了许多慌张，多了许多自信。除此之外，Julian还逐渐培养我的领导能力，打开了我在工作和与人交往方面的眼界，
                  使我受益匪浅。我很幸运可以认识Julian，他带给了我许多工作和生活上的启发，
                  也很开心Julian将把他的成功经验和独到见解分享给更多需要的同学。”
                </span>
              </TestimonialCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <TestimonialCard
                title="Le Deng"
                subtitle="IT Consultant, Boston"
                description=""
              >
                <span>
                  “很高兴看到BSG能够提供面向新人的职业培训，因为自己也有过类似的经历。投简历石沉大海，
                  面试被刷，整个求职的过程充满了曲折和艰辛。回头看看，其实如果能找到一个有效的方法，相信求职能够事半功倍。BSG的培训就是出于这个目标。
                  跟BSG的创始人Julian相识也比较久了，之前也一起共事过。身边很少能找到一个各方面能力都很突出，并且积极关心他人的人。Julian就是如此。不仅在专业领域，人际关系上已经很成功，
                  Julian也非常关心他周围的人。不管你的背景如何，他都会去尝试给予支持和帮助。对于刚进入职场的大家，与其埋头苦干，不如听听过来人的经验，也许对于你会更有启发。”
                </span>
              </TestimonialCard>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justifyContent="center"
            >
              <TestimonialCard
                title="姜巍 (Steve)"
                subtitle="Platform/Software Engineer, Boston"
                description=""
              >
                <span>
                  “很有幸参与了Julian领头的两个项目，受益匪浅。Julian在构架和开发都有独到的见解，而且善于引导和开发新人的潜力，提高我们的团队沟通能力和技术的敏感性。作为一个新毕业生，冲劲往往是不缺的，缺少的是一个合适的引路人，给我们一个方向来突破眼前的局限。我想这正是Julian和BSG所专注和擅长的。”
                </span>
              </TestimonialCard>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Fade
        in={true}
        timeout={4000}
        //timeout={{ appear: 5000, enter: 3000, exit: 1000 }}
      >
        <div ref={myRefSignup}>
          <Banner>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignContent="flex-start"
            >
              <Grid container item xs={12} justifyContent="flex-start">
                <div>
                  <h1>线上报名付款</h1>
                  <h2>价格: $1,000.00 优惠价格: $698</h2>
                  <h2>1份职业报告+1次模拟面试+1v1辅导+无限次训练营课程=$698</h2>
                  <h2>长期价值 持续提升</h2>
                </div>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2></h2>
              </Grid>
            </Grid>
          </Banner>

          <div className="section-dark">
            <Container maxWidth="md">
              <Grid
                container
                spacing={6}
                direction="row"
                justifyContent="center"
              >
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  lg={8}
                  justifyContent="center"
                  alignContent="stretch"
                >
                  <ProgramCard
                    image="https://my-bsg-asset.s3.amazonaws.com/program/career_coaching.jpg"
                    title="BSG Career Coaching Program"
                    subtitle="Provided by BSG"
                    description=""
                    retailPrice={1000}
                    promoPrice={698}
                  >
                    <h2 className="center">线上报名付款 享受优惠价格</h2>
                    <h2 className="center">请使用PayPal安全电子支付方式付款</h2>
                  </ProgramCard>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </Fade>
      <div className="section-dark"></div>
    </div>
  );
};

export default CareerCoaching;
