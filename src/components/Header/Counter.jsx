import  { useState, useEffect } from 'react';

function Counter() {
  // State to store the counter value
  const [count, setCount] = useState(0);

  // useEffect to automatically update the counter every second
 useEffect(() => {
    // Check if the count is less than 10 before updating
    if (count < 10) {
      const interval = setInterval(() => {
        // Increment the counter value
        setCount(prevCount => prevCount + 1);
      }, 300); // Update every second

      // Cleanup function to clear the interval when the component unmounts or count reaches 10
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div>
      <h1 className='text-6xl font-sans'> <span className="font-bold ">#{count}</span>   <span>Jobs Per Day</span></h1>
    </div>
  );
}

export default Counter;
