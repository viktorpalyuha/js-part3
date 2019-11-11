const huaweiMate20X = {};
huaweiMate20X.vendor = 'Huawei';
huaweiMate20X.model = 'Mate 20X';
huaweiMate20X.cameras = ['40Mp', '20Mp'];
huaweiMate20X.price = 999;
console.log(huaweiMate20X.vendor + ' ' + huaweiMate20X.model);

function ring() {
  console.log(this.vendor + ' ' + this.model +  ' ding-ding!!!');
}

huaweiMate20X.ring = ring;
huaweiMate20X.ring();

const appleIphoneXI = {
  vendor: 'Apple',
  model: 'iPhone XI',
  cameras: ['40Mp', '30Mp', '50Mp'],
  price: 100500,
  ring: ring
};

appleIphoneXI.ring();

function SmartPhone(vendor, model, price) {
  this.vendor = vendor;
  this.model = model;
  this.price = price;
}
SmartPhone.prototype.ring = ring;

const xiaomiMi10Pro = new SmartPhone('Xiaomi',  'Mi 10 Pro', 499);
xiaomiMi10Pro.ring();
console.dir(appleIphoneXI);
console.dir(xiaomiMi10Pro);
const samsungNote10 = new SmartPhone('Samsung', 'Note 10', 1399);
samsungNote10.ring();
console.dir(samsungNote10);
console.dir(samsungNote10.__proto__);

class Phone {
  constructor(vendor, model, price) {
    this.vendor = vendor;
    this.model = model;
    this.price = price;
  }
  ring() {
    console.log(this.vendor + ' ' + this.model +  '   ding-ding!!!');  
  }
}

const nokia3110 = new Phone('Nokia', '3110', 99);
nokia3110.ring();
console.dir(nokia3110);