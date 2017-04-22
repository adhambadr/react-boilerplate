import React from 'react';

export default class Main extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-2">
                        <p>{this.props.msg}</p>
                    </div>
                </div>
            </div>
        );
    }
}