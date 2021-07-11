const fs = require('fs')
const { join } = require('path')

export interface SpeedReport {
	url: string;
	device: string;
	perf: number;
	fid: number;
	lcp: number;
	cls: number;
	fcp: number;
	fci: number;
	tbt: number;
	tti: number;
	si: number;
	req: number;
	size: number;
}

export interface SpeedReports {
	timestamp: string;
	reports: SpeedReport[];
}

export function getPsiReportData(): SpeedReports[] {
	const reportDir = join(process.cwd(), 'psi-reports')
	const files = fs.readdirSync(reportDir).filter((file: string) => (file !== 'LAST_UPDATED.txt' && file !== 'available-reports.json')).reverse()
	const allData: any[] = []

	files.forEach((file: any) => {
		const fileContent = fs.readFileSync(join(reportDir, file), 'utf8')
		const jsonData = JSON.parse(fileContent)
		const reports = jsonData.reports.map((r: { perf: number; size: number }) => {
			return {
				...r,
				perf: parseInt((r.perf * 100).toFixed(0), 10),
				size: parseInt((r.size / 1000).toFixed(0), 10)
			}
		})
		allData.push({
			...jsonData,
			reports
		})
	})

	return allData
}
