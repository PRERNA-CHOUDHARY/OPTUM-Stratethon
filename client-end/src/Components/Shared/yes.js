import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const yesGesture = new GestureDescription('Yes doctor');

for(let finger of [Finger.Middle, Finger.Ring, Finger.Index, Finger.Pinky, Finger.Thumb]){
    yesGesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    yesGesture.addDirection(finger,FingerDirection.VerticalDown,0.25);    
}