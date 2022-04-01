// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function formatWords(a, b) {
  return a + b.replace('%', '').split('').reverse().join('');
}
console.log(formatWords('java', 'tpi%rcs'));
