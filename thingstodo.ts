var favorites: Favorite[];

function load() {
 let tbodyCtrl = document.getElementById('things-to-do');

        let fav1 = new Favorite(1, "Hanging out with Kim", "Daily", 0);
        let fav2 = new Favorite(2, "Sleeping to regain my engergy", "Everyday of the week", 0);
        let fav3 = new Favorite(3, "Watching Movies/Drama/Tv Shows", "Daily", 40);
        let fav4 = new Favorite(4, "Enhancing Programming Skill", "Daily", 0);

        favorites.push(fav1, fav2, fav3, fav4);

    for (var index = 0; index < favorites.length; index++) {
        let favorite = favorites[index];
        
        let trData = '<tr>';
        trData += '<td>' + favorite.order + '</td>';
        trData += '<td>' + favorite.description + '</td>';
        trData += '<td>' + favorite.amountEachMonth + '</td>';
        trData += '<td>$ ' + favorite.moneySpent + '</td>';
        trData += '</tr>';

        tbodyCtrl.innerHTML += trData;
    }
}

class Favorite {
    order: number;
    description: string;
    amountEachMonth: any;
    moneySpent: number;

    constructor(order: number, description: string, amountEachMonth: any, moneySpent: number) {
        this.order = order;
        this.description = description;
        this.amountEachMonth = amountEachMonth;
        this.moneySpent = moneySpent;
    }
}