import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { HomePage } from "./pages/HomePage";
import { Authorization } from "./pages/Auth";
import { LeadsPage } from "./pages/Leads";

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #ffff;

  & a {
    text-decoration:none;
    color: #2e7d32;
  }
`;
const Page = styled.div`
  padding: 0px;
`;
export const App = () => {
  return (
    <AppBody>
      <Page>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/leads" element={<LeadsPage />} />
          {/* <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST}/>} /> */}
        </Routes>
      </Page>
     
    </AppBody>
  );
};
