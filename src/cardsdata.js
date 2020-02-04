import image1 from './pictures/cardPics/scrambledEggs.jpg';
import image2 from './pictures/cardPics/fannyPack.jpg';
import image3 from './pictures/cardPics/changeTire.jpg';

var cards = [
    {
        "id": 1,
        "filter":"warning",
        "image": image1,
        "title":"Scrambled Egg",
        "description":"Learn how to make scrambled eggs.",
        "link":"https://www.wikihow.com/Make-Scrambled-Eggs"
     },
     {
       "id": 2,
       "filter":"primary",
       "image": image2,
       "title":"Fanny Pack",
       "description":"Learn how to make a fanny pack.",
       "link":"https://www.wikihow.com/Make-a-Fanny-Pack"
    },
    {
        "id": 3,
        "filter":"secondary",
        "image": image3,
        "title":"Change a Tire",
        "description":"Learn how to change a tire.",
        "link":"https://www.wikihow.com/Change-a-Tire"
     }
];
export {cards};
// primary = craft
// warning = food
// secondary = auto
//
//
