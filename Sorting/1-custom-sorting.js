
function nonPrimes (arr) {

        var numbers = arr; 
        var nonPrimes = [];
        for (i = 0; i < numbers.length; i++) { 
            num = numbers[i]*1;     
        function isPrime(num) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i == 0)
                return false;
            } if (num > 1)
            return true;
        }
        if (isPrime(num) !== true)  {
             nonPrimes.push(numbers[i]);
        }  
        }
        
        //sorting nonprimes in a descending order

        for (var i = 0; i < nonPrimes.length; i++) {
            var target = nonPrimes[i];
            for (var j = i - 1; j >= 0 && (nonPrimes[j] < target); j--) {
                nonPrimes[j+1] = nonPrimes[j];
            }
            nonPrimes[j+1] = target;
        }

        var sortedNonPrimes= nonPrimes; // the nonprimes have sorted by the above for loop

    return sortedNonPrimes;
}



console.log(nonPrimes ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])); 


