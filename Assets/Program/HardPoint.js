﻿#pragma strict
import System;
import System.IO;
import System.Text;

public var ScoreText : Text;
var sr:StreamReader;
var score: String[];
private var output = "";

function Start () {
    sr = new StreamReader("stage2.txt");
    var txt = sr.ReadToEnd();
    sr.Close();
    score= txt.Split(","[0]);
    for(var i=1; i<6; i++) output = output + i.ToString()+". " + score[i-1] +"\n\n";
    ScoreText.text=output;
}