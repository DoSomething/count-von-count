getDigitsFromString = function(string) {

  var numberWordArray = ['hundred', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion'];

  var smallNums = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
  };

  var largeNums = {
    'thousand':     1000,
    'million':      1000000,
    'billion':      1000000000,
    'trillion':     1000000000000,
    'quadrillion':  1000000000000000,
    'quintillion':  1000000000000000000,
    'sextillion':   1000000000000000000000,
    'septillion':   1000000000000000000000000,
    'octillion':    1000000000000000000000000000,
    'nonillion':    1000000000000000000000000000000,
    'decillion':    1000000000000000000000000000000000
  };

  var numericalElementArray, total, localSum;

  function textToNumber(text) {
    numericalElementArray = text.toString().toLowerCase()
                                // replace everything in the string that's not alphanumeric with whitespace
                                .replace(/\W+/g, " ")
                                // replace everything in the string that's not a spelled number or a numerals with whitespace, then trims leading and following whitespace
                                .replace(/\b(?!(?:hundred|zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion|octillion|nonillion|decillion|\d+)\b)[a-zA-Z0-9]+\b/g, " ").trim()
                                // Creates an array by splitting on whitespace
                                .split(/[\s-]+/);
    total = 0;
    localSum = 0;

    // Checks if an input is a/are digit(s)
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    for (var i=0; i < numericalElementArray.length; i++) {
      var element = numericalElementArray[i]
      // If the element is a/are already digit(s)
      if (isNumeric(element)) {
        localSum = localSum + parseFloat(element);
      }
      // If the element is a spelled number
      else {
        var integer = smallNums[element];
        if (integer != null) {
          localSum = localSum + integer;
        }
        else if (element == "hundred") {
          if (localSum) {
            localSum = localSum * 100;  
          }
          // Accounts for when user inputs "a hundred" or "hundred"
          else if (i === 0) {
            total = 100
          }
        }
        else {
          integer = largeNums[element];
          if (integer != null) {
            total = total + localSum * integer
            localSum = 0;
          }
          else { 
            // Returns false if this array element is not a valid parseable number. 
            return false;
          }
        }
      }
    }
    return total + localSum;
  }
  return textToNumber(string);
}

module.exports = getDigitsFromString;