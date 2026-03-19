class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId =null;
    }

    addClock(time, callback){
        if(time == undefined || callback == undefined){
            throw new Error('Отсутствуют обязательные аргументы')
        }
        for(let i in this.alarmCollection){
            if(this.alarmCollection[i].time == time){
                console.warn('Уже присутствует звонок на это же время');
            }
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        })
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time != time);
    }
    
    getCurrentFormattedTime(){
        const date = new Date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        return `${hours}:${minutes}`
    }

    start(){
        if(this.intervalId != null){
            return;
        }
        this.intervalId = setInterval(() => {this.alarmCollection.forEach(element => {
            if(element.time == this.getCurrentFormattedTime() && element.canCall == true){
                element.canCall = false;
                element.callback()
            } 
        })}, 1000);
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(element => {
            element.canCall = true;
        });
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}