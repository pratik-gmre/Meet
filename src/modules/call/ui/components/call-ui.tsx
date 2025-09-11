// import { StreamTheme, useCall } from "@stream-io/video-react-sdk";
// import { useState } from "react";
// import { CallLobby } from "./call-lobby";
// import { CallActive } from "./call-active";
// import { CallEnded } from "./call-ended";

// type Props = {
//   meetingName: string;
// };

// export const CallUi = ({ meetingName }: Props) => {

//   const call = useCall();
//   const [show, setShow] = useState<"lobby" | "call" | "ended">("lobby");

//   const handleJoin = async () => {
//     console.log("this is triggered");

//     if (!call) return;

//     await call.join();
//     setShow("call");
//   };

//   const handleLeave = async () => {
//     console.log("this is triggered");

//    try {
//      if (!call) return;
//     await call.leave();
//     setShow("ended");
//    } catch (error) {
//      console.log(error);
//    }
//   };

//   return (
//     <StreamTheme className="h-full">
//       {show === "lobby" && <CallLobby onJoin={handleJoin} />}
//       {show === "call" && (
//         <CallActive onLeave={handleLeave} meetingName={meetingName} />
//       )}
//       {show === "ended" && <CallEnded />}
//     </StreamTheme>
//   );
// };

import { StreamTheme, useCall } from "@stream-io/video-react-sdk";
import { useRef, useState } from "react";
import { CallLobby } from "./call-lobby";
import { CallActive } from "./call-active";
import { CallEnded } from "./call-ended";

type Props = {
  meetingName: string;
};

export const CallUi = ({ meetingName }: Props) => {
  const call = useCall();
  const [show, setShow] = useState<"lobby" | "call" | "ended">("lobby");

  // Guard to prevent duplicate join/leave calls
  const joiningRef = useRef(false);
  const leavingRef = useRef(false);

  const handleJoin = async () => {
    console.log("handleJoin triggered");
    if (!call) {
      console.warn("No call instance available.");
      return;
    }
    if (joiningRef.current) {
      console.log("Already joining - ignoring duplicate request.");
      return;
    }
    joiningRef.current = true;
    try {
      await call.join();
      setShow("call");
    } catch (err) {
      console.error("Error joining call:", err);
    } finally {
      joiningRef.current = false;
    }
  };

  const handleLeave = async () => {
    console.log("handleLeave triggered");
    // Helpful trace if you want to know who invoked this
    console.trace("handleLeave call trace");

    if (!call) {
      console.warn("No call instance available. Moving to ended.");
      setShow("ended");
      return;
    }

    if (leavingRef.current) {
      console.log("Already leaving — ignoring duplicate request.");
      return;
    }

    leavingRef.current = true;

    try {
      // If the SDK provides a state check this is even better:
      // if ((call as any).state && (call as any).state !== 'joined') { ... }
      await call.leave();
      console.log("call.leave() resolved");
    } catch (err: any) {
      const msg = err?.message ?? String(err);
      // Tolerate duplicate-leave errors from the SDK
      if (msg.includes("already been left") || msg.includes("already left")) {
        console.warn("Ignored duplicate leave error:", msg);
      } else {
        console.error("Unexpected error while leaving:", err);
      }
    } finally {
      // Ensure UI never gets stuck in "call" even if leave throws
      setShow("ended");
      leavingRef.current = false;
    }
  };

  return (
    <StreamTheme className="h-full">
      {show === "lobby" && <CallLobby onJoin={handleJoin} />}
      {show === "call" && (
        <CallActive onLeave={handleLeave} meetingName={meetingName} />
      )}
      {show === "ended" && <CallEnded />}
    </StreamTheme>
  );
};
