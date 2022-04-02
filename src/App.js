import styled from "styled-components";
import Hero3 from "./assets/components/Hero/Hero3";

const AppEl = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppEl>
      <Hero3 />
    </AppEl>
  );
}

export default App;
