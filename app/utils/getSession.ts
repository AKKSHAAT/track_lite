
import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";


export const getSession = async () => {
  let sessionId;
    const cookieStore = await cookies();
    sessionId = await cookieStore.get("session_id")?.value;
    
    if (!sessionId) {
      sessionId = uuidv4();
      cookieStore.set("session_id", sessionId);
    }
  return sessionId;
};
