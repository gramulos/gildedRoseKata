describe("Testing Gilded Rose", function () {

    it("Testing +5 Dexterity Vest with sellin 10 and quality 20", function () {
        var inventory = Object.create(Inventory);
        inventory.init();

        var item = Object.create(Item);
        item.init("+5 Dexterity Vest", 10, 20);

        inventory.addItem(item);
        inventory.update_quality();

        expect(inventory.items[0].name).toEqual("+5 Dexterity Vest");
        expect(inventory.items[0].sell_in).toEqual(9);
        expect(inventory.items[0].quality).toEqual(19);
    });

    it("Testing Aged Brie with sellin 2 and quality 0", function () {
        var inventory = Object.create(Inventory);
        inventory.init();

        var item = Object.create(Item);
        item.init("Aged Brie", 2, 0);

        inventory.addItem(item);
        inventory.update_quality();

        expect(inventory.items[0].name).toEqual("Aged Brie");
        expect(inventory.items[0].sell_in).toEqual(1);
        expect(inventory.items[0].quality).toEqual(1);
    });

    it("Testing Elixir of the Mongoose with sellin 5 and quality 7", function () {
        var inventory = Object.create(Inventory);
        inventory.init();

        var item = Object.create(Item);
        item.init("Elixir of the Mongoose", 5, 7);

        inventory.addItem(item);
        inventory.update_quality();

        expect(inventory.items[0].name).toEqual("Elixir of the Mongoose");
        expect(inventory.items[0].sell_in).toEqual(4);
        expect(inventory.items[0].quality).toEqual(6);
    });

    it("Testing Sulfuras, Hand of Ragnaros with sellin 0 and quality 80", function () {

        var inventory = Object.create(Inventory);
        inventory.init();

        var item = Object.create(Item);
        item.init("Sulfuras, Hand of Ragnaros", 0, 80);

        inventory.addItem(item);
        inventory.update_quality();

        expect(inventory.items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
        expect(inventory.items[0].sell_in).toEqual(0);
        expect(inventory.items[0].quality).toEqual(80);
    });

    it("Testing Sulfuras, Hand of Ragnaros with sellin -1 and quality 80", function () {
        var inventory = Object.create(Inventory);
        inventory.init();

        var item = Object.create(Item);
        item.init("Sulfuras, Hand of Ragnaros", -1, 80);

        inventory.addItem(item);
        inventory.update_quality();

        expect(inventory.items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
        expect(inventory.items[0].sell_in).toEqual(-1);
        expect(inventory.items[0].quality).toEqual(80);
    });

    it("Testing Backstage passes to a TAFKAL80ETC concert with sellin 15 and quality 20", function () {
        var inventory = Object.create(Inventory);
        inventory.init();

        var item = Object.create(Item);
        item.init("Backstage passes to a TAFKAL80ETC concert", 15, 20);

        inventory.addItem(item);
        inventory.update_quality();

        expect(inventory.items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(inventory.items[0].sell_in).toEqual(14);
        expect(inventory.items[0].quality).toEqual(21);
    });

    it("Testing Backstage passes to a TAFKAL80ETC concert with sellin 10 and quality 49", function () {
        var inventory = Object.create(Inventory);
        inventory.init();

        var item = Object.create(Item);
        item.init("Backstage passes to a TAFKAL80ETC concert", 10, 49);

        inventory.addItem(item);
        inventory.update_quality();

        expect(inventory.items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(inventory.items[0].sell_in).toEqual(9);
        expect(inventory.items[0].quality).toEqual(50);
    });

    it("Testing Backstage passes to a TAFKAL80ETC concert with sellin 5 and quality 49", function () {

        var inventory = Object.create(Inventory);
        inventory.init();

        var item = Object.create(Item);
        item.init("Backstage passes to a TAFKAL80ETC concert", 5, 49);

        inventory.addItem(item);
        inventory.update_quality();

        expect(inventory.items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(inventory.items[0].sell_in).toEqual(4);
        expect(inventory.items[0].quality).toEqual(50);
    });

    it("Testing Conjured Mana Cake with sellin 3 and quality 6", function () {

        var inventory = Object.create(Inventory);
        inventory.init();

        var item = Object.create(Item);
        item.init("Conjured Mana Cake", 3, 6);

        inventory.addItem(item);
        inventory.update_quality();

        expect(inventory.items[0].name).toEqual("Conjured Mana Cake");
        expect(inventory.items[0].sell_in).toEqual(2);
        expect(inventory.items[0].quality).toEqual(4);
    });

});
