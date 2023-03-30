import React from "react";
import "./App.css";
import RAffix from "./components/Affix/RAffix";
import RBredCrumb from "./components/BreadCrumb/RBredCrumb";

import RDrawer from "./components/Drawer/Draw";
import RDropdown from "./components/Dropdown/RDropdown";
import RIcons from "./components/Icons/RIcons";
import RLoader from "./components/Loader/RLoader";
import RMessage from "./components/Message/RMessage";
import RToastMessage from "./components/Message/RToastMessage";
import RModal from "./components/Modal/RModal";
import RNotification from "./components/Notification/RNotification";
import RPlaceholder from "./components/Placeholder/RPlaceholder";
import RProgress from "./components/Progress/RProgress";
import RNav from "./components/Nav/RNav";
import RNavbar from "./components/Navbar/RNavbar";
import RSideNav from "./components/SideNav/RSideNav";
import RStep from "./components/Step/RStep";
import RPagination from "./components/Pagination/RPagination";
import RContainer from "./components/Container/RContainer";
import RDevider from "./components/Divider/RDevider";
import RFlexboxGrid from "./components/FlexboxGrid/RFlexboxGrid";
import RGrid from "./components/GridResponsive/RGrid";
import RStack from "./components/Stack/RStack";
import RAutoComplete from "./components/DataEntry/AutoComplete/RAutoComplete";
import RCheckPicker from "./components/DataEntry/CheckPicker/RCheckPicker";
import {
  Container,
  Content,
  FlexboxGrid,
  Header,
  IconButton,
  Input,
  InputGroup,
  Sidebar,
  Stack,
} from "rsuite";
import RCheckbox from "./components/DataEntry/Checkbox/RCheckbox";

// PRACTIVE
import SideBar from "./pages/NavBar";

import TableData from "./pages/components/TableDistrict";
import HeaderApp from "./pages/components/HeaderApp";
import RForm from "./components/Form/RForm";
import RTable from "./components/Table/RTable";

const App = () => {
  return (
    <>
      <RTable />

      <RForm />
      {/* <Container>
        <Sidebar>
          <SideBar />
        </Sidebar>
        <Container>
          <Header>
            <HeaderApp />
          </Header>
          <Content>
            <TableData />
          </Content>
        </Container>
      </Container> */}
      {/* <RDrawer />
      <RIcons />
      <RMessage />
      <RToastMessage />
      <RNav />
      <RStack></RStack>
      <RCheckPicker />
      <RCheckbox />
      <RAutoComplete />
      <RGrid />
      <RFlexboxGrid />
      <RDevider />
      <RContainer />
      <RNavbar />
      <RSideNav />
      <RPagination />
      <RStep />
      <RModal />
      <RAffix />
      <RNotification />
      <RProgress />
      <RPlaceholder />
      <RBredCrumb />
      <RDropdown /> */}
    </>
  );
};

export default App;
