import styled from "styled-components";
import Hero1 from "./assets/components/Hero/Hero1";
import Hero2 from "./assets/components/Hero/Hero2";
import Hero3 from "./assets/components/Hero/Hero3";
import Hero4 from "./assets/components/Hero/Hero4";

const AppEl = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppEl>
      {/* <Hero1 /> */}
      {/* <Hero2 /> */}
      {/* <Hero3 /> */}
      <Hero4 />
    </AppEl>
  );
}

export default App;
