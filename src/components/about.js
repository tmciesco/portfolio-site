import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import avatar from '../img/troy.jpg';
import Education from './education';
import Experience from './experience';

class About extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        
                        <h2>About Me</h2>
                        <img className="avatar-img" src="https://s3.amazonaws.com/tmciesco-content/img/chselfie.jpg" alt="Troy in mountains" style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '3rem', textAlign: 'justify'}} >I was born and raised in Connecticut, and I live right by Uconn. In my spare time I like running, hiking, reading, and playing video games. I'm a big Yankees fan and I love doing research in baseball analytics. I also root for the Dallas Cowboys and Toronto Raptors. One weekend a month I drill with the Army Reserve in New Hampshire.</p>
                        <h4>What I'm Doing Now (Updated Oct 2018)</h4>
                        <p style={{width: '75%', margin: 'auto', textAlign: 'justify'}} >I'm attending Norwich University for a Bachelor of Science in Cyber Security with a concentration in Computer Forensics and Vulnerability Management. Though I'm still in the early stages of the cyber security curriculum, I'm excited to build a well-rounded computer science background with this degree. The online format allows me to work full-time until I graduate in 2019, and even though I'm going to school for cyber security, my first passion is web development (I'm almost entirely self-taught).</p>
                        <p style={{width: '75%', margin: 'auto',paddingTop: '1rem', paddingBottom: '3rem', textAlign: 'justify'}} >I am currently accepting limited contract-for-hire work while I actively pursue a full-time web-development position with an awesome company. I work well in dynamic environments and can easily use my skills to help others with different projects or even fill multiple roles.</p>

                        <hr/>
                        <h2 >Resume</h2>
                        <a href="https://s3.amazonaws.com/tmciesco-content/img/resume-site.pdf" target="_blank"><Button raised colored ripple>Download PDF</Button></a>
                        <h3 className="header-color" style={{color:'white'}}>Education</h3>
                        <Education startYear={2012} endYear={2019} schoolName={'Norwich University'} schoolDegree={'B.S. in Cyber Security'} schoolDescription={'I am attending Norwich University online and I take 1-2 classes every 8 weeks. Skills learned include C++, SQL, and Windows Server Admin. I am currently taking Networking and Linux Server Admin.'}/>
                        <h3 className="header-color" style={{color:'white'}}>Military Experience</h3>
                        <Experience startYear={2013} endYear={'Present'} jobName={'94th Military Police Company'} jobPosition={'Team Leader: Corporal'} jobDescription={'In addition to my military police duties (which include law enforcement and combat support) I help the company manage solider information and fitness data. I am trained on interpersonal communication skills in high-stress police and military environments, and I am in charge of 2 soldiers.'}/>
                        <h3 className="header-color" style={{color:'white'}}>Work Experience</h3>
                        <Experience startYear={'May 2018'} endYear={'Sept 2018'} jobName={'NICABM'} jobPosition={'Computer Science Intern'} jobDescription={'I ran two membership sites and rebuilt a 200+ page website in a team of 4. Also responsible for Active Directory, email, database, and hardware management, and led 2 other interns.'}/>
                        <Experience startYear={2014} endYear={2016} jobName={'Ellington Planning Department'} jobPosition={'Land Use Technician'} jobDescription={'I was actively involved in the launch of a new website and became the go-to for questions from multiple departments. I taught myself HTML and CSS instead of using the drag-and-drop interface.'}/>
                        <h3 className="header-color" style={{color:'white'}}>Skills</h3>
                        <Grid style={{width:'80%'}}>
                            <Cell col={6}>
                            <h4 style={{textAlign:'center'}}>Top Skills</h4>
                            <ul style={{listStyle: 'none', textAlign: 'center', paddingInlineStart: '0'}}>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SCSS</li>
                                <li>JavaScript</li>
                                <li>WordPress</li>
                                <li>Adobe Suite</li>
                            </ul>
                            </Cell>
                            <Cell col={6}>
                            <h4 style={{textAlign:'center'}}>Some Experience</h4>
                            <ul style={{listStyle: 'none', textAlign: 'center', paddingInlineStart: '0'}}>
                                <li>SQL</li>
                                <li>React</li>
                                <li>Git</li>
                                <li>AWS</li>
                                <li>PHP</li>
                                <li>jQuery</li>
                            </ul>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;