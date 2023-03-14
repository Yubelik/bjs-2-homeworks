class AlarmClock{
    constructor(alarmCollection,intervalId){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(hourAndMin,callback){  
        if (hourAndMin == "" && toDo == ""){          
            throw new Error('Отсутствуют обязательные аргументы');         
        }   else {
                if (this.alarmCollection.find(item => item[time] == hourAndMin) ){
                    console.warn('Уже присутствует звонок на это же время');                 
                } else {
                    let timerAdd = {
                        callback: callback,
                        time: hourAndMin,
                        canCall: true
                    }
                    this.alarmCollection.push(timerAdd); 
                    // console.log('alarmCollection = '+this.intervalId);
                }
            }
    }

    removeClock(time){  
            let x = this.alarmCollection.find(item => item.time == time);
            if (x === undefined){          
                return null;
            } 
            else {
                var filtered = this.alarmCollection.filter((item) => item.time !== time);
                this.alarmCollection = filtered;
                return x; 
            }
    }

    get getCurrentFormattedTime(){
        let today = new Date();
     
        let data = today.getHours()+":"+today.getMinutes();
 
        return data
    }

    start(){
        if (this.intervalId !== ""){
            // console.warn('Буделильник уже работает');
            return;
        } else {
            var startOn = this.alarmCollection.forEach((item) => item.time !== time);
            consol.log("startOn = "+startOn);
        }
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        var reset = this.alarmCollection.forEach((item) => item.canCall == true);
            consol.log("reset = "+reset);

        
    }

    clearAlarms(){

    }
}



