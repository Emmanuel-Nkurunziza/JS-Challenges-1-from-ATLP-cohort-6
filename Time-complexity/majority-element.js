
//Here We exploit and compare the 4  Algorithm and their complexity analysis


// --------------------////////////////////////////


// Method #1: BASIC SOLUTION

// Approach: The basic solution is to have two loops and keep track of the maximum count for all different elements. 
// If maximum count becomes greater than n/2 then break the loops and return the element having maximum count. 
// If the maximum count doesn’t become more than n/2 then the majority element doesn’t exist.

// Algorithm: 

// 1. Create a variable to store the max count, count = 0
// 2. Traverse through the array from start to end.
// 3. For every element in the array run another loop to find the count of similar elements in the given array.
// 4. If the count is greater than the max count update the max count and store the index in another variable.
// 5. If the maximum count is greater than the half the size of the array, print the element. 
//     Else print there is no majority element.



// Javascript program to find Majority
// element in an array
 
// Function to find Majority element
// in an array

function findMajority(arr, n)
{
    var startTime1 = performance.now();
    let maxCount = 0;
    let index = -1; // sentinels
     
    for(let i = 0; i < n; i++)
    {
        let count = 0;
        for(let j = 0; j < n; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
 
        // Update maxCount if count of
        // current element is greater
        if (count > maxCount)
        {
            maxCount = count;
            index = i;
        }
    }

    var endTime1 = performance.now();
    var timeDiff1 = endTime1 - startTime1; //in ms 

 
    // If maxCount is greater than n/2
    // return the corresponding element
    if (maxCount > n / 2) {
        console.log (`
        ALGORITHM #1 (BASIC ALGORITHM). It uses 2 nested loops which are used to traverse the array from start to end\

        the Majority Element is ` + arr[index] +'  and the time to find it is ' + timeDiff1 +`  milliseconds\

        in this case the the time complexity is O(n^2) or O(n*n)\

        and the Auxiliary Space: O(1), as no extra space is required for any operation so the space complexity is constant.
        `)
    }


    else
        console.log(`
        ALGORITHM #1 (BASIC ALGORITHM)\

        No Majority Element
        `);
}

 
// to test the code
 let arr = [ 1, 1, 2, 1, 3, 5, 1 ]; // the Majority Element is 1
// let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4] // the Majority Element is 4
//let arr = [3, 3, 4, 2, 4, 4, 2, 4] // No Majority Element
// let arr = [3,1,3,4,4,5,3,5,3,3,3,6,3] // the Majority Element is 3
//let arr =	[3,1,3,4,4] // No Majority Element

let n = arr.length;
 
// Function calling
findMajority(arr, n);



//*****************************************************




// METHOD 2 (Using Moore’s Voting Algorithm):   

// Approach: This is a two-step process. 
// The first step gives the element that maybe the majority element in the array. 
// If there is a majority element in an array, then this step will definitely return majority element, 
// otherwise, it will return candidate for majority element.
// Check if the element obtained from the above step is majority element. This step is necessary as there might be no majority element.
 
// Algorithm: 
// 1. Loop through each element and maintains a count of majority element, and a majority index, maj_index
// 2. If the next element is same then increment the count if the next element is not same then decrement the count.
// 3. if the count reaches 0 then changes the maj_index to the current element and set the count again to 1.
// 4. Now again traverse through the array and find the count of majority element found.
// 5. If the count is greater than half the size of the array, print the element
// 6. Else print that there is no majority element


// Javascript Program for finding out majority element in an array
     
    /* Function to print Majority Element */
    function printMajority(a, size)
    {
        var startTime2 = performance.now();
        /* Find the candidate for Majority*/
        let cand = findCandidate(a, size);
  
        /* Print the candidate if it is Majority*/
        if (isMajority(a, size, cand)) {
            var endTime2 = performance.now();
            var timeDiff2 = endTime2 - startTime2; //in ms 

            console.log (`
            ALGORITHM #2 (MOORE’S VOTING ALGORITHM). It uses two traversal of the array \
    
            the Majority Element is ` + cand +'  and the time to find it is ' + timeDiff2 +`  milliseconds\
    
            in this case the Time Complexity: O(n) which is linear\
    
            and the Auxiliary Space: O(1), as no extra space is required for any operation so the space complexity is constant.
            `)

        }
            
        else
            console.log(`
            ALGORITHM #2\

            No Majority Element
            `);
    }
  
    /* Function to find the candidate for Majority */
    function findCandidate(a, size)
    {
        let maj_index = 0, count = 1;
        let i;
        for (i = 1; i < size; i++) {
            if (a[maj_index] == a[i])
                count++;
            else
                count--;
  
            if (count == 0) {
                maj_index = i;
                count = 1;
            }
        }
        return a[maj_index];
    }
  
    // Function to check if the candidate
    // occurs more than n/2 times
    function isMajority(a, size, cand)
    {
        let i, count = 0;
        for (i = 0; i < size; i++) {
            if (a[i] == cand)
                count++;
        }
        if (count > parseInt(size / 2, 10))
            return true;
        else
            return false;
    }


     // to test the code
// let a = [ 1, 3, 3, 1, 2 ];
let a = [ 2, 1, 2, 1, 2, 5, 2 ]; // the Majority Element is 2
// let a = [3, 3, 4, 2, 4, 4, 2, 4, 4] // the Majority Element is 4
//let a = [3, 3, 4, 2, 4, 4, 2, 4] // No Majority Element
 // let a = [3,1,3,4,4,5,3,5,3,3,3,6,3] // the Majority Element is 3
    // let a = [3,1,3,4,4] // No Majority Element
    let size = a.length;
 
    // Function call
    printMajority(a, size);




//*****************************************************




// METHOD 3 (Using Hashmap Algorithm):   

// Approach: This method is somewhat similar to Moore voting algorithm in terms of time complexity, but in this case, 
// there is no need for the second step of Moore voting algorithm. But as usual, here space complexity becomes O(n). 
// In Hashmap(key-value pair), at value, maintain a count for each element(key) 
// and whenever the count is greater than half of the array length, return that key(majority element). 
 
// Algorithm:
// Create a hashmap to store a key-value pair, i.e. element-frequency pair.
// Traverse the array from start to end.
// For every element in the array, insert the element in the hashmap if the element does not exist as key, else fetch the value of the key ( array[i] ), and increase the value by 1
// If the count is greater than half then print the majority element and break.
// If no majority element is found print “No Majority element”


// Javascript program for the above approach
 
function findMajorityHashmap(arr)
{
    var startTime3 = performance.now();
    let map = new Map();

    for(let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
                let count = map.get(arr[i]) +1;
                if (count > arr.length /2) {
                    var endTime3 = performance.now();
                    var timeDiff3 = endTime3 - startTime3; //in ms 
                    console.log (`
                    ALGORITHM #3 (HASHMAP ALGORITHM). It uses one traversal of the array \
            
                    the Majority Element is ` + arr[i] +'  and the time to find it is ' + timeDiff3 +`  milliseconds\
            
                    in this case the Time Complexity: O(n) which is linear\
            
                    and the Auxiliary Space: O(n): linear, Since a hashmap requires linear space.
                    `)
                    // console.log("Majority found is:" + arr[i]);
                    return;
                } else
                    map.set(arr[i], count);

        }
        else
            map.set(arr[i],1);
        }
        console.log(`
        ALGORITHM #3 (HASHMAP ALGORITHM)\

        No Majority element
        `);
}
 

     // to test the code
