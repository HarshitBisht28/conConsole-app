const input = document.getElementById("myInput");
const jargon = document.getElementById("flyingJargon");
const output = document.getElementById("myOutput");
let history = [];

const commands = {
    help: help,
    time: time,
    add: add
};


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        verifyCommand();
        input.value = "";
    }
});

function verifyCommand() {
    const raw = input.value.trim();
    const parts = raw.split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    if (commands[cmd]) {
        commands[cmd](...args);
    } else {
        output.textContent = `${cmd} is not a valid command`;
    }

    history.push(`> ${raw}`);
    history.push(output.textContent);
    output.innerHTML = history.join("<br>");
}

function help() {
    output.textContent = "Available commands: help, time, add, clear";
}

function time() {
    const now = new Date();
    output.textContent = now.toLocaleTimeString();
}

function add(args) {
    const a = Number(args[0]);
    const b = Number(args[1]);
    output.textContent = `${a} + ${b} = ${a + b}`;
}
