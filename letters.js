var obfuscateWord = function(letters) {
    this.blank = function() {
        return "_";
    };
    this.space = function() {
        return " ";
    };
};

module.exports = obfuscateWord;