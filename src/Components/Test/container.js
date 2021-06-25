import { connect } from 'react-redux';
import Test from './index';
import { actionCreator } from './action';

const mapStateToProps = (state) => ({
    test: state.test
})

export default connect(mapStateToProps, actionCreator)(Test);
