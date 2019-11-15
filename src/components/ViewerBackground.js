import React, { Component } from 'react';

class ViewerBg extends Component {

 


    render() {
        const styles = {
                position: 'absolute',
                fontSize: 200,
                zIndex: '-2',
                left : '50%',
                transform: 'translateX(-50%)',
                display: 'block',        };

        return <div style={styles}>ok ok</div>
    }


}

export default ViewerBg;