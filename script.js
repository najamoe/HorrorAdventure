"use strict"

//Variable to keep track of which nodes have been used, in order to make the story not have conflicts
let chosenNodeIds = [];

function updateChosenNodeIds(id) {
    chosenNodeIds.push(id);
}

function hasChosenSpecialPath() {
    return chosenNodeIds.includes(9) || chosenNodeIds.includes(10) || chosenNodeIds.includes(12);
}

const startNode = {
    id: 1,
    title: "The forgotten graveyard",
    description: "You and your friends, Sam, Emily, and Jessica, stand at the entrance of the abandoned graveyard in Northwood, Virginia. The shadows seem deeper here, and a shiver runs down their spines.",
    choices: [
        { name: "Enter the graveyard", node: null },
        { name: "Hesitate and consider going home", node: null },
    ]
};
const enterTheGraveyard = {
    id: 2,
    title: "Enter the graveyard",
    description: "The graveyard seems even more ominous up close. The gravestones appear to stare at them as silent witnesses of past deaths and suffering.",
    choices: [
        { name: "Continue moving through the graveyard", node: null },
        { name: "Explore the graves", node: null },
        { name: "Return home", node: null }
    ]
};

const exploreTheGraves = {
    id: 3,
    title: "Explore the graves",
    description: "As you move deeper into the graveyard, you hear a rustling in the bushes. Emily screams and jumps back, startled.", 
    choices: [
        { name: "Investigate the rustling", node: null },
        { name: "Keep moving forward", node: null },
        { name: "Return home", node: null }
    ]
};

const hesitateAndConsider = {
    id: 4,
    title: "Return Home",
    description: "Really? You haven't even gone in yet, and are already too scared...",
    choices: []
};

const returnHome = {
    id: 5,
    title: "Return Home",
    description: "You are too scared and run back home, maybe it was the choice that saved your life, we will never know",
    choices: []
};

const continueForward = {
    id: 6,
    title: "Moving Forward",
    description: "As you move deeper into the graveyard, a sense of unease settles over you. The air grows colder, and the only sound is the crunch of dead leaves beneath your feet. Shadows dance eerily among the tombstones, and you can't shake the feeling of being watched.",
    choices: [
        { name: "Look around", node: null },
        { name: "Return home", node: null }
    ]
};

//the if/else is for the story not to have conflicts, some of the nodes already said jessica was missing, if one of those nodes were chosen before, it has to change which choices to use in this const
const lookAround = {
    id: 7,
    title: "Look around",
    description: "In the far end of the graveyard, you notice a silhouette of a mausoleum",
    choices: [
        {
            name: "Go to the mausoleum and explore",
            node: (() => {
                if (hasChosenSpecialPath()) {
                    return null;
                } else {
                    return null;
                }
            })()
        },
        { name: "Return home", node: null }
    ]
};


const investigateRustling = {
    id: 8,
    title: "Investigate the Rustling",
    description: "You cautiously approach the bushes, heart pounding. Suddenly, a cat darts out, causing Emily and Sam to burst into laughs of relief.",
    choices: [
        { name: "Ignore the laugh", node: null },
        { name: "Laugh with Emily and Sam", node: null },
        { name: "Return home", node: null }
    ]
};

const ignoreTheLaugh = {
    id: 9,
    title: "Ignore the Laugh",
    description: "You ignore Emily and Sam's laugh, and are hit by panic, as you realize Jessica is nowhere to be seen",
    choices: [
        { name: "Call out for Jessica", node: null },
        { name: "Look around for Jessica", node: null },
        { name: "Return home", node: null }
    ]
};

const laughWithThem = {
    id: 10,
    title: "Laugh with Emily",
    description: "You join in on the laughter, relieved by the harmless source of the rustling. However, your relief is short-lived as you realize Jessica is missing.",
    choices: [
        { name: "Call out for Jessica", node: null },
        { name: "Look around for Jessica", node: null },
        { name: "Return home", node: null }
    ]
};


const goToMausoleum = {
    id: 11,
    title: "Go to the Mausoleum",
    description: "As you approach the mausoleum, Sam gets nervous and wants to go home - but as you turn around to tell him to be quiet, you notice something - Jessica is gone.",
    choices: [
        { name: "Call out for Jessica", node: null },
        { name: "take a closer look at the mausoleum", node: null },
        { name: "Return home", node: null }
    ]
};
const lookForJessicaAtMausoleum = {
    id: 12,
    title: "Look for Jessica at mausoleum",
    description: "As you approach the mausoleum, Sam gets nervous and wants to go home - but as you approach the mausoleum, you notice the name 'Jessica' carved on the door",
    choices: [
        { name: "Call out for Jessica", node: null },
        { name: "Have a closer look at the mausoleum", node: null },
        { name: "Return home", node: null }
    ]
};


