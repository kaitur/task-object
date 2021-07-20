class Task {
    constructor(taskId_, title_, done_, dueDate_, desc_, finalDate_){
        this.taskId = taskId_;
        this.title = title_;
        this.done = done_;
        this.dueDate = dueDate_;
        this.desc = desc_;
        this.finalDate = finalDate_;
    }
    checkDone(){return this.done ? "[x]" : "[ ]"}
    checkDesc(){return this.desc != null ? this.desc : ""}

    checkDate(){
        let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.dueDate != null ? `${monthList[this.dueDate.getMonth()]} ${this.dueDate.getDate()}` : ""}

    toString(){
        var text = `${this.taskId}. ${this.checkDone()} ${this.title} ${this.checkDate()}\n` +
        `${this.checkDesc()}`
        return text;
    }

    toggleStatus(){this.done = !this.done}

    isOverdueDate(){
        let finalTime = this.finalDate.getTime();
        let realTime = new Date();
        return realTime > finalTime;
    }
}
    var task1 = new Task(1, "Implement task output", true, new Date('Aug 25'), "Use fields: title, desc, done, dueDate", new Date('July 20 12:35'));
    task1.toggleStatus();
    console.log(task1.toString());
    task1.toggleStatus();
    console.log(task1.toString());

    console.log(task1.isOverdueDate());

    


