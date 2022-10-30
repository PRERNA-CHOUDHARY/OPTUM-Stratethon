import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const noGesture = new GestureDescription('No doctor');

for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle]){
    noGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    noGesture.addDirection(finger, FingerDirection.HorizontalLeft,0.25);
    noGesture.addDirection(finger, FingerDirection.HorizontalRight,0.25);
}

for(let finger of [Finger.Ring, Finger.Pinky]){
    noGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
    noGesture.addDirection(finger, FingerDirection.VerticalDown,0.25);
}