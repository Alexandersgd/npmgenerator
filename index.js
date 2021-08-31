const msg = [
    "absolutely",
    "absorb",
    "abuse",
    "academic",
    "accept",
    "access",
    "accident",
    "accompany",
    "accomplish",
    "according",
    "account",
    "accurate",
    "accuse",
    "achieve",
    "achievement",
    "acid",
    "acknowledge",
    "acquire",
    "across",
    "act",
    "action",
    "active",
    "activist",
    "activity",
    "actor",
    "actress",
    "actual",
    "actually",
    "ad",
    "adapt",
];
const ramdomMsg = () =>{
    const message = msg[Math.floor(Math.random() * msg.length)]
    console.log(message);
};

module.exports = {ramdomMsg};