import * as React from 'react';

interface HeaderProps {
    title: string,
    toggleFooter: () => void
};
interface HeaderState {};

export default class Header extends React.Component<HeaderProps, HeaderState> {

    handleToggleClick() {
        this.props.toggleFooter();
    }

    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <button onClick={this.handleToggleClick.bind(this)}>Toggle</button>
            </div>
        );
    }
}