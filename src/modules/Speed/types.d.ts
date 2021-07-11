import { SpeedReport } from "@utils/speed";

export type ReportsByDevices = { [device: string]: SpeedReport[] };

export type SpeedDetailProps = {
  detailPage: SpeedReport;
};
