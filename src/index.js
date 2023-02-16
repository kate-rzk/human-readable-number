module.exports = 
function toReadable(number) {
    const
        t = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        o = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        p = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let str = number.toString(), out = '';

    if(str.length == 1) return o[number];
    else if(str.length == 2){
        if(str[0] == 1 && str[1] !== 0) out = p[parseInt(str[1])];
        else if (str[0] == 1 && str[1] == 0) return p[0];
        else out = (t[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + o[parseInt(str[1])]):''));
    }
    else if(str.length == 3){
        if (str[1]!='1') out = (o[parseInt(str[0])] + ' hundred' + ((str[1]!='0')?(' ' + t[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + o[parseInt(str[2])]):''));
        else out = (o[parseInt(str[0])] + ' hundred' + (' ' + p[str[2]]));
    }

    return out;
}

