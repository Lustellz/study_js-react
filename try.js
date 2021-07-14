function getRectArea(width, height){
    if(isNaN(width) || isNaN(height)){
        throw 'Parameter is not a number!';
    }
}

try{
    getRectArea(3, 'A');
}catch(e){
    console.error(e);
}

function UserException(message){
    this.message = message;
    this.name = 'UserException';
}

function getMonthName(mo){
    mo = mo -1;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if(months[mo] !== undefined){
        return months[mo];
    }else{
        throw new UserException('InvalidMonthNo');
    }
}

try{
    var myMonth = 15;
    var monthName = getMonthName(myMonth);
}catch(e){
    monthName = 'unknown';
    console.log(e.message, e.name);
}

