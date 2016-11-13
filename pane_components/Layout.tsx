import * as React from 'react';

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {};
interface LayoutState {};

export default class Layout extends React.Component<LayoutProps, LayoutState> {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}