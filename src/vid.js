import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import React from 'react';
class vid extends React.Component {

render() {
    return (
        <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff 
            }}>
            <source src="http://sourcefile.webm" type="video/webm" />
           
        </Video>
    );
}
}
export default vid;

