function gatherData() {
    var descriptionvalue = document.getElementById('descriptionValue');
    var amounteachmonthvalue = document.getElementById('amountEachMonthValue');
    var moneyspentvalue = document.getElementById('moneySpentValue');
    //console.log(employee)
}
var StoredData = (function () {
    function StoredData(orderValue, descriptionValue, amountEachMonth, moneySpent) {
        this.orderValue = orderValue;
        this.descriptionValue = descriptionValue;
        this.amountEachMonth = amountEachMonth;
        this.moneySpent = moneySpent;
    }
    return StoredData;
}());
