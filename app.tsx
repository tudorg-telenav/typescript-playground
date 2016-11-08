
import * as React from 'react';
import * as ReactDOM from 'react-dom';

navigator.getUserMedia(
    {
        video: true
    },
    function(stream) {
        var camera =  document.getElementById('camera') as HTMLImageElement;
        camera.src = URL.createObjectURL(stream);

        // TODO: the DOM loads when we are here, but only by mistake (webcam init takes a long time)
        ReactDOM.render(
            <h4>Hello, world!</h4>,
            document.getElementById('hello')
        );
    },
    function() {
        alert('could not connect stream');
    }
);