function gatherData() {

    let descriptionvalue = document.getElementById('descriptionValue');
    let amounteachmonthvalue = document.getElementById('amountEachMonthValue');
    let moneyspentvalue = document.getElementById('moneySpentValue');



    //console.log(employee)
}

class StoredData {
    orderValue: number;
    descriptionValue: string;
    amountEachMonth: any;
    moneySpent: number;

    constructor(orderValue: number, descriptionValue: string, amountEachMonth: any, moneySpent: number) {
        this.orderValue = orderValue;
        this.descriptionValue = descriptionValue;
        this.amountEachMonth = amountEachMonth;
        this.moneySpent = moneySpent;
    }
}