import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage = () => {
    const {roomId} = useParams()
    const myMeeting = async (element) =>{
        const appId =109685970 ;
        const serverSecret = "b892bd2cffef5cf3e634c510c69f5521";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId , 
            serverSecret , 
            roomId ,
            Date.now().toString(), 
            "your name"
             );
             const zc = ZegoUIKitPrebuilt.create(kitToken);
             zc.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `http://localhost:3000/room/${roomId}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
             });
    }
  return (
    <div  ref={myMeeting}/>
  )
}

export default RoomPage