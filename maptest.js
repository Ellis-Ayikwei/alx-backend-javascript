#!/usr/bin/env node 
const joke = new Map()

joke.set('question', 'What is the best thing about Switzerland?')
joke.set('answer', 'I dont know, but the flag is a big plus.')

console.log(joke.get('question'))
console.log(joke.get('answer'))
console.log(joke)