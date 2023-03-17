class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(hourAndMin,callback){  
        if (!hourAndMin || !callback){ 
                   
            throw new Error('Отсутствуют обязательные аргументы');         
        }   
        if (this.alarmCollection.find(item => item.time == hourAndMin) ){
            console.warn('Уже присутствует звонок на это же время');                 
        } 
        // console.log('hourAndMin = '+hourAndMin + " callback = "+ callback);
        let timerAdd = {
            callback: callback,
            time: hourAndMin,
            canCall: true
        }
        this.alarmCollection.push(timerAdd); 
            // console.log('alarmCollection1 = '+this.alarmCollection[0].time);
        // console.log(this.alarmCollection.forEach(item => console.log(" Время = "+item.time)));
                        
    }

    removeClock(time){  
                this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }
        
    get getCurrentFormattedTime(){
        let today = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        // console.log('today = '+today);
        return today;
    }

    start(){
        
        if (this.intervalId){
            // console.warn('Буделильник уже работает');
            return;
        } else {
            this.intervalId = setInterval(startOneSec, 1000, this.getCurrentFormattedTime, this.alarmCollection);
            function startOneSec(time, arr){
                arr.forEach(item => console.log(item.time));
                arr.forEach((item) => item.time == time);
            }
        }
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((item) => item.canCall == true);
        // consol.log("reset");   
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = []
    }
}



