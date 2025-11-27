const input = document.getElementById("myInput");
const jargon = document.getElementById("flyingJargon");
const output = document.getElementById("myOutput");



const commands = {
    help: help,
    time: time,
    add: add
}

function verifyCommand() {
    const raw = input.value.trim();
    const parts = raw.split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    if (commands[cmd]) {
        commands[cmd](...args);
    }
    else {
        output.textContent = (`${cmd} is not a valid command`);
    }
}

function help() {

}

function add(args) {
    const a = Number(args[0]);
    const b = Number(args[1]);

    output.textContent= a+b;
}
