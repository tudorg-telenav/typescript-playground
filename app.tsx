import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Router,
    Route,
    Redirect,
    Link,
    browserHistory
} from 'react-router';

import Layout from "./pane_components/Layout"

// import * as fs from 'fs';

// fs.readFile('tsconfig.json', {encoding: 'utf8'}, (err: NodeJS.ErrnoException, buffer: string) => {

//     let fileContent: JSON = JSON.parse(buffer);
    
//     const appElement: Element = document.getElementById('app');
//     // ReactDOM.render(<Layout fileContent={JSON.stringify(fileContent, null, 4)}/>, appElement);
//     ReactDOM.render(
//         <Router history={browserHistory}>
//             <Route path="*" component={Layout}>
//             </Route>
//         </Router>,
//         appElement
//     );
// });

const appElement: Element = document.getElementById('app');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="home" component={Layout}>
        </Route>
        <Redirect path="*" to="home" />
    </Router>,
    appElement
);