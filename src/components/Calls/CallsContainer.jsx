import React from 'react';
import { getCalls } from '../../api/api';

class CallsContainer extends React.Component {
    componentDidMount() {
        getCalls();
    }
    render() {
        return (
            <div>
                1
            </div>
        );
    }
}

export default CallsContainer;