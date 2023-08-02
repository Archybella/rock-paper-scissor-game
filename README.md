To get started with the Rock Paper Scissors game, these are the steps I followed:

Created a Git repo for my project 
created a blank HTML document with an external JavaScript file (e.g., script.js) linked to it.

Defined a function called getComputerChoice() that will randomly return either 'Rock', 'Paper', or 'Scissors' as the computer's play.

Wrote a function called playRound(playerSelection, computerSelection) that plays a single round of Rock Paper Scissors. This function will take the player's selection (case-insensitive) and the computer's selection as parameters and return a string that declares the winner of the round.

Created a new function, game() that will play a 5 round game, keep score, and report the winner or loser at the end. This function will call the playRound() function five times in a row.

Used console.log() to display the results of each round and the winner at the end. You can use prompt() to get input from the user for their selection.