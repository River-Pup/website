function brainfuckInterpreter(code, input = '') {
    let tape = new Array(30000).fill(0);
    let pointer = 0;
    let output = '';
    let inputIndex = 0;
    let loopStack = [];

    for (let i = 0; i < code.length; i++) {
        switch (code[i]) {
            case '>':
                pointer = (pointer + 1) % tape.length;
                break;
            case '<':
                pointer = (pointer - 1 + tape.length) % tape.length;
                break;
            case '+':
                tape[pointer] = (tape[pointer] + 1) % 256;
                break;
            case '-':
                tape[pointer] = (tape[pointer] - 1 + 256) % 256;
                break;
            case '.':
                output += String.fromCharCode(tape[pointer]);
                break;
            case ',':
                if (inputIndex < input.length) {
                    tape[pointer] = input.charCodeAt(inputIndex++);
                } else {
                    tape[pointer] = 0;
                }
                break;
            case '[':
                if (tape[pointer] === 0) {
                    let openBrackets = 1;
                    while (openBrackets > 0) {
                        i++;
                        if (code[i] === '[') openBrackets++;
                        else if (code[i] === ']') openBrackets--;
                    }
                } else {
                    loopStack.push(i);
                }
                break;
            case ']':
                if (tape[pointer] !== 0) {
                    i = loopStack[loopStack.length - 1];
                } else {
                    loopStack.pop();
                }
                break;
            default:
                break;
        }
    }

    return output;
}

function runBrainfuck() {
    const code = document.querySelector('.bfcode').value;
    const input = document.querySelector('.bfinput').value;
    const output = brainfuckInterpreter(code, input);
    document.querySelector('.bfoutput').textContent = output;
}
