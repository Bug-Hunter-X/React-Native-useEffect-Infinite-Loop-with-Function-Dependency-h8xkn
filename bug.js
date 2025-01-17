This error occurs when using the `useEffect` hook in React Native with a dependency array that includes a function.  The function's reference changes on every render, causing the effect to run repeatedly.

```javascript
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect running!');
  }, [myFunction]); // myFunction is a function, creates infinite loop

  const myFunction = () => {
    console.log('Function called!');
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent;
```