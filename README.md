---

# HangManGame 🎮

![Hangman Game](https://tse3.mm.bing.net/th?id=OIP.k5dAenZuFM_CNVHOTiJxawHaNK&pid=Api)  

Welcome to the HangManGame repository! This project is a classic Hangman game built using React. It includes a backend service, `wordServer`, that provides words for the game.

---

## About HangManGame  

HangManGame is a web-based implementation of the classic Hangman word-guessing game. Players attempt to guess a hidden word by suggesting letters within a limited number of attempts. Each incorrect guess brings the player closer to completing the hangman figure, and the game is lost if the figure is fully drawn before the word is guessed.

---

## Getting Started  

To set up and run the HangManGame on your local machine, follow these steps:  

---

### Prerequisites  

Ensure you have the following installed:  

- [Node.js](https://nodejs.org/) (version 14 or later)  
- [npm](https://www.npmjs.com/) (Node Package Manager)  

---

### Installation  

1. **Clone the Repository**  

   Open your terminal and run:  
   ```bash
   git clone https://github.com/way2masoom/HangManGame.git
   cd HangManGame
   ```

2. **Install Dependencies**  

   Navigate to the `HangmanGame` directory and install the required dependencies:  
   ```bash
   npm install
   ```

3. **Start the React Application**  

   After installing the dependencies, start the React application:  
   ```bash
   npm start
   ```  

   The application will run on `http://localhost:3000` by default.

---

## Running the `wordServer` Backend  

The `wordServer` provides the words used in the Hangman game. To set it up:  

1. **Navigate to the `wordServer` Directory**  
   ```bash
   cd ../WordServer
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start the Server**  
   ```bash
   npx json-server db.json
   ```

   The server will run on `http://localhost:3000` by default.  

---

## Contribution  

We welcome contributions from developers of all levels! 🚀  

If you'd like to contribute:  
1. Fork this repository.  
2. Create a new branch for your feature or bugfix.  
3. Commit your changes with clear and descriptive messages.  
4. Push your branch and open a pull request.  

Feel free to suggest new features, improve the code, or report issues.  

---

## Happy Coding! 😊  

---
