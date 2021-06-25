function Test({test, increment, decrement}) {
    return (
      <div className="Test">
       {test}
       <button onClick={()=>increment()}>Dodaj</button>
       <button onClick={()=>decrement()}>Odejmuj</button>
      </div>
    );
  }
  
  
  export default Test;
  