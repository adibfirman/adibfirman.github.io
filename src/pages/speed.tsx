import * as React from "react";
import { InferGetStaticPropsType } from "next";

import { getPsiReportData, SpeedReports } from "@utils/speed";
import SpeedModule from "@modules/Speed";

const SpeedPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <SpeedModule {...props} />;
};

export async function getStaticProps() {
  const allData: SpeedReports[] = getPsiReportData();
  const newestData: SpeedReports = allData[0];

  return {
    props: {
      newestData
    }
  };
}

export default SpeedPage;
