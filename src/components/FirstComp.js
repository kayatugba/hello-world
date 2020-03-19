import React, { Component } from 'react';

export default class FirstComp extends React.Component{
    constructor()
    {
        super();
        this.name = "Will";
    }

    render()
    {
        return (
        <h1>Its {this.name}!</h1>
        )
    };
}

