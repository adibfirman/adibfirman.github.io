import type { NextApiHandler } from "next";
import NextCors from "nextjs-cors";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjtoe-vHBAfw8y7Mc0A8_pGOyXcq0YrlY",
  authDomain: "adibfirman-space-1613802186749.firebaseapp.com",
  databaseURL: "https://adibfirman-space-1613802186749-default-rtdb.firebaseio.com",
  projectId: "adibfirman-space-1613802186749",
  storageBucket: "adibfirman-space-1613802186749.appspot.com",
  messagingSenderId: "553259177082",
  appId: "1:553259177082:web:bc04c88b16d103d96417c3"
};

const handler: NextApiHandler = async (req, res) => {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dbRef = ref(db);

  try {
    const { state } = req.query;
    const snapshot = await get(child(dbRef, "/"));
    const val = snapshot.val();

    const getKey = String(state);
    const oldCount = val[getKey];
    if (oldCount === undefined) throw new Error("State / Key not found");

    const newValue = { ...val, [getKey]: oldCount + 1 };
    await set(dbRef, newValue);

    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "https://ta-beta.tokopedia.com",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      credentials: true
    });

    res.json({ message: "success", data: newValue });
  } catch (error) {
    const err = error as Error;
    res.status(500);
    res.json({ message: "Oops something wrong", err: err.message });
  }
};

export default handler;
