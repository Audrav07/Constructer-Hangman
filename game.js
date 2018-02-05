//Random word is selected and exported
var wordBank = ['peonies', 'garden roses', 'buttercup', 'columbine', 'indian paintbrush', 'bluebell', 'lily', 'poppy', 'chrysanthemum', 'sunflower', 'lilac', 'carnations', 'hydrangea', 'gladiolus', 'iris', 'orchids', 'snapdragon', 'succulents', 'tulips', 'aster', 'birds of paradise', 'freesia', 'begonia', 'daffodil', 'marigold'];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;