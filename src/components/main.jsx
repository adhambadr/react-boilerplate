import React from 'react';

export default class Main extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <h4>
                {this.props.msg}
            </h4>
        );
    }
}