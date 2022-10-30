import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const questionGesture = new GestureDescription('I have a question doctor');

//For thumb
questionGesture.addCurl(Finger.Index,FingerCurl.HalfCurl,0.75);
questionGesture.addDirection(Finger.Index,FingerDirection.HorizontalLeft,0.25);
questionGesture.addDirection(Finger.Index,FingerDirection.HorizontalRight,0.25);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Thumb, Finger.Pinky]){
    questionGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
    questionGesture.addDirection(finger, FingerDirection.VerticalDown,0.25);
}