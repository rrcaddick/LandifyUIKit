import styled from "styled-components";
import Hero1 from "./assets/components/Hero/Hero1";
import Hero2 from "./assets/components/Hero/Hero2";
import Hero3 from "./assets/components/Hero/Hero3";
import Hero4 from "./assets/components/Hero/Hero4";
import Hero5 from "./assets/components/Hero/Hero5";
import Hero6 from "./assets/components/Hero/Hero6";
import Hero7 from "./assets/components/Hero/Hero7";
import LogoCloud1 from "./assets/components/LogoCloud/LogoCloud1";
import LogoCloud2 from "./assets/components/LogoCloud/LogoCloud2";
import LogoCloud3 from "./assets/components/LogoCloud/LogoCloud3";
import LogoCloud4 from "./assets/components/LogoCloud/LogoCloud4";

const AppEl = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppEl>
      {/* <Hero1 />
      <Hero2 /> */}
      <Hero3 />
      {/* <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 /> */}
      {/* <LogoCloud1 /> */}
      {/* <LogoCloud2 /> */}
      {/* <LogoCloud3 /> */}
      <LogoCloud4 />
    </AppEl>
  );
}

export default App;
