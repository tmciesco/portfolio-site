import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0 ){
            return(
            <div>
                <h3 className="live-title">These are my live, real-world projects.</h3>
                <div className="projects-grid">
<Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '50px'}}>
                    <CardTitle style={{color: '#ffffff', height:'176px', background: 'url(https://s3.amazonaws.com/tmciesco-content/img/nicabm-logo.png) center / cover'}}>
                        NICABM
                    </CardTitle>
                    <CardText>
                    At NICABM, I ran two membership sites and rebuilt a 200+ page website in a team of 4. I also built weekly sales pages. Skills used include HTML, CSS, JavaScript, WordPress, SQL, and some PHP.
                    </CardText>
                    <CardActions border>
                    <a href="https://www.nicabm.com/faq" target="_blank"><Button colored>Live Site</Button></a>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '50px'}}>
                    <CardTitle style={{color: '#ffffff', height:'176px', background: 'url(https://s3.amazonaws.com/tmciesco-content/img/logo-og.png) center / cover'}}>
                        Portfolio
                    </CardTitle>
                    <CardText>
                        I built this portfolio site as an introduction to using React. I also knew that I would update it frequently, so I knew it would be a good opportunity to practice using version control on GitHub. I plan to move it to AWS.
                    </CardText>
                    <CardActions border>
                    <a href="https://www.github.com/tmciesco/portfolio-site" target="_blank"><Button colored>GitHub</Button></a>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '50px'}}>
                    <CardTitle style={{color: '#ffffff', height:'176px', background: 'url(https://s3.amazonaws.com/tmciesco-content/img/ams.png) center / cover'}}>
                        Abstract Moose Studios
                    </CardTitle>
                    <CardText>
                    I built this site to provide small business owners with web design and marketing services. Skilled used to build this site include HTML, CSS, JavaScript, and a little bit of jQuery. I set up the hosting and email for this site.
                    </CardText>
                    <CardActions border>
                    <a href="https://www.abstractmoose.com" target="_blank"><Button colored>Live Site</Button></a>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '50px'}}>
                    <CardTitle style={{color: '#333333', borderBottom: '1px solid black', height:'176px', background: 'url(https://s3.amazonaws.com/tmciesco-content/img/ellington-logo.png) center / cover'}}>
                        Ellington
                    </CardTitle>
                    <CardText>
                    I was actively involved in the launch of a new website and became the go-to for questions from multiple departments. I taught myself HTML and CSS instead of using the drag-and-drop interface.
                    </CardText>
                    <CardActions border>
                    <a href="https://www.ellington-ct.gov/267/Planning-Department" target="_blank"><Button colored>Live Site</Button></a>
                    </CardActions>
                </Card>
                </div>
            </div>

                
            )
        } else if (this.state.activeTab === 1){
            return(
                <div>
                    <h3 className="live-title">These are projects I've built through various courses.</h3>
                    <div className="projects-grid">
                
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '50px'}}>
                                <CardTitle style={{color: '#333333', borderBottom: '1px solid black', height:'176px', background: 'url(https://s3.amazonaws.com/tmciesco-content/img/natours.png) center / cover'}}>
                                        Natours
                                    </CardTitle>
                                    <CardText>
                                        This site is one of the projects from <a href="https://codingheroes.io/" target="_blank">Jonas Schmedtmann's</a> Advanced CSS and SASS Udemy course, which I highly recommend. This course taught me a lot about using interactivity on a webpage, and I've used a lot of the skills I learned in this course in my professional work. The main focus was writing SCSS. 
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://www.udemy.com/advanced-css-and-sass/" target="_blank"><Button colored>Course Page</Button></a>
                                    <a href="https://www.tmciesco.com/projects/natours" target="_blank"><Button colored>Live Demo</Button></a>
                                    </CardActions>
                                </Card>
                
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '50px'}}>
                                <CardTitle style={{color: '#333333', borderBottom: '1px solid black', height:'176px', background: 'url(https://s3.amazonaws.com/tmciesco-content/img/trillo.png) center / cover'}}>
                                        Trillo
                                    </CardTitle>
                                    <CardText>
                                    This is the second project from <a href="https://codingheroes.io/" target="_blank">Jonas Schmedtmann's</a>  Advanced CSS and SASS Udemy course, which I highly recommend. This course taught me a lot about using interactivity on a webpage, and I've used a lot of the skills I learned in this course in my professional work. The main focus was using flexbox.
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://www.udemy.com/advanced-css-and-sass/" target="_blank"><Button colored>Course Page</Button></a>
                                    <a href="https://www.tmciesco.com/projects/trillo" target="_blank"><Button colored>Live Demo</Button></a>
                                    </CardActions>
                                </Card>

                                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '50px'}}>
                                <CardTitle style={{color: '#333333', borderBottom: '1px solid black', height:'176px', background: 'url(https://s3.amazonaws.com/tmciesco-content/img/ideajot.png) center / cover'}}>
                                        IdeaJot
                                    </CardTitle>
                                    <CardText>
                                    This is a simple website for logging and saving different ideas. It's a CRUD application with registration and login that I built while learning NodeJS, Express, and MongoDB from <a href="https://www.traversymedia.com/" target="_blank">Traversy Media</a>. I added some minor cosmetic changes and used a different Bootstrap theme from Bootswatch, then deployed to Heroku.
                                    </CardText>
                                    <CardActions border>
                                    <a href="https://www.udemy.com/nodejs-express-mongodb-dev-to-deployment/" target="_blank"><Button colored>Course Page</Button></a>
                                    <a href="http://limitless-retreat-69056.herokuapp.com/" target="_blank"><Button colored>Live Demo</Button></a>
                                    </CardActions>
                                </Card>
                                </div>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>Live</Tab>
                    <Tab>Courses</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>  
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Portfolio;