const buttons = document.querySelector('.buttons');
const screen = document.querySelector('.text');

buttons.addEventListener('click', (event) => {
    const value = event.target.value;
    screen.innerHTML += value;
    if (value === ' = ') {
        const equation = screen.innerHTML;
        screen.innerHTML = solveEquation(equation);
    } else if (value === 'clear') {
        screen.innerHTML = '';
    }
})

const solveEquation = (equation) => {
    const pieces = equation.split(' ');
    const first = Number(pieces[0]);
    const op = pieces[1];
    const second = Number(pieces[2]);
    if (op === '+') {
        return first + second;
    } else if (op === '-') {
        return first - second;
    } else if (op === '*') {
        return first * second;
    } else if (op === '/') {
        return first / second;
    } else {
        return "Invalid Operator";
    }
}