//вывести последовательно эллементы массива используя рекурсию но не циклы

var odinochka=[1,2,3,4,5,6,7,8,9];
console.log(odinochka);
var n=0;
function rec(odinochka) {
    console.log(odinochka[n]);

n++;
if (n<odinochka.length){
    rec(odinochka);
}

}

console.log(rec(odinochka));


//функция возводящая число в степень 'n'


function power(x,m) {
    return Math.round(x**m);
}

console.log(power(2.8, 2));





//рекурсивная функция возведения в степень 'n'

function lower(y,l) {
    if (l^0===l){
            if (l==1){
                return y;
        }else {
            return Math.round( y*lower(y,l-1));

        }
    }else {
            return alert('Please write a full number of power');
        }
}

console.log(lower(2, 3));



//	Написать 2 функции (можно методы) которые при каждом вызове будут возвращать
// инкремент\декремент. То есть функции счетчики.
// Для проверки вызвать их в бесконечном цикле (имеется в виду setTimeout)





