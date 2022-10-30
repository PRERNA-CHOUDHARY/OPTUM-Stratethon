import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const helloGesture = new GestureDescription('Hello, Doctor!');

for(let finger of [Finger.Middle, Finger.Ring, Finger.Index, Finger.Pinky, Finger.Thumb]){
    helloGesture.addCurl(finger,FingerCurl.NoCurl,1.0);
    helloGesture.addDirection(finger,FingerDirection.VerticalUp,0.25);    
}