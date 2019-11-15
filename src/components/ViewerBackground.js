import React, { Component } from 'react';
import { directive } from '@babel/types';

class ViewerBg extends Component {

 


    render() {
        const styles = {
                position: 'absolute',
                fontSize: 200,
                zIndex: '-2',
                left : '50%',
                transform: 'translateX(-50%)',
                display: 'block',        
            };

        return ( <div>
                     <div style={styles}>ok</div>
                     <h2>boomer</h2>

                 </div>

                );
             }       

}

export default ViewerBg;