const callOutForJessica = {
    id: 13,
    title: "Call out for Jessica",
    description: getDescriptionForJessica(),
    choices: [
        { name: "Investigate the mausoleum", node: null },
        { name: "Run home", node: null }
    ]
};
//If id 9 or 10 has been used, the description should be different accordingly. 
function getDescriptionForJessica() {
    if (hasChosenSpecialPath()) {
        return "You call out Jessica's name, hoping for a response.";
    } else {
        return "You call out Jessica's name, hoping for a response. As you look around, your gaze falls upon a nearby mausoleum. On the door, you see the name 'Jessica' carved into the stone. Your heart races with anticipation as you wonder if she might be inside.";
    }
}

const lookAtMausoleum = {
    id: 14,
    title: "Look at mausoleum",
    description: "As you approach the mausoleum, Sam gets nervous and wants to go home - but as you approach the mausoleum, you notice the name 'Jessica' carved on the door",
    choices: [
        { name: "Investigate the mausoleum", node: null },
        { name: "Run home", node: null }
    ]
};

const investigateMausoleum = {
    id: 15,
    title: "Investigate the Mausoleum",
    description: "You approach the mausoleum, heart pounding, and push open the heavy door. Inside, the air grows colder, and the darkness seems to swallow you whole. You hear faint whispers echoing off the walls, and a sense of dread fills your being. Suddenly, a cold hand grabs your shoulder, sending a shiver down your spine. You turn around to find no one there, Sam and Emily has left you and run home... The heavy stone door slams shut behind you",
    choices: [
        { name: "Search for an exit", node: null },
        { name: "Accept your fate", node: null },
    ]
};


const acceptFate = {
    id: 16,
    title: "Accept your Fate",
    description: "As the darkness envelops you, you realize there's no escape. You close your eyes and accept your fate, knowing that you'll never leave this place.",
    choices: []
};

const keepSearching = {
    id: 17,
    title: "Keep Searching",
    description: "You search desperately for an exit, but the mausoleum seems to twist and turn, its corridors shifting endlessly. The whispers grow louder, mocking you, until finally, you can take no more. The darkness consumes you.",
    choices: []
};

const runHome = {
    id: 18,
    title: "Run Home",
    description: "You call out Jessica's name into the chilling silence, but there's no response. Suddenly, a feeling of dread washes over you, and you can't shake the sensation of being watched. With your heart racing, you turn and sprint back towards the entrance of the graveyard, desperate to escape the unnerving atmosphere. You've survived, but the feeling of being watched won't go away... did you really leave the graveyard alone?",
    choices: [
        { name: "Restart game", node: startNode }
    ]
};

// Connecting Nodes
startNode.choices[0].node = enterTheGraveyard;
startNode.choices[1].node = hesitateAndConsider;

enterTheGraveyard.choices[0].node = continueForward;
enterTheGraveyard.choices[1].node = exploreTheGraves;
enterTheGraveyard.choices[2].node = returnHome;

exploreTheGraves.choices[0].node = investigateRustling;
exploreTheGraves.choices[1].node = continueForward;
exploreTheGraves.choices[2].node = returnHome;

lookAround.choices[0].node = hasChosenSpecialPath() ? lookForJessicaAtMausoleum : goToMausoleum;
lookAround.choices[1].node = returnHome;

investigateRustling.choices[0].node = ignoreTheLaugh;
investigateRustling.choices[1].node = laughWithThem;
investigateRustling.choices[2].node = returnHome;

ignoreTheLaugh.choices[0].node = callOutForJessica;
ignoreTheLaugh.choices[1].node = lookAround;
ignoreTheLaugh.choices[2].node = returnHome;

laughWithThem.choices[0].node = callOutForJessica;
laughWithThem.choices[1].node = lookAround;
laughWithThem.choices[2].node = returnHome;

goToMausoleum.choices[0].node = callOutForJessica;
goToMausoleum.choices[1].node = lookAtMausoleum;
goToMausoleum.choices[2].node = returnHome;

lookForJessicaAtMausoleum.choices[0].node = callOutForJessica;
lookForJessicaAtMausoleum.choices[1].node = lookAtMausoleum;
lookForJessicaAtMausoleum.choices[2].node = returnHome;

callOutForJessica.choices[0].node = investigateMausoleum;
callOutForJessica.choices[1].node = runHome;

lookAtMausoleum.choices[0].node = investigateMausoleum;
lookAtMausoleum.choices[1].node = runHome; 

// Function to display nodes
function displayNode(node) {
    document.getElementById('nodeTitle').innerText = node.title;
    document.getElementById('nodeDescription').innerText = node.description;

    const choicesContainer = document.getElementById('choicesContainer');
    choicesContainer.innerHTML = '';  

    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.name;
        button.classList.add('choiceButton');
        button.onclick = function() {
            if (choice.node) {
                displayNode(choice.node);
            } else {
                console.log('Ending game');
            }
        };
        choicesContainer.appendChild(button);
    });
}

displayNode(startNode);  
