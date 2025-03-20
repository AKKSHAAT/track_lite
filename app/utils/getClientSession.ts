import jsCookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
export default function getClientSession() {
    let sessionId = jsCookies.get("session_id");
    if (!sessionId) {
      sessionId = uuidv4();
      jsCookies.set("session_id", sessionId);
    }
    return sessionId;
}