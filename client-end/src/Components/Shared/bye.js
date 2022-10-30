import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const byeGesture = new GestureDescription('Bye Doctors');

byeGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0);
byeGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft,0.25);
byeGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight,0.25);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Index, Finger.Pinky]){
    byeGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
    byeGesture.addDirection(finger, FingerDirection.VerticalDown,0.25);
}