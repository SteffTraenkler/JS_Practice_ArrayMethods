//Lev1_1
console.log('%c Lev1_1 Arrays', 'color: darkred; font-weight: 900;');
console.log(' ');

let addreArr = [
    'streetlol',
    'plznope',
    'citylacks',

]

let bestFriendsArr = [
    'Doe',
    'Jane Doe',
    'Autopsy'
]

let personArr = [
    'namey',
    'firstnames',
    'nicks',
    'ages',
    'hobbies',
    'birthPlace',
    'SuperCode'
]
console.log('BestFriendos ' + bestFriendsArr);
console.log('Person' + personArr);
console.log('Adresses' + addreArr);
console.log('%c Array in Arrays', 'color: green; font-weight: 900;');
let addreArr2 = [
    'streetlol',
    'plznope',
    'citylacks',
    bestFriendsArr = [
        'Doe',
        'Jane Doe',
        'Autopsy'
    ],
    personArr = [
        'namey',
        'firstnames',
        'nicks',
        'ages',
        'hobbies',
        'birthPlace',
        'SuperCode'
    ]
]
console.log('adresses and other Arrays : ' + addreArr2);
console.log('This is the Array bestFriends etc. ' + addreArr2[3]);
console.log('This is the Array personblub' + addreArr2[4]);

//Lev1_1_2
console.log('%c Lev1_1_2 Arrays Length', 'color: darkred; font-weight: 900;');
console.log('This is the array length of personArr: ' + personArr.length);
console.log('This is the array length of addreArr: ' + addreArr.length);
console.log('This is the array length of bestFriendsArr: ' + bestFriendsArr.length);

//Lev1_2
console.log(' ');
console.log('%c Lev1_2 Create arrays', 'color: darkred; font-weight: 900;');

let meineTrainer1 = [
    'Eric',
    'Steffen',
    'Simon',
    'Finn'
]
console.log(meineTrainer1);

let meineTrainer2 = new Array('Eric', 'Steffen', 'Simon', 'Finn');
console.log(meineTrainer2);

let meineTrainer3 = new Array();
meineTrainer3[0] = 'Eric';
meineTrainer3[1] = 'Steffen';
meineTrainer3[2] = 'Simon';
meineTrainer3[3] = 'Finn';

console.log(meineTrainer3);

//Lev1_3
console.log(' ');
console.log('%c Lev1_3 Arrays index', 'color: darkred; font-weight: 900;');

let numberArray = new Array(5, 6, 7, 8, 9, 10);
console.log(numberArray);

console.log('Index 0: ' + numberArray[0]);
console.log('Index 1: ' + numberArray[1]);
console.log('Index 2: ' + numberArray[2]);
console.log('Index 3: ' + numberArray[3]);
console.log('Index 4: ' + numberArray[4]);
console.log('Index 5: ' + numberArray[5]);

//Lev1_4
console.log(' ');
console.log('%c Lev1_4 Arrays Split', 'color: darkred; font-weight: 900;');

let meinText1 = ('Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.');
let meinText2 = ('Wie geht es dir heute?');
let meinText3 = ('Heute ist ein großer Tag für uns.');

let split1 = meinText1.split();
let split2 = meinText1.split('');
let split3 = meinText1.split(' ');

console.log(split1);
console.log(split2);
console.log(split3);

let split12 = meinText2.split();
let split22 = meinText2.split('');
let split32 = meinText2.split(' ');

console.log(split12);
console.log(split22);
console.log(split32);

let split13 = meinText3.split();
let split23 = meinText3.split('');
let split33 = meinText3.split(' ');

console.log(split13);
console.log(split23);
console.log(split33);

//Lev1_5
console.log(' ');
console.log('%c Lev1_5 Arrays Push', 'color: darkred; font-weight: 900;');

let songs = new Array('Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California');
console.log(songs);
let totalSongs = songs.push('Last Heaven');
console.log('This is total Songs: ' + totalSongs + ' - it doesnt work -.-');
console.log(songs);

