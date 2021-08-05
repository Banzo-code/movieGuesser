
/* Drinking Game/Movie Guesser
It will then choose boys or girls (Ignore if not applicable)
Chooses a random movie quote first person to get the movie that the quote is from is exempt from drinking.
Says how long to drink/pick someone else to drink if you do not drink give youreself a pat on the back if you got it correct if you got it wrong better luck next time
*/
const boyOrGirl = ["Gentlemen", "Ladies"]
const quotesList = ["Leave the gun. Take the cannoli.","Toto, I've a feeling we're not in Kansas anymore.", "They call it a Royale with cheese.", "I'm going to make him an offer he can't refuse.", "I am your father.", "It’s alive! It’s alive!", "You can’t handle the truth!", "Yippie-ki-yay, motherf—er.", "Here’s Johnny!", "You talkin to me?", "I’ll be back.", "Shaken, not stirred.", "To infinity and beyond!", "Why so serious?", "Say hello to my little friend!", "You've got to ask yourself one question: 'Do you feel lucky?' Well, do ya punk?","Roads? Where we're going we don't need roads.","Just keep swimming.","I'm not bad. I'm just drawn that way.","Hasta la vista, baby.", "I'm also just a girl, standing in front of a boy, asking him to love her.", "I mean, funny like I'm a clown? I amuse you?", "It's alive! It's alive!","My precious.", "Elementary, my dear Watson", "I don't want to survive. I want to live.", "Wax on, wax off.", "Magic Mirror on the wall, who is the fairest one of all?","My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance...", "They may take our lives, but they'll never take our freedom!"," EVERYBODY DRINK!!!!!","EVRYBODY DRINK!!!"];

let drinkTime = `${Math.floor(Math.random()*10)} seconds`;
let chooseBoyorGirl = boyOrGirl[Math.floor(Math.random()*boyOrGirl.length)];
let movieChoice = quotesList[Math.floor(Math.random()*quotesList.length)];

const displayMessage = () => {
    console.log(` ${chooseBoyorGirl}!!
    What film is the following quote from: "${movieChoice}"
    Pick someone to drink for ${drinkTime}`);
}

displayMessage();
