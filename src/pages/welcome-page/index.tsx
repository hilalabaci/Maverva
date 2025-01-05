import {
  Container,
  NavbarContainer,
  BrandLogo,
  BrandContainer,
  BrandWrapper,
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
  NavbarSignWrapper,
  ButtonForGetStartonNavbar,
  ButtonForLogintonNavbar,
  TabTitleWrapper,
  TabTitle,
  TabWrapper,
  TabContentWrapper,
  MainContainer,
  FooterContainer,
  GetStartGmailWrapper,
  SectionEntery,
  Footer,
  BrandInfo,
  LinkWrapper,
  Brandlogo,
  LinkItem,
  IconLanguage,
  IconSelect,
  TitleDetail,
  TabContent,
  TabContentTitle,
  TabParag,
} from "./styles";
import TypedDemo from "../../components/tools/Typed/typed";
import RegisterForm from "../../components/tools/registerForm";
import DynamicSVGBrand from "../../components/ DynamicSVG/LogoSVG";
import WelcomeIllus from "../../components/ DynamicSVG/WelcomeIllus";
import WelcomeIllus2 from "../../components/ DynamicSVG/WelcomeIllus2";
import { useState } from "react";
import ShareTeamIllus from "../../components/ DynamicSVG/shareTeamIllus";

function WelcomePage() {
  const Titles = [
    "Simplify project management, empower your team.",
    "Redefine team collaboration.",
    "Plan, collaborate, and take action to succeed.",
    "Manage all your projects in one place.",
    "A flexible and user-friendly project management solution.",
  ];
  const TitlesPara = [
    "Organize your workflows and boost productivity to achieve your goals faster.",
    "Track your tasks, measure progress, and successfully complete your projects.",
    "Our app ensures your team stays aligned, even on the most complex projects.",
    "Keep everything under control, from tasks and timelines to team members and feedback.",
    "Stay organized with an easy-to-use tool that adapts to your unique needs.",
  ];
  const [displaySign, setDisplaySign] = useState(false);

  return (
    <Container>
      <NavbarContainer>
        <BrandWrapper>
          <BrandContainer>
            <DynamicSVGBrand />
          </BrandContainer>
        </BrandWrapper>
        <NavbarSignWrapper>
          <ButtonForLogintonNavbar>Log in</ButtonForLogintonNavbar>
          <ButtonForGetStartonNavbar>Get it free</ButtonForGetStartonNavbar>
        </NavbarSignWrapper>
      </NavbarContainer>
      <MainContainer>
        <SectionWrapper>
          <StartTrial>
            <SectionEntery>
              <StartTrialWrapper>
                <SectionEntery>
                  <Title>Simplify project management, empower your team.</Title>
                  <GetStartWrapper $hidden={displaySign}>
                    <TitleParag>
                      <TypedDemo textforTyped={TitlesPara}></TypedDemo>
                    </TitleParag>
                    <ButtonForGetStart onClick={() => setDisplaySign(true)}>
                      Get Started
                    </ButtonForGetStart>
                  </GetStartWrapper>
                  <GetStartGmailWrapper $hidden={!displaySign}>
                    <RegisterForm />
                  </GetStartGmailWrapper>
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
                    tailored to your role.
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
      <Footer>
        <FooterContainer>
          <BrandInfo>
            <Brandlogo src="/logo/logo32.ico" />
            Manage all your projects in one place
          </BrandInfo>
          <LinkWrapper>
            <LinkItem> Copyright © 2025 Maverva</LinkItem>
            <LinkItem>Privacy policy</LinkItem>
            <LinkItem>Terms</LinkItem>
            <LinkItem>
              <IconLanguage /> English
              <IconSelect />
            </LinkItem>
          </LinkWrapper>
        </FooterContainer>
      </Footer>
    </Container>
  );
}
export default WelcomePage;
