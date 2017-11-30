 function judge(num) {
    if(num > 1)
    {
        return num +'bottles of beer on the wall,'+ num +'bottels of beer.Take one down and pass it around,'+(num - 1)+'bottles of beer on the wall.';
    }
    else if (num === 1) {
        return number + ' bottle of beer on the wall, ' + number + ' bottle of beer.Take one down and pass it around, no more bottle of beer on the wall.';
    }
     else if (num === 0){
        return 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.';
    }
        return '';
    };

var test = function test() {
    let str = '';

    for(var X = 99; X >= 0; X --){
        str += judge(i);
        str += '\n';
    };
    console.log(str);
};

module.exports = test;