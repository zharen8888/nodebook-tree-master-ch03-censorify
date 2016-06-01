var cenWords = ["a","b","c"];
var cusWords = [];
function censor(instr) {
   for (idx in  cenWords){
  instr = instr.replace(cenWords[idx],"cccccc");
}
   for (idx in cusWords) {
  instr = instr.replace(cenWords[idx],"dddddd");
}
 return instr;
}
function addcenWords(word){
  cusWords.push(word)
}
function getcenWords(){
  return cenWords.concat(cusWords);
}
exports.censor = censor;
exports.addcenWords = addcenWords;
exports.getcenWords = getcenWords;