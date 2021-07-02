import {TextContext} from '../Tree';

function Level3() {
    return (
      <div className="Level3">
          <TextContext.Consumer>
          {text => text}
          </TextContext.Consumer>
         
      </div>
    );
  }
  
  export default Level3;
  