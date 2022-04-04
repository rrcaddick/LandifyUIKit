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
import LogoCloud5 from "./assets/components/LogoCloud/LogoCloud5";
import LogoCloud6 from "./assets/components/LogoCloud/LogoCloud6";
import LogoCloud7 from "./assets/components/LogoCloud/LogoCloud7";
import FeatureMultiple1 from "./assets/components/Feature/Multiple/FeatureMultiple1";
import FeatureMultiple2 from "./assets/components/Feature/Multiple/FeatureMultiple2";
import FeatureMultiple3 from "./assets/components/Feature/Multiple/FeatureMultiple3";
import FeatureMultiple4 from "./assets/components/Feature/Multiple/FeatureMultiple4";
import FeatureMultiple5 from "./assets/components/Feature/Multiple/FeatureMultiple5";
import FeatureMultiple6 from "./assets/components/Feature/Multiple/FeatureMultiple6";
import FeatureMultiple7 from "./assets/components/Feature/Multiple/FeatureMultiple7";

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
      <LogoCloud1 />
      {/* <LogoCloud2 /> */}
      {/* <LogoCloud3 /> */}
      {/* <LogoCloud4 /> */}
      {/* <LogoCloud5 /> */}
      {/* <LogoCloud6 /> */}
      {/* <LogoCloud7 /> */}
      {/* <FeatureMultiple1 /> */}
      {/* <FeatureMultiple2 /> */}
      {/* <FeatureMultiple3 /> */}
      {/* <FeatureMultiple4 /> */}
      {/* <FeatureMultiple5 /> */}
      {/* <FeatureMultiple6 /> */}
      <FeatureMultiple7 />
    </AppEl>
  );
}

export default App;
