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
} from "./styles";
import TypedDemo from "../../components/tools/Typed/typed";
import RegisterForm from "../../components/tools/registerForm";

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

  return (
    <Container>
      <NavbarContainer>
        <BrandWrapper>
          <BrandContainer>
            <BrandLogo />
            Maverva
          </BrandContainer>
        </BrandWrapper>
        <NavbarSignWrapper>
          <ButtonForLogintonNavbar>Log in</ButtonForLogintonNavbar>
          <ButtonForGetStartonNavbar>Get Started</ButtonForGetStartonNavbar>
        </NavbarSignWrapper>
      </NavbarContainer>
      <MainContainer>
        <SectionWrapper>
          <StartTrial>
            <StartTrialWrapper>
              <GetStartWrapper>
                <Title> Simplify project management, empower your team.</Title>
                <TitleParag>
                  <TypedDemo textforTyped={TitlesPara}></TypedDemo>
                </TitleParag>
                <ButtonForGetStart>Get Started</ButtonForGetStart>
              </GetStartWrapper>
              <Promotion>
                <RegisterForm />
              </Promotion>
            </StartTrialWrapper>
          </StartTrial>
        </SectionWrapper>
        <SectionWrapper>
          <TabSection>
            <TabWrapper>
              <TabTitleWrapper>
                <TabTitle>Find out what makes Maverva simple to use.</TabTitle>
              </TabTitleWrapper>
              <TabContentWrapper>
                <ImgForWelcome src="/icons/process.png" />
              </TabContentWrapper>
            </TabWrapper>
          </TabSection>
        </SectionWrapper>
        <SectionWrapper>
          <InfoSection></InfoSection>
        </SectionWrapper>
      </MainContainer>
      <FooterContainer></FooterContainer>
    </Container>
  );
}
export default WelcomePage;
