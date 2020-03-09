const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
       
    let arr = [];
        let res = '';
    let resArr = [];

    for(let i = 0; i < expr.length; i += 10) {      //создаем массив с шифрами по 10 символов
        arr.push(expr.slice(0 + i, 10 + i));
    }

    for(let i = 0; i < arr.length; i++) {       //создаем массив с ключами морза 
    
        for(let j = 0; j <= arr[i].length; j += 2) {
            if (arr[i].slice(0 + j, 2 + j) == 11) {res += '-'};
            if (arr[i].slice(0 + j, 2 + j) == 10) {res += '.'};
            if (arr[i] == '**********') {res += ' '; break;};
        }
        resArr.push(res);
        res = '';
    }


    let finRes = '';

    for(let i = 0; i < resArr.length; i++) {            //преобразуем ключи морза в символы из объекта
        if(resArr[i] == ' ') {finRes += ' '; continue};
        finRes += MORSE_TABLE[resArr[i]];
    } 

    return finRes;

}

module.exports = {
    decode
}