import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const thanksGesture = new GestureDescription('Thanks doctor');

for(let finger of [Finger.Middle, Finger.Ring, Finger.Index, Finger.Pinky, Finger.Thumb]){
    thanksGesture.addCurl(finger,FingerCurl.NoCurl,1.0);
    thanksGesture.addDirection(finger,FingerDirection.DiagonalUpLeft,0.9);
    thanksGesture.addDirection(finger,FingerDirection.DiagonalUpRight,0.9);   
}