import * as React from 'react';

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {};
interface LayoutState {
    isHeaderVisible: boolean,
    isFooterVisible: boolean,
    title: string
};

export default class Layout extends React.Component<LayoutProps, LayoutState> {

    constructor() {
        super();
        this.state = {
            isHeaderVisible: true,
            isFooterVisible: true,
            title: 'Test App'
        };
    }

    toggleFooter() {
        if (this.state.isFooterVisible) {
            this.state.isFooterVisible = false;
        } else {
            this.state.isFooterVisible = true;
        }
    }

    render() {
        return (
            <div>
                {this.state.isHeaderVisible ? <Header toggleFooter={this.toggleFooter.bind(this)} title={this.state.title} /> : null}
                {this.state.isFooterVisible ? <Footer /> : null}
            </div>
        );
    }
}