$(function () {
    
//    funkcja konstruująca:
    function Phone(brand, price, color, shopOnline) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.shopOnline = shopOnline;
    }
    
//    funkcja prototypowa: 
    Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", the price is " + this.price + " and the color is " + this.color + ". Here is where you can buy it: " + this.shopOnline);
    }
    
//    tworzenie obiektów tel.:
    var iPhone6S = new Phone("Apple", 2250, "silver", "www.bestiPhones.pl");
    var SamsungGalaxyS6 = new Phone("Samsung", 3000, "pink", "www.samsung.com");
    var OnePlusOne = new Phone("no one knows", 10000, "yellow", "www.somewherethere.com");
    
//    pokazanie w konsoli info na temat każdego nowego obiektu:    
    iPhone6S.printInfo();
    SamsungGalaxyS6.printInfo();
    OnePlusOne.printInfo();   
    
    
    
});