let whatever = new Array('No', 'Interest', 'in', 'Football');
console.log(whatever);
whatever.push('Yes', 'Im', 'Serious');
console.log(whatever);

const artists = ['Diru', 'Gazette', 'Uruha'];
console.log(artists);
artists.push('Reita', 'Ruki');
console.log(artists);

//Lev1_5_2
console.log(' ');
console.log('%c Lev1_5_2 Arrays Push', 'color: darkred; font-weight: 900;');

let heroAndEnemy = [
    dc = ['Batman', 'Joker'],
    marvelX = ['Professor X', 'Magneto'],
    mythology = ['Thor', 'Loki'],
]

heroAndEnemy.push(vicious = ['Eli', 'Victor'], discworld = ['Vimes', 'Carcer'], jjk = ['Geto', 'Gojo']);

console.log(heroAndEnemy);

//Lev1_6
console.log(' ');
console.log('%c Lev1_6 Arrays Pop', 'color: darkred; font-weight: 900;');

console.log(songs);
let deletedSongs = songs.pop();
console.log(songs);
console.log(deletedSongs);

console.log(whatever);
let deletedWhatever = whatever.pop();
console.log(whatever);
console.log(deletedWhatever);
whatever.pop();
whatever.pop();
whatever.pop();
console.log(whatever);

//Lev1_7
console.log(' ');
console.log('%c Lev1_7 Arrays Unshift', 'color: darkred; font-weight: 900;');

let deutscheGerichte = ['Speckkuchen', 'Thüringer Rostbratwurst', 'Quarkkeulchen', 'Sauerbraten'];
console.log(deutscheGerichte);
deutscheGerichte.unshift('Dampfnudeln', 'Topfenfleckerl', 'Kaiserschmarrn', 'Knödel', 'Auszogene');
console.log(deutscheGerichte);

//Lev1_8
console.log(' ');
console.log('%c Lev1_8 Arrays Shift', 'color: darkred; font-weight: 900;');

let Gut = [deutscheGerichte.shift(), deutscheGerichte.shift(), deutscheGerichte.shift()]
console.log(Gut);
console.log(deutscheGerichte);

//Lev1_9
console.log(' ');
console.log('%c Lev1_9 Push Pop Shift Unshift Difference', 'color: darkred; font-weight: 900;');

let arrayMixed = [23, 54, 75];
console.log(arrayMixed);
arrayMixed.push(44, 76, 98, 23, 12);
console.log(arrayMixed);
arrayMixed.push(90, 58, 85, 98, 99);
console.log(arrayMixed);
arrayMixed.pop();
arrayMixed.pop();
console.log(arrayMixed);
arrayMixed.shift();
arrayMixed.shift();
console.log(arrayMixed);

//Lev1_10
console.log(' ');
console.log('%c Lev1_10 Arrays delete with Splice()', 'color: darkred; font-weight: 900;');

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

let delImg1 = array.splice(4, 4);
console.log('delImg1');
console.log(delImg1);
console.log('array');
console.log(array);
console.log(array.indexOf("imageTeilnehmer010supercode.jpg"));
let delImg2 = array.splice(6, 5);
console.log('delImg2');
console.log(delImg2);
console.log(array);
let delImg3 = array.splice(2);
console.log('delImg3');
console.log(delImg3);
console.log('array rest');
console.log(array);

//Lev1_11
console.log(' ');
console.log('%c Lev1_11 Arrays add with Splice()', 'color: darkred; font-weight: 900;');

array.splice(2, 3, "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg");

console.log(array);

array.splice(5, 6, "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg");

console.log(array);

array.splice(0, 20, "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg");
console.log(array);

//Lev1_12
console.log(' ');
console.log('%c Lev1_12 Arrays Slice()', 'color: darkred; font-weight: 900;');

let array2 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

console.log(array2);

let copyImg1 = array2.slice(7, 15);
console.log(copyImg1);
console.log(array2);
let copyImg2 = array2.slice(6, 12);
console.log(copyImg2);