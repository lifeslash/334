function getTimeZone() {
  Logger.log(Session.getScriptTimeZone());
}

function getTrigger(){
  var trigger = ScriptApp.getProjectTriggers();//this return TriggerObject[]
  Logger.log(trigger.length);
  for(var i=0;i<trigger.length;i++){
    var type = trigger[i].getEventType();
    var functionName = trigger[i].getHandlerFunction();
    var source = trigger[i].getTriggerSource();
    var sId = trigger[i].getTriggerSourceId();
    var uId = trigger[i].getUniqueId();
    Logger.log("type:"+type+"\nfunctionName:"+functionName+"\nsource:"+source+"\nsID:"+sId+"\nuId:"+uId);
  }
}

function makeTrigger(){
  var num = [31,28,31,30,31,30,31,31,30,31,30,31];
  Logger.log(num);
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var day = today.getDate()+1;
  if((day > num[month]) && (month == 11)){
    month = 0;day = 1;year++;
  } else if(day > num[month]){
    day = 1;month++;
  }
  var hour = "3";
  var minute = "34";
  var date = new Date(year,month,day,hour,minute,0,0);
  Logger.log(date);
  var newTrigger = ScriptApp.newTrigger("botTweet");
  var timeBasedTrigger = newTrigger.timeBased().at(date).create();
}
