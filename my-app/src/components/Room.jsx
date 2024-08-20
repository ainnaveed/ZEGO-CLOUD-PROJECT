import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
  const { id } = useParams();
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 260630301;
    const serverSecret = "c4c408815c9c72884d54edfca78f1517";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "Zain Naveed"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url: `http://localhost:5173/room/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };

  return <div className="myCallContainer" ref={myMeeting}></div>;
};

export default Room;
