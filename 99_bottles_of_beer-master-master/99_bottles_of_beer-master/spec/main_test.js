var test = require("../main/main");

describe("test", function () {
   

    it("should print the lyrics when the num greater that 1", function () {
        let num = 99;
        let result = test.judge(num);
        expect(result).toEqual(num+' bottles of beer on the wall, '+num+' bottles of beer.Take one down and pass it around, '+(num-1)+' bottles of beer on the wall.');
    });
     it("should print the lyrics when the num equal 1", function () {
        let num = 1;
        let result = test.judge(1);
        expect(result).toEqual(num+' bottle of beer on the wall, '+num+' bottle of beer.Take one down and pass it around,no more bottles of beer on the wall.');
    });
      it("should print the lyrics when the less than 1", function () {
        let result = test.judge(0);
        expect(result).toEqual('no more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
    });
      it('print ', function() {
        spyOn(console, 'log');
        test.test();
        let str = '';
         for(var X = 99; X >= 0; X --){
        str += judge(i)+'\n';
        }
       expect(console.log).toHaveBeenCalledWith(str);
    });
});
