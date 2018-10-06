import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily:'Lato'}}>
                            802-793-4933</ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily:'Lato'}}>
                            tmciesco@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily:'Lato'}}>
                        <a href="https://www.facebook.com/troyciesco" target="_blank" style={{color:'#333333'}}><FontAwesomeIcon className="list-icon" icon={['fab', 'facebook']} /></a><a href="https://www.linkedin.com/in/troyciesco" target="_blank" style={{color:'#333333'}}><FontAwesomeIcon className="list-icon" icon={['fab', 'linkedin']} /></a><a href="https://www.github.com/tmciesco" target="_blank" style={{color:'#333333'}}><FontAwesomeIcon className="list-icon" icon={['fab', 'github']} /></a></ListItemContent>
                        </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;