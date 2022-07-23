import WeddingLayout from "../WeddingLayout";
import NavigationButton from "../NavigationButton";
import Timeline from "../../resources/images/timeline.svg";
import Heart from "../../resources/images/heart.png";
import Church from "../../resources/images/church.png";
import Party from "../../resources/images/party.png";
import LinkIcon from "../../resources/images/link-icon.png";
import LiverpoolLogo from "../../resources/images/liverpool-logo.png";
import AmazonLogo from "../../resources/images/amazon-logo.png";
import SearsLogo from "../../resources/images/sears-logo.png";
import {
  FooterContainer,
  HeaderContainer,
  HeaderImage,
  InstructionsContainer,
  LinkImage,
  LinkStackImage,
  NoteTextSmall,
  Time,
  TimelineContainer,
  TimelineDescription,
  TimelineDescriptionSeparator,
  TimelineImage,
  TimelineLinkStack,
  TimelineSection,
  TimelineSubSection,
  TimelineSubTitle,
  TimelineTitle,
} from "./Instructions.styles";

function Instructions({ closed }) {
  return (
    <WeddingLayout closed={closed}>
      <NavigationButton back />
      <InstructionsContainer>
        <HeaderContainer>
          <HeaderImage src={Heart} alt="Heart" />
          <span>Toca en cada imagen para ir a la ubicación</span>
        </HeaderContainer>
        <TimelineContainer>
          <TimelineImage src={Timeline} alt="Timeline" />
          <TimelineSection>
            <TimelineSubSection>
              <Time>1:30 PM</Time>
              <TimelineDescription>
                <TimelineTitle>¡SÍ, ACEPTO!</TimelineTitle>
                <TimelineDescriptionSeparator />
                <TimelineSubTitle>CEREMONIA</TimelineSubTitle>
              </TimelineDescription>
            </TimelineSubSection>
            <TimelineSubSection alignLeft>
              <LinkImage
                href="https://goo.gl/maps/d6S1UFcxUm8jiP9R7"
                target="_blank"
                paddingLeft
              >
                <img src={Church} alt="Church Icon" />
              </LinkImage>
            </TimelineSubSection>
          </TimelineSection>
          <TimelineSection>
            <TimelineSubSection>
              <LinkImage
                href="https://goo.gl/maps/wZJ2e9EUHW3Aw6N69"
                target="_blank"
              >
                <img src={Party} alt="Party Icon" />
              </LinkImage>
            </TimelineSubSection>
            <TimelineSubSection alignLeft>
              <TimelineDescription>
                <TimelineTitle>¡A BAILAR!</TimelineTitle>
                <TimelineDescriptionSeparator />
                <TimelineSubTitle>FIESTA</TimelineSubTitle>
              </TimelineDescription>
              <Time paddingLeft>3:00 PM</Time>
            </TimelineSubSection>
          </TimelineSection>
          <TimelineSection>
            <TimelineSubSection>
              <TimelineDescription>
                <TimelineTitle>¡OBSEQUIOS!</TimelineTitle>
                <TimelineDescriptionSeparator />
                <TimelineSubTitle>MESA DE REGALOS*</TimelineSubTitle>
              </TimelineDescription>
            </TimelineSubSection>
            <TimelineSubSection alignLeft>
              <TimelineLinkStack paddingLeft>
                <LinkStackImage href="" target="_blank">
                  <img src={LinkIcon} alt="Link Icon" height="10px" />
                  <img src={LiverpoolLogo} alt="Liverpool Logo" height="16px" />
                </LinkStackImage>
                <LinkStackImage href="" target="_blank">
                  <img src={LinkIcon} alt="Link Icon" height="10px" />
                  <img src={AmazonLogo} alt="Amazon Logo" height="17px" />
                </LinkStackImage>
                <LinkStackImage href="" target="_blank">
                  <img src={LinkIcon} alt="Link Icon" height="10px" />
                  <img src={SearsLogo} alt="Sears Logo" height="13px" />
                </LinkStackImage>
              </TimelineLinkStack>
            </TimelineSubSection>
          </TimelineSection>
        </TimelineContainer>
        <FooterContainer>
          <span>¡Que Dios les multiplique sus muestras de cariño!</span>
          <NoteTextSmall>
            * Si así lo desean, pueden utilizar alguna de las
            <br />
            mesas de regalos.
          </NoteTextSmall>
        </FooterContainer>
      </InstructionsContainer>
    </WeddingLayout>
  );
}

export default Instructions;
