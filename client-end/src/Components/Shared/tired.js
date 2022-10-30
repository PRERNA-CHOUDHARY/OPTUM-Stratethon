import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const tiredGesture = new GestureDescription('I am Tired');

//For thumb
tiredGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0);
tiredGesture.addDirection(Finger.Thumb,FingerDirection.VerticalUp,0.25);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Index, Finger.Pinky]){
    tiredGesture.addCurl(finger, FingerCurl.HalfCurl, 0.75);
    tiredGesture.addDirection(finger, FingerDirection.HorizontalLeft,0.25);
    tiredGesture.addDirection(finger, FingerDirection.HorizontalRight,0.25);
}