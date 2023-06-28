//Initialize the hr,min,sec,count as 0 

var hr=0;
var min=0;
var sec=0;
var count=0;

//Timer will decide either it is in running state or in stopping state 

var timer=false;

function start()
{
   //When someone click on the start it will be running

   timer=true;
   stopWatch();

}
function stop()
{
   //When someone click on the stop it will stop

   timer=false;
}
function reset()
{
  //When someone click on the reset it will reset

  timer=false;
  hr=0;
  min=0;
  sec=0;
  count=0;

  //Select the item by their id and set as "00"

  document.getElementById("hr").innerHTML="00";
  document.getElementById("min").innerHTML="00";
  document.getElementById("sec").innerHTML="00";
  document.getElementById("count").innerHTML="00";
}

//Logic of working
function stopWatch()
{
  if(timer==true)
  {
    count=count+1;

    if(count==100)
    {
        sec=sec+1;
        count=0;
    }
    if(sec==60)
    {
        min=min+1;
        sec=0;
    }
    if(min==60)
    {
        hr=hr+1;
        min=0;
        sec=0;
    }

    var hrString=hr;
    var minString=min;
    var secString=sec;
    var countString=count;

    if(hr<10)
    {
        hrString="0"+hrString;
    }
    if(min<10)
    {
        minString="0"+minString;
    }
    if(sec<10)
    {
        secString="0"+secString;
    }
    if(count<10)
    {
        countString="0"+countString;
    }
    
    document.getElementById("hr").innerHTML=hrString;
    document.getElementById("min").innerHTML=minString;
    document.getElementById("sec").innerHTML=secString;
    document.getElementById("count").innerHTML=countString;
    setTimeout("stopWatch()",10);
  }
}