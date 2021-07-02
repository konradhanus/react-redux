import { connect } from 'react-redux';
import Test from './index';
import { actionCreator } from './action';

export default connect(null, actionCreator)(Test);
