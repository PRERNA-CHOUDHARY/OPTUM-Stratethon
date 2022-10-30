import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const sickGesture = new GestureDescription('I am sick');

sickGesture.addCurl(Finger.Middle,FingerCurl.NoCurl,1.0);
sickGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft,0.25);
sickGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight,0.25);


for(let finger of [ Finger.Ring, Finger.Index, Finger.Pinky, Finger.Thumb]){
    sickGesture.addCurl(finger,FingerCurl.NoCurl,1.0);
    sickGesture.addDirection(finger,FingerDirection.VerticalUp,0.25);    
}