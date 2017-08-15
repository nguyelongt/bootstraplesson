var favorites;
function load() {
    var tbodyCtrl = document.getElementById('things-to-do');
    var fav1 = new Favorite(1, "Hanging out with Kim", "Daily", 0);
    var fav2 = new Favorite(2, "Sleeping to regain my engergy", "Everyday of the week", 0);
    var fav3 = new Favorite(3, "Watching Movies/Drama/Tv Shows", "Daily", 40);
    var fav4 = new Favorite(4, "Enhancing Programming Skill", "Daily", 0);
    favorites.push(fav1, fav2, fav3, fav4);
    for (var index = 0; index < favorites.length; index++) {
        var favorite = favorites[index];
        var trData = '<tr>';
        trData += '<td>' + favorite.order + '</td>';
        trData += '<td>' + favorite.description + '</td>';
        trData += '<td>' + favorite.amountEachMonth + '</td>';
        trData += '<td>$ ' + favorite.moneySpent + '</td>';
        trData += '</tr>';
        tbodyCtrl.innerHTML += trData;
    }
}
var Favorite = (function () {
    function Favorite(order, description, amountEachMonth, moneySpent) {
        this.order = order;
        this.description = description;
        this.amountEachMonth = amountEachMonth;
        this.moneySpent = moneySpent;
    }
    return Favorite;
}());
