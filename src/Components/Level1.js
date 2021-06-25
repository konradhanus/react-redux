import Level2 from './Level2';
import {TextContext} from './Tree';

function Level1() {
    return (
      <div className="Level1">
         <TextContext.Consumer>
          {text => text}
          </TextContext.Consumer>
         <Level2 />
      </div>
    );
  }
  
  
  export default Level1;
  