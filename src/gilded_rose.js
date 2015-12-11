function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;



    this.isAgedBrie = function() {
        return this.name === Items.AGED_BRIE;
    };

    this.isSulfuras = function () {
        return this.name.indexOf(Items.SULFURAS) >= 0;
    };

    this.isConcert = function() {
        return this.name.indexOf(Items.CONCERT) >= 0;
    };

    this.isConjured = function() {
        return this.name.indexOf(Items.CONJURED) >= 0
    };

    this.decreaseQuality = function() {
        return (this.quality > 0) ? this.quality-- : this.quality = 0;
    };

    this.increaseQuality = function() {
        return (this.quality < 50) ? this.quality++ : null;
    };

    this.updateConcert = function(){
        if (this.sell_in < 11)
            this.increaseQuality();
        if (this.sell_in < 6)
            this.increaseQuality();
        if (this.sell_in < 0)
            this.quality = 0;
    }
}

var items = [];

//function update_quality() {
//    items.forEach(function (item) {
//        if (item.isAgedBrie() || item.isConcert()) {
//            item.increaseQuality();
//            item.sell_in--;
//            if (item.isConcert())
//                item.updateConcert();
//        }
//        else if (item.quality > 0 && !item.isSulfuras()) {
//            if(item.isConjured())
//                item.decreaseQuality();
//
//            item.decreaseQuality();
//            if (item.sell_in < 0) {
//                item.decreaseQuality();
//            }
//            item.sell_in--;
//        }
//    });
//}


module.exports = Item;