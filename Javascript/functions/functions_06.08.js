function repeatCharaters(strParam, funParam)
{
console.log(`Not Repeated Character: ${funParam(strParam)}`)
}
function findNotRepeated(strParam)
{
 //console.log(strParam.indexOf('e'));
 //console.log(strParam.indexOf('e',11));
 //for Bonus Task
 var result='';
 for(var i=0; i<strParam.length; i++)
 {
   var charValue=strParam.charAt(i);
   var firstIndex=strParam.indexOf(charValue);
   var secondIndex=strParam.lastIndexOf(charValue);
   //if(strParam.indexOf(charValue)== i && strParam.indexOf(charValue,i+1)==-1)
   if(strParam.indexOf(charValue)== strParam.lastIndexOf(charValue))
   {
     //Main Task
     //return strParam[i];
     //Bonus Task
     result +=strParam[i];
   }
 }
 return result;
}
repeatCharaters("axbyazcddbexcyzl",findNotRepeated);