function duplicateEncode(word){
  var wordObject = {};
  word.toLowerCase().split('').forEach(function(letter) {
    if(wordObject.hasOwnProperty(letter)) {
      wordObject[letter]++;
    } else {
      wordObject[letter] = 1;
    }
  });
  word = word.toLowerCase().split('').map(function(letter) {
      if(wordObject[letter] > 1) {
      return ')';
    } else {
      return '(';
    }
  }).join('');
  return word;
}