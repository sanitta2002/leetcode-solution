/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let a= date.split(' ')
    let day=a[0].replace(/\D/g, "");

    let Mon={"Jan":'01', "Feb":'02', "Mar":'03', "Apr":'04', "May":'05', "Jun":'06', "Jul":'07', "Aug":'08', "Sep":'09', "Oct":'10', "Nov":'11', "Dec":'12'}
    let month=''
    for(let key in Mon){
        if(a[1]===key){
            month=Mon[key]
        }
    }
    let str=''
    if(day.length==1){
        str=0+day
    }else{
        str=day
    }
    let newDate=`${a[2]}-${month}-${str}`
   
    return newDate
    
    
};
