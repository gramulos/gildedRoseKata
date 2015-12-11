var Inventory = {
    init: function () {
        this.items = [];
    },

    addItem: function(item) {
        this.items.push(item);
    },

    update_quality: function () {
        this.items.forEach(function (item) {
            if (item.isAgedBrie() || item.isConcert()) {
                item.increaseQuality();
                item.sell_in--;
                if (item.isConcert()) {
                    if (item.sell_in < 11)
                        item.increaseQuality();
                    if (item.sell_in < 6)
                        item.increaseQuality();
                    if (item.sell_in < 0)
                        item.quality = 0;
                }
            }
            else if (item.quality > 0 && !item.isSulfuras()) {
                if (item.isConjured())
                    item.decreaseQuality();

                item.decreaseQuality();
                if (item.sell_in < 0) {
                    item.decreaseQuality();
                }
                item.sell_in--;
            }
        });
    }
};