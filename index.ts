import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter word: ', (str) => {
    const ans: string = firstnonrepeat(str); 
    console.log(ans);
    
    rl.close();
});

function firstnonrepeat(str: string): string {
    const freqmp = new Map<string, number>();
    for (var i = 0; i < str.length; i++) {
      freqmp.set(str.charAt(i), (freqmp.get(str.charAt(i)) ?? 0) + 1);
    }
    for (var i = 0; i < str.length; i++) {
        if (freqmp.get(str.charAt(i)) === 1) {    
            return str.charAt(i);
        }
    }
    return ""; 
}
