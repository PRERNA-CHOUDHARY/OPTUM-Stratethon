import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const victoryGesture = new GestureDescription('Victory');

for(let finger of [Finger.Index, Finger.Middle]){
    victoryGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    victoryGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
}

for(let finger of [Finger.Pinky, Finger.Ring, Finger.Thumb]){
    victoryGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
    victoryGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}