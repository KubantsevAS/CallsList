import React from 'react';
import { getCalls } from '../../api/api';

class CallsContainer extends React.Component {
    componentDidMount() {
        console.log(getCalls('2023-02-23', '2023-02-25'));
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