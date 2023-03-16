class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(hourAndMin,callback){  
        if (!hourAndMin || !callback){          
            throw new Error('Отсутствуют обязательные аргументы');         
        }   
            if (this.alarmCollection.find(item => item == hourAndMin) ){
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

    removeClock(time){  
                this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }
        
    get getCurrentFormattedTime(){
        let today = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        console.log('today = '+today);
        return today;
    }

    start(){
        if (this.intervalId){
            // console.warn('Буделильник уже работает');
            return;
        } else {
            let time = new Date();
            this.alarmCollection.forEach((item) => item.time !== time);
            // console.log("start");
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



