import styled from "styled-components";
import LinkLabelIcon from "./assets/components/styled/LinkLabelIcon.styled";

const AppEl = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppEl>
      <LinkLabelIcon size="sm">Get Started</LinkLabelIcon>
      <LinkLabelIcon>Get Started</LinkLabelIcon>
      <LinkLabelIcon size="lg">Get Started</LinkLabelIcon>
    </AppEl>
  );
}

export default App;
