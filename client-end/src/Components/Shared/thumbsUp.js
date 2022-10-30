import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const thumbsUpGesture = new GestureDescription('Okay doctor');

//For thumb
thumbsUpGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0);
thumbsUpGesture.addDirection(Finger.Thumb,FingerDirection.VerticalUp,0.25);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Index, Finger.Pinky]){
    thumbsUpGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
    thumbsUpGesture.addDirection(finger, FingerDirection.HorizontalLeft,0.25);
    thumbsUpGesture.addDirection(finger, FingerDirection.HorizontalRight,0.25);
}