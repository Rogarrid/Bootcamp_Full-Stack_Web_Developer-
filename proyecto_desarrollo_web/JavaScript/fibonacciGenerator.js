function fibonacciGenerator (n) {
	//Do NOT change any of the code above 👆

		//Write your code here:
		var fibonacciSequence = [];
		var numbersRepetitions = n;
		if (n > 0)
		{
			n = 1;
			while (n <= numbersRepetitions)
			{
				if (n == 1)
					fibonacciSequence.push(0);
				else if (n == 2)
					fibonacciSequence.push(1)
				else
					fibonacciSequence.push(fibonacciSequence[n - 2] + fibonacciSequence[n - 3])
				n++;
			}
		}
		console.log (fibonacciSequence);

		//Return an array of fibonacci numbers starting from 0.

	//Do NOT change any of the code below 👇
	}

