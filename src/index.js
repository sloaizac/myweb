import { skills, projects } from './content';
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const category = Object.keys(skills);

function Profile() {
    return (
        <section id="profile">
            <div className="row m-5">

                <img src="profile.jpg" alt="profile" className="col-md-4 col-lg-3 col-sm-6 rounded-circle p-3" />

                <div className="col-md-8 col-lg-8 col-sm-10 mt-3 p-2">
                    <h3>About me</h3>
                    <p>
                        I'm student of systems engineering, i am 20 years old, passionate for autodidact learning, sharing knwoledge and experiences, and the tech,
                        i like the sports and read, the work in team and tackling new challenges that be able to make an impact.
                    </p>
                </div>
            </div>
            <h1>FULL STACK DEVELOPER</h1>
        </section>
    )
}

function ProjectList() {
    return (
        <section id="projects">
            {projects.map(p => (
                <div className="container-fluid proj mt-5 p-3">
                    <div className="row d-flex">
                        <div className="col-md-6 col-lg-6 col-sm-8">
                            {
                                (p.photos) ? (
                                    <Carousel>
                                        {
                                            p.photos.map(p => (
                                                <Carousel.Item>
                                                    <img src={p} className="d-block w-100" alt="..." />
                                                </Carousel.Item>
                                            ))
                                        }
                                    </Carousel>) : (null)
                            }
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 m-3">
                            <h3>{p.name}</h3>
                            <span className="text-muted">{p.state}</span>
                            <p>{p.description}</p>
                            <div><a href={p.github}>Github</a></div>
                            {(p.url) ? (<div><a href={p.url}>URL</a></div>) : (null)}
                            {(p.youtube) ? (<div><a href={p.youtube}>Youtube</a></div>) : (null)}
                        </div>
                    </div>
                    <div className="row d-flex container p-2 mx-auto">
                        {p.technologies.map(t => (
                            <span className="mx-auto">
                                <img src={t + ".png"} alt="logo" title={t} />
                            </span>
                        ))}
                    </div>
                </div>

            ))}
        </section>
    )
}

function Skills() {
    return (
        <section id="skills">
            <div>
                <div className="row d-flex justify-content-between">
                    {category.map(c => (
                        <div key={c} className="col-md-3 col-lg-3 col-sm-4">
                            <Tech title={c} features={skills[c]} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Tech(props) {
    return (
        <ul className="list-group">
            <h4>{props.title}</h4>
            {props.features.map(e => (
                <li key={e} className="list-group-item">
                    <span>
                        <img src={e + ".png"} alt="logo" />
                    </span>
                    {e}
                </li>

            ))}
        </ul>
    )
}

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light m-0 p-2">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#profile">About</a>
                    <a class="nav-item nav-link" href="#projects">Projects</a>
                    <a class="nav-item nav-link" href="#skills">Skills</a>
                    <a class="nav-item nav-link" href="#contact">Contact</a>
                    <a class="nav-item nav-link" href="https://docs.google.com/document/d/1E2or5lBJCyjRhinxTQqa_IOmYtce_9po2RhaFFKqA7o/edit?usp=sharing">My CV</a>
                </div>
            </div>
        </nav>
    )
}

function Contact(){
    return(
        <footer id="contact" className="container-fluid mt-5 p-4">
            <h2 className="text-uppercase">contact me</h2>
            <div className="mt-4 row">
                <span className="m-3">E-mail: sebasloaizac@gmail.com</span>
                <span className="m-3">Github: <a href="https://github.com/sloaizac">sloaizac</a></span>
            </div>
        </footer>
    )
}

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Profile />
                <ProjectList />
                <Skills />
            </div>
            <Contact />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
