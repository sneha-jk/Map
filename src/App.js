import React from "react"
  
function App() {
  
  // Declared an array of items
  const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune'
  ];

  // Some styling for the items
  const styles = {
  
    padding:'15px',
    margin: 'auto',
    width:'250px',
    border: '0.2px solid Lightgray',
    
  };
  
  return <>
    {
      /*  This maps each array item to a div adds
      the style declared above and return it */
      planets.map(planet => <div key={planet} 
            style={styles}>{planet}</div>)
    }
  </>;
}
  
export default App;