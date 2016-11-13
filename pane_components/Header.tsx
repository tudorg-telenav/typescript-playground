import * as React from 'react';

interface HeaderProps {};
interface HeaderState {};

export default class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return (
            <h1>Header</h1>
        );
    }
}