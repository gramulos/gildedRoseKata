var Item = {
    init:function(name, sell_in, quality){
        this.name = name;
        this.sell_in = sell_in;
        this.quality = quality;
    },


    isAgedBrie: function() {
        return this.name === Items.AGED_BRIE;
    },
    isSulfuras:function () {
        return this.name.indexOf(Items.SULFURAS) >= 0;
    },

    isConcert: function() {
        return this.name.indexOf(Items.CONCERT) >= 0;
    },

    isConjured: function() {
        return this.name.indexOf(Items.CONJURED) >= 0
    },

    decreaseQuality: function() {
        return (this.quality > 0) ? this.quality-- : this.quality = 0;
    },

    increaseQuality: function() {
        return (this.quality < 50) ? this.quality++ : null;
    }
};