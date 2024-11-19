export function checkShift(hour){
    if (hour>=22 || hour < 6){
        return "nightshift"
    }

 else{
    return "dayshift";
 
}
}

export function getweather(temp){
    if(temp<10){
        return "cold"
    }
    else if(temp<=25){
        return "moderate"

    }
    else{
        return "hot"
    }
}

export function discount(bill){
    if(bill>200){
        return bill * 0.20
    }
    else if(bill>=100){
        return bill *0.10

    }
    else{
        return  "nodiscount"
    }
}

export function customer(order){
    if(order >5 && order <=10){
        return "Standard order"
    }
    else if(order > 11){
        return "bulk order"

    }
    else{
        return "Invalid order"
    }

}