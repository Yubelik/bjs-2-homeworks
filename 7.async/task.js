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
        
    getCurrentFormattedTime(){
        let today = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return today;
    }

    start(){
        
        if (this.intervalId){
            return;
        } 
        
        this.intervalId = setInterval(() => 
            this.alarmCollection.forEach((item) => {
                if (this.getCurrentFormattedTime() == item.time){
                    item.canCall == false;  
                    item.callback();
                    item.canCall = !item.canCall;    
                }
            }), 1000);
        
                

        // }
        
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((item) => item.canCall = true);
        // consol.log("reset");   
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = []
    }
}



