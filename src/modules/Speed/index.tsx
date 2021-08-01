import * as React from "react";
import { format } from "date-fns";
import { ChevronRight, ChevronLeft } from "react-feather";
import {
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  Button
} from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";
import { Page } from "@components";
import { SpeedReports } from "@utils/speed";
import Hr from "@components/Markdown/Hr";

import SpeedDetail from "./SpeedDetail";
import { DESC_PAGE, TITLE_PAGE } from "./constants";
import * as Types from "./types";

const SpeedPage = ({ newestData }: { newestData: SpeedReports }) => {
  const { colorText } = useDarkMode();
  const lastUpdatedate = new Date(newestData.timestamp);
  const lastUpdate = format(lastUpdatedate, "EEEE, d MMM yyyy");
  const [activePage, setActivePage] = React.useState(0);

  const reportsByDevices = newestData.reports.reduce((acc, report) => {
    acc[report.device] = !acc[report.device] ? [report] : [...acc[report.device], report];
    return acc;
  }, {} as Types.ReportsByDevices);

  return (
    <Page
      path="/speed"
      title={`${TITLE_PAGE} ⚡️`}
      desc={`This page it's just a report of performance for several page, so basically if you want to test a performance "just in case if you want 😅 " just refer to this page.`}
      SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}
    >
      <Hr />
      <Text textAlign="center" fontSize={["md", "lg"]} color={colorText}>
        The latest update is: <i>{lastUpdate}</i>
      </Text>
      <Text textAlign="center" color={colorText}>
        Generated by: <Link href="https://github.com/mazipan/psi-gh-action">psi-gh-action</Link>
      </Text>
      <Hr />
      <Flex my="6" justifyContent="space-between">
        <Button
          color={colorText}
          leftIcon={<ChevronLeft />}
          size="xs"
          variant="ghost"
          onClick={() => setActivePage(activePage - 1)}
          isDisabled={activePage === 0}
        >
          Prev Page
        </Button>
        <Button
          color={colorText}
          rightIcon={<ChevronRight />}
          size="xs"
          variant="ghost"
          onClick={() => setActivePage(activePage + 1)}
          isDisabled={activePage === reportsByDevices.mobile.length - 1}
        >
          Next Page
        </Button>
      </Flex>
      <Tabs colorScheme="blue" isFitted variant="enclosed" mx={[0, "-100px"]}>
        <TabList mb="1em">
          <Tab color={colorText}>Mobile</Tab>
          <Tab color={colorText}>Desktop</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SpeedDetail detailPage={reportsByDevices.mobile[activePage]} />
          </TabPanel>
          <TabPanel>
            <SpeedDetail detailPage={reportsByDevices.desktop[activePage]} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Page>
  );
};

export default SpeedPage;