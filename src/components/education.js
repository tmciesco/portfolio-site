import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                </Cell>
                <Cell col={6}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={6}>
                <p>{this.props.schoolDegree}</p>
                </Cell>
                <Cell col={12}>
                <p style={{width: '75%', margin: 'auto', textAlign: 'justify'}} >{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;