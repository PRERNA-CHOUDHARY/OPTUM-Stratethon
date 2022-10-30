import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const laterGesture = new GestureDescription('See you later doctor');

laterGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0);
laterGesture.addDirection(Finger.Thumb,FingerDirection.VerticalUp,0.25);

laterGesture.addCurl(Finger.Index,FingerCurl.NoCurl,1.0);
laterGesture.addDirection(Finger.Index,FingerDirection.HorizontalLeft,0.25);
laterGesture.addDirection(Finger.Index,FingerDirection.HorizontalRight,0.25);

for(let finger of [Finger.Pinky, Finger.Ring, Finger.Middle]){
    laterGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
    laterGesture.addDirection(finger, FingerDirection.HorizontalLeft,0.25);
    laterGesture.addDirection(finger, FingerDirection.HorizontalRight,0.25);
}