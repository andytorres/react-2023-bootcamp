import foods from "./foods";
import choice, { remove } from "./helpers";

const rnd_food = choice(foods);
console.log('I’d like one ' + rnd_food + ', please.');
console.log('Here you go: ' + rnd_food);
console.log('Delicious! May I have another?');
remove(foods, rnd_food);
console.log(`I’m sorry, we’re all out. We have ${foods.length} left.`);