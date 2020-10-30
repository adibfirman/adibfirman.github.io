import type { NextApiHandler } from "next";

const handler: NextApiHandler = (_, res) => {
	res.end(`Status: 200`);
};

export default handler;
