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
        let timerAdd = {
            callback: callback,
            time: hourAndMin,
            canCall: true
        }
        this.alarmCollection.push(timerAdd);              
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
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((item) => item.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = []
    }
}



