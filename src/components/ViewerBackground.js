import React, { Component } from 'react';

class ViewerBg extends Component {

 


    render() {
        const styles = {
                 background: 'red',
                position: 'absolute',
                fontSize: 100,
                zIndex: '-2',
                display: 'block',        };

        return <div style={styles}>ok ok</div>
    }


}

export default ViewerBg;