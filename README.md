Count Von Count
===============

![](https://upload.wikimedia.org/wikipedia/en/2/29/Count_von_Count_kneeling.png)

A simple tool to filter a string for spelled numbers (one hundred), digits (1 hundred), or mixed numbers (1 hundred) and convert it all to digits (100).

## Installation

  `npm install count-von-count --save`

## Usage
```javascript
  var countVonCount = require('count-von-count');

  var stringToBeFiltered = "3 hundred 26 thousand five hundred and thirty-6";

  countVonCount(stringToBeFiltered); //returns 326536
```

## Tests

  `npm test`

## Limitations

  * Handles cases up to nine hundred and ninety nine decillion.
  * Does not handle cases where spelled numbers or digits are not separated from other words, spelled numbers, or digits by whitespace. 

## Release History

  * 0.1.0 initial release. 

