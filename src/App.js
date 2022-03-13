import styled from "styled-components";
import Body from "./assets/components/styled/Body.styled";

const AppEl = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppEl>
      <Body size="md">This is the normal body</Body>
    </AppEl>
  );
}

export default App;
