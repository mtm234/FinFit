/*
 * Entry point for the watch app
 */
import document from "document";
console.log("App Started");
document.getElementById("lasttitle").style.visibility="hidden";
  document.getElementById("lastbudget").style.visibility="hidden";
  document.getElementById("makenextpurchase").style.visibility="hidden";
document.getElementById("s2title").style.visibility="hidden";
document.getElementById("s2price").style.visibility="hidden";
document.getElementById("pricebutton").style.visibility="hidden";
  document.getElementById("overtitle").style.visibility="hidden";
  document.getElementById("overamount").style.visibility="hidden";
  document.getElementById("lastnum").style.visibility="hidden";
  document.getElementById("btnLeft").style.visibility="hidden";
  document.getElementById("btnRight").style.visibility="hidden";
  document.getElementById("rejecttitle").style.visibility="hidden";
  document.getElementById("rejectbudget").style.visibility="hidden";
  document.getElementById("rejectnum").style.visibility="hidden";
var mybutton = document.getElementById("mybutton");

mybutton.onactivate = function(e) {
  document.getElementById("s1title").style.visibility="hidden";
  document.getElementById("s1budget").style.visibility="hidden";
  document.getElementById("s1num").style.visibility="hidden";
  document.getElementById("mybutton").style.visibility="hidden";
  document.getElementById("s2title").style.visibility="visible";
  document.getElementById("s2price").style.visibility="visible";
  document.getElementById("pricebutton").style.visibility="visible";
  console.log("click");
}
var pricebutton = document.getElementById("pricebutton");
pricebutton.onactivate = function(e){
  document.getElementById("s2title").style.visibility="hidden";
  document.getElementById("s2price").style.visibility="hidden";
  document.getElementById("pricebutton").style.visibility="hidden";
  document.getElementById("overtitle").style.visibility="visible";
  document.getElementById("overamount").style.visibility="visible";
  document.getElementById("btnLeft").style.visibility="visible";
  document.getElementById("btnRight").style.visibility="visible";
}

var confirmbutton = document.getElementById("btnRight");
var rejectbutton = document.getElementById("btnLeft");
confirmbutton.onactivate = function(e){
  document.getElementById("overtitle").style.visibility="hidden";
  document.getElementById("overamount").style.visibility="hidden";
  document.getElementById("btnRight").style.visibility="hidden";
  document.getElementById("btnLeft").style.visibility="hidden";
  document.getElementById("lasttitle").style.visibility="visible";
  document.getElementById("lastbudget").style.visibility="visible";
  document.getElementById("lastnum").style.visibility="visible";
  document.getElementById("makenextpurchase").style.visibility="visible";
}
rejectbutton.onactivate = function(e){
  document.getElementById("overtitle").style.visibility="hidden";
  document.getElementById("overamount").style.visibility="hidden";
  document.getElementById("btnRight").style.visibility="hidden";
  document.getElementById("btnLeft").style.visibility="hidden";
  document.getElementById("rejecttitle").style.visibility="visible";
  document.getElementById("rejectbudget").style.visibility="visible";
  document.getElementById("rejectnum").style.visibility="visible";
  document.getElementById("makenextpurchase").style.visibility="visible";
  
}