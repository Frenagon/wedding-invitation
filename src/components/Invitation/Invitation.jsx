import WeddingLayout from "../WeddingLayout";
import NavigationButton from "../NavigationButton";
import {
  InvitationContainer,
  InvitationSection,
  ParentNames,
  ParentsBride,
  ParentsGroom,
  SpouceNames,
  LocationSection,
  FatherName,
  FooterSection,
} from "./Invitation.styles";

function Invitation({ closed }) {
  return (
    <WeddingLayout closed={closed}>
      <NavigationButton back />
      <NavigationButton />
      <InvitationContainer>
        <ParentNames>
          <ParentsBride>
            Leopoldo Xavier Cárdenas González
            <br />
            Guillermina Sánchez Magaña
          </ParentsBride>
          <ParentsGroom>
            Francisco Javier Aceves Pérez
            <br />
            Sofia López Álvarez
          </ParentsGroom>
        </ParentNames>
        <InvitationSection>
          Tienen el honor de invitarlo
          <br />
          al enalce matrimonial de sus hijos:
        </InvitationSection>
        <SpouceNames>Myriam y Francisco</SpouceNames>
        <LocationSection>
          <span>
            Que se llevará a cabo el día domingo
            <br />
            veintitrés de octubre a la una y media de la tarde,
            <br />
            en la cuasiparroquia San Cristóbal Magallanes.
          </span>
          <FatherName>
            Preside el Padre Sergio Arturo Gómez Martínez.
          </FatherName>
        </LocationSection>
        <FooterSection>
          <span>Se solicita confirmar asistencia.</span>
          <span>Zapopan, Jalisco, 2022</span>
        </FooterSection>
      </InvitationContainer>
    </WeddingLayout>
  );
}

export default Invitation;
