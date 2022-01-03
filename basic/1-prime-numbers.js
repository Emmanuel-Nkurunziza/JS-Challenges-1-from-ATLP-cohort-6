// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 
// 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible 
// by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.



function primeNumbers (arr) {
    var numbers = arr; 
    var primes = [];
    for (i = 0; i < numbers.length; i++) { 
        num = numbers[i]*1;     
        // console.log(num);
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i == 0)
            return false;
        }
        return true;
    }
    // console.log(isPrime(num));
    if (isPrime(num) === true)  {
         primes.push(numbers[i]);
    }  
    
    }

   return primes;

}




console.log(primeNumbers ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])); 




//   Code Explanation:

//   We loop over all values in our range, displaying the number if they are prime.
//   Our primality checking function returns false if the target number is divisible by any number in between 2 
//   and the square root of the target number. We only need to check up to the square root because the square root 
//   of a number is the largest possible unique divisor.