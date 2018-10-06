import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../img/troy.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={avatar} alt="Troy in Mountains" style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '2rem'}}>Troy Ciesco</h2>
                        <h4 style={{color: 'grey'}}>Front-End Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis optio perspiciatis nobis beatae nulla doloremque debitis reiciendis sint dolorum sed libero quo totam, atque facilis praesentium, aliquam dolorem cum quam? Voluptate praesentium rerum minus quod ex similique? Tempora error ea blanditiis minima provident illum. Illo sit non animi accusantium?</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Location</h5>
                        <p>Mansfield, Connecticut</p>
                        <h5>Phone</h5>
                        <p>802-793-4933</p>
                        <h5>Email</h5>
                        <p>tmciesco@gmail.com</p>
                        <h5>Website</h5>
                        <p>tmciesco.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education startYear={2012} endYear={2019} schoolName={'Norwich University'} schoolDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis optio perspiciatis nobis beatae nulla doloremque debitis reiciendis sint dolorum sed libero quo totam, atque facilis praesentium, aliquam dolorem cum quam?'}/>
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience startYear={'May 2018'} endYear={'Sep 2018'} jobName={'NICABM'} jobDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis optio perspiciatis nobis beatae nulla doloremque debitis reiciendis sint dolorum sed libero quo totam, atque facilis praesentium, aliquam dolorem cum quam?'}/>
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills skill="html" progress='100'/>
                        <Skills skill="css" progress='100'/>
                        <Skills skill="js" progress='80'/>
                        <Skills skill="React" progress='50'/>
                        <Skills skill="Adobe" progress='40'/>
                        <Skills skill="SQL" progress='40'/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;