// let b = [ 1, 3, 3, 1, 2 ];
// let b = [ 1, 1, 2, 1, 3, 5, 1 ]; // the Majority Element is 1
// let b = [3, 3, 4, 2, 4, 4, 2, 4, 4] // the Majority Element is 4
//let b = [3, 3, 4, 2, 4, 4, 2, 4] // No Majority Element
 let b = [3, 5, 3, 3, 3, 6, 3] // the Majority Element is 3
//let b = [3,1,3,4,4] // No Majority Element
//let b = [ 2,2,2,2,5,5,2,3,3 ];
     
findMajorityHashmap(b);




//*****************************************************




// METHOD 4 (SORTING METHOD):   


// Approach: The idea is to sort the array. Sorting makes similar elements in the array adjacent, 
// so traverse the array and update the count until the present element is similar to the previous one. 
// If the frequency is more than half the size of the array, print the majority element.

// Algorithm:
// Sort the array and create a variable count and previous, prev = INT_MIN.
// Traverse the element from start to end.
// If the current element is equal to the previous element increase the count.
// Else set the count to 1.
// If the count is greater than half the size of array, print the element as majority element and break.
// If no majority element found, print “No majority element”


    // Javascript program to find Majority
    // element in an array
     
    // Function to find Majority element
    // in an array it returns -1 if there
    // is no majority element 

    function majorityElement(arr, n)
    {
 
        var startTime4 = performance.now();
        // Sort the array in O(nlogn)
        arr.sort(function(a, b){return a - b});
 
        let count = 1, max_ele = -1,
             temp = arr[0], ele = 0,
                f = 0;
 
        for(let i = 1; i < n; i++)
        {
 
            // Increases the count if the
            // same element occurs otherwise
            // starts counting new element
            if (temp == arr[i])
            {
                count++;
            }
            else
            {
                count = 1;
                temp = arr[i];
            }
 
            // Sets maximum count and stores
            // maximum occurred element so far
            // if maximum count becomes greater
            // than n/2 it breaks out setting
            // the flag
            if (max_ele < count)
            {
                max_ele = count;
                ele = arr[i];
 
                if (max_ele > parseInt(n / 2, 10))
                {
                    f = 1;
                    break;
                }
            }
        }
 
        // Returns maximum occurred element
        // if there is no such element, returns -1

        if (f == 1) {

            var endTime4 = performance.now();
            var timeDiff4 = endTime4 - startTime4; //in ms 

            console.log (`
            ALGORITHM #4 (SORTING ALGORITHM). Sorting makes similar elements in the array adjacent \
    
            the Majority Element is ` + ele +'  and the time to find it is ' + timeDiff4 +`  milliseconds\
    
            in this case Sorting requires O(n log n) time complexity\
    
            and the Auxiliary Space: O(1) as no extra space is required.
            `)

            return;

        }

        else console.log(`
        ALGORITHM #4 (SORTING ALGORITHM)\

        No majority element!
        `)

    }



         // to test the code
// let x = [ 1, 3, 3, 1, 2 ];
// let x = [ 1, 1, 2, 1, 3, 5, 1 ]; // the Majority Element is 1
 let x = [3, 4, 2, 4, 2, 4, 4] // the Majority Element is 4
//let x = [3, 3, 4, 2, 4, 4, 2, 4] // No Majority Element
// let x = [3,1,3,4,4,5,3,5,3,3,3,6,3] // the Majority Element is 3
//let x = [3,1,3,4,4] // No Majority Element
// let x = [ 2,2,2,2,5,5,2,3,3 ];
let y = x.length;
majorityElement(x, y);