import {
  Container,
  SectionWrapper,
  StartTrial,
  TabSection,
  InfoSection,
  Title,
  GetStartWrapper,
  Promotion,
  TitleParag,
  StartTrialWrapper,
  ButtonForGetStart,
  ImgForWelcome,
  TabTitleWrapper,
  TabTitle,
  TabWrapper,
  TabContentWrapper,
  MainContainer,
  GetStartGmailWrapper,
  SectionEntery,
  TitleDetail,
  TabContent,
  TabContentTitle,
  TabParag,
  LoginText,
  LoginLink,
  TabContent1,
  TabContent2,
  TabContent3,
  TabContent4,
  TabContent5,
  LineIcon,
  WrapperParag,
  CollapseNavigation,
  CollapseParent,
  CollapseItem,
  CollapseTitle,
  CollapseText,
  CollapseContentElement,
} from "./styles";
import TypedDemo from "../../components/tools/Typed/typed";
import RegisterForm from "../../components/tools/registerForm";
import WelcomeIllus2 from "../../components/ DynamicSVG/WelcomeIllus2";
import { useState } from "react";
import ShareTeamIllus from "../../components/ DynamicSVG/shareTeamIllus";
import { WelcomeTexts } from "../../constants/welcomeTexts";
import Navbar from "../../components/navbar";
import Footer from "../../components/layout/footer";
import { CollapseTexts, imageSources } from "./text";

function WelcomePage() {
  const [displaySign, setDisplaySign] = useState(false);
  const [activeCollapse, setActiveCollapse] = useState<number | null>(0);

  const handleCollapseClick = (index: number) => {
    setActiveCollapse(activeCollapse === index ? null : index);
  };

  return (
    <Container>
      <Navbar />
      <MainContainer>
        <SectionWrapper>
          <StartTrial>
            <SectionEntery>
              <StartTrialWrapper>
                <SectionEntery>
                  <Title>Simplify project management, empower your team</Title>
                  <GetStartWrapper $hidden={displaySign}>
                    <TitleParag>
                      <TypedDemo
                        textforTyped={WelcomeTexts.paragraphs}
                      ></TypedDemo>
                    </TitleParag>
                    <ButtonForGetStart onClick={() => setDisplaySign(true)}>
                      Get Started
                    </ButtonForGetStart>
                  </GetStartWrapper>
                  <GetStartGmailWrapper $hidden={!displaySign}>
                    <RegisterForm />
                  </GetStartGmailWrapper>
                  <LoginText>
                    Trying to access Maverva?
                    <LoginLink href="/login">Log in</LoginLink>
                  </LoginText>
                </SectionEntery>
                <Promotion>
                  <WelcomeIllus2 />
                </Promotion>
              </StartTrialWrapper>
            </SectionEntery>
          </StartTrial>
        </SectionWrapper>
        <SectionWrapper>
          <InfoSection>
            <TabTitleWrapper>
              <TabTitle>Find out what makes Maverva simple to use</TabTitle>
              <TitleDetail>
                <strong>
                  Stay organized with an easy-to-use tool that adapts to your
                  unique needs
                </strong>
              </TitleDetail>
            </TabTitleWrapper>
            <CollapseParent>
              <CollapseNavigation>
                {CollapseTexts.map((collapseText, index) => (
                  <CollapseItem
                    key={index}
                    onClick={() => handleCollapseClick(index)}
                  >
                    <CollapseTitle $display={activeCollapse === index}>
                      {collapseText.title}
                    </CollapseTitle>
                    <CollapseText $display={activeCollapse === index}>
                      <b>{collapseText.bold}</b>
                      {collapseText.text}
                    </CollapseText>
                  </CollapseItem>
                ))}
              </CollapseNavigation>
              {CollapseTexts.map((collapseText, index) => (
                <CollapseContentElement $display={activeCollapse === index}>
                  <ImgForWelcome key={index} src={imageSources[index]} />
                </CollapseContentElement>
              ))}
            </CollapseParent>
          </InfoSection>
        </SectionWrapper>
        <SectionWrapper>
          <TabSection>
            <TabWrapper>
              <TabContentWrapper>
                <TabContent>
                  <TabContentTitle>
                    Make Your Team More Efficient: Accelerate Your Work with
                    Maverva!
                  </TabContentTitle>
                  <TabParag>
                    <strong>
                      🛠️ A Tool That Will Help Your Team Take Control of
                      Everything!
                    </strong>
                    <br />
                    Maverva is a flexible and powerful project management
                    platform designed for software development teams and project
                    managers. Organize your complex processes, manage tasks with
                    ease, and maximize your team's performance!
                  </TabParag>
                </TabContent>
                <TabContent1>
                  <TabContentTitle>Task and Project Management</TabContentTitle>
                  <TabParag>
                    <WrapperParag>
                      <LineIcon />
                      Task Tracking: Jira allows you to easily define tasks,
                      categorize them, and track their progress.
                    </WrapperParag>
                    <WrapperParag>
                      <LineIcon />
                      Sprint Planning: Teams working with Agile and Scrum
                      methodologies can create sprints and manage tasks within
                      the sprint.
                    </WrapperParag>
                    <WrapperParag>
                      <LineIcon />
                      Clarification of Goals: Team members can easily understand
                      which tasks need to be completed and their priority order.
                    </WrapperParag>
                  </TabParag>
                </TabContent1>
                <TabContent2>
                  <TabContentTitle>
                    Simplify project management, empower your team
                  </TabContentTitle>
                  <ImgForWelcome src="/icons/process.png" />
                </TabContent2>
                <TabContent3>
                  <TabContentTitle>
                    Plan, collaborate, and take action to succeed
                  </TabContentTitle>
                  <TabParag>
                    Track your tasks, measure progress, and successfully
                    complete your projects
                  </TabParag>
                </TabContent3>
                <TabContent4>
                  <TabContentTitle>
                    Manage all your projects in one place
                  </TabContentTitle>
                </TabContent4>
                <TabContent5>
                  <TabContentTitle>
                    Simplify project management, empower your team
                  </TabContentTitle>
                </TabContent5>
              </TabContentWrapper>
            </TabWrapper>
          </TabSection>
        </SectionWrapper>
      </MainContainer>
      <Footer />
    </Container>
  );
}
export default WelcomePage;
