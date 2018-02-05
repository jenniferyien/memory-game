# Memory Game

A simple memory game. A grid of cards will appear
on the screen. The user can click a card to "flip" it over and display an image. When 2 cards of the same image are flipped over, a match is made. To win the game, find all the matching cards.

## Lobby​ ​View

There are 4 options for the size of the game. 

Options are:
- 3x4
- 5x2
- 4x4
- 4x5

When one of the options is selected, the gameplay view opens and the game begins.

## Gameplay​ ​View

There are square cards laid out in a grid that matches the size of the selected grid from the
lobby view.
When a card is clicked, an image appears. The image appears until another card is clicked. If the second card matches the image of the first card, a match is made and both cards will disappear. If the
images do not match, the incorrect match continues to appear onscreen for 1 second, and then the images are
hidden and the card back appears again.

Cards are not actionable when their image is showing.
The game continues until all cards are matched. If the user wants to exit the game, a back button will be available in the upper left corner of the screen to exit back to the lobby. Once all cards are matched, the user can also exit
the game by pressing the back button. 

**There are NO "victory" notification at the moment.**

# Running Code

In the project directory, you can run:
### `npm install`

Install all the necessary packages. 

### `npm start`

It will runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
