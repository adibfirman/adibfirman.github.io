import * as React from "react";
import { useMemo, Fragment } from "react";
import { CircularProgress, CircularProgressLabel, Flex, Text, Grid } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";

import * as Types from "./types";
import { POOR_COLOR, WARNING_COLOR, GOOD_COLOR } from "./constants";

const SpeedDetail = ({ detailPage }: Types.SpeedDetailProps) => {
  const { colorText } = useDarkMode();
  const msToSecond = (sec: number) => Number(sec / 1000).toFixed(1);

  const color = useMemo(() => {
    let dataColor = "";
    if (detailPage.perf >= 49) dataColor = POOR_COLOR;
    if (detailPage.perf >= 50) dataColor = WARNING_COLOR;
    if (detailPage.perf >= 89) dataColor = GOOD_COLOR;

    return dataColor;
  }, [detailPage.perf]);

  const labData = useMemo(() => {
    return [
      {
        title: "First Contentful Paint",
        desc: "First Contentful Paint marks the time at which the first text or image is painted.",
        value: `${msToSecond(detailPage.fcp)} s`
      },
      {
        title: "Time to Interactive",
        desc: "Time to interactive is the amount of time it takes for the page to become fully interactive.",
        value: `${msToSecond(detailPage.tti)} s`
      },
      {
        title: "Speed Index",
        desc: "Speed Index shows how quickly the contents of a page are visibly populated.",
        value: `${msToSecond(detailPage.si)} s`
      },
      {
        title: "Total Blocking Time",
        desc: `Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds.`,
        value: `${detailPage.tbt} ms`
      },
      {
        title: "Largest Contentful Pain",
        desc: `Largest Contentful Paint marks the time at which the largest text or image is painted.`,
        value: `${msToSecond(detailPage.lcp)} s`
      },
      {
        title: "Cumulative Layout Shift",
        desc: `Cumulative Layout Shift measures the movement of visible elements within the viewport.`,
        value: detailPage.cls
      }
    ] as const;
  }, [detailPage]);

  return (
    <Fragment>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <CircularProgress
          max={100}
          capIsRound
          value={detailPage.perf}
          size="130px"
          thickness="7px"
          color={color}
        >
          <CircularProgressLabel fontSize="4xl" color={color}>
            {detailPage.perf}
          </CircularProgressLabel>
        </CircularProgress>
        <Text mt={1} fontSize="xl" fontWeight="500" color={colorText}>
          {detailPage.url}
        </Text>
      </Flex>
      <Grid gridTemplateColumns={["unset", "repeat(2, 1fr)"]} gap="24px" mt={10}>
        {labData.map((data, index) => (
          <Grid key={index} gridTemplateColumns="1fr 0.3fr">
            <Text color={colorText} fontWeight="600">
              {data.title}
            </Text>
            <Text color={colorText} justifySelf="right">
              {data.value}
            </Text>
            <Text color={colorText}>{data.desc}</Text>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default SpeedDetail;
