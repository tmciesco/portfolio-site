import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <div className="banner-text">
                    <h1>Hey, I'm Troy.</h1>
                    <p>I'm a Front-End Developer from Connecticut.</p>
                    <Link to="/portfolio"><Button raised colored ripple>View Portfolio</Button></Link>
                    </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Landing;