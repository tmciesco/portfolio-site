import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                </Cell>
                <Cell col={6}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={6}>
                <p>{this.props.jobPosition}</p>
                </Cell>
                <Cell col={12}>
                <p style={{width: '75%', margin: 'auto', textAlign: 'justify'}} >{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;