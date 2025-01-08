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
} from "./styles";
import TypedDemo from "../../components/tools/Typed/typed";
import RegisterForm from "../../components/tools/registerForm";
import WelcomeIllus2 from "../../components/ DynamicSVG/WelcomeIllus2";
import { useState } from "react";
import ShareTeamIllus from "../../components/ DynamicSVG/shareTeamIllus";
import { WelcomeTexts } from "../../constants/welcomeTexts";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function WelcomePage() {
  const [displaySign, setDisplaySign] = useState(false);

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
          <TabSection>
            <TabWrapper>
              <TabTitleWrapper>
                <TabTitle>Find out what makes Maverva simple to use</TabTitle>
                <TitleDetail>
                  <strong>
                    Stay organized with an easy-to-use tool that adapts to your
                    unique needs
                  </strong>
                </TitleDetail>
              </TabTitleWrapper>
              <TabContentWrapper>
                <TabContent>
                  <TabContentTitle>AI-powered productivity</TabContentTitle>
                  <TabParag>
                    Get work done faster with the only AI-powered assistant
                    tailored to your role
                  </TabParag>
                </TabContent>
                <TabContent>
                  <TabContentTitle>Redefine team collaboration</TabContentTitle>
                  <TabParag>
                    Track your tasks, measure progress, and successfully
                    complete your projects
                  </TabParag>
                  <ShareTeamIllus />
                </TabContent>
                <TabContent>
                  <TabContentTitle>
                    Simplify project management, empower your team
                  </TabContentTitle>
                  <ImgForWelcome src="/icons/process.png" />
                </TabContent>
                {/* <TabContent>
                  <TabContentTitle>
                    Plan, collaborate, and take action to succeed
                  </TabContentTitle>
                  <TabParag>
                    Track your tasks, measure progress, and successfully
                    complete your projects
                  </TabParag>
                </TabContent>
                <TabContent>
                  <TabContentTitle>
                    Manage all your projects in one place
                  </TabContentTitle>
                </TabContent>
                <TabContent>
                  <TabContentTitle>
                    Simplify project management, empower your team
                  </TabContentTitle>
                </TabContent> */}
              </TabContentWrapper>
            </TabWrapper>
          </TabSection>
        </SectionWrapper>
        <SectionWrapper>
          <InfoSection></InfoSection>
        </SectionWrapper>
      </MainContainer>
      <Footer />
    </Container>
  );
}
export default WelcomePage;
