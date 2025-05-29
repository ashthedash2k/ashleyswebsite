import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>🎀 Ashley's Archive 🎀</h1>
      <p>raccoon lover, peanut butter enthusiast, and probably a little too ambitious</p>
    </div>
  );
}

function About() {
  return (
    <React.Fragment>
      <div class="containerBlog">
      <h1>💌 About Me 💌</h1>
      <div className="text-box">
        <p>
          Hi! I'm Ashley and I'm studying computer science @ Carnegie Mellon University. 
          I was born and raised in Toronto, Canada (Canadian eh) and I'm currently based in 
          Pittsburgh, PA. 
        </p>
        <p>I'm interested in cuda and deep learning</p>
        <p>I love drinking coffee and touching grass (crazy for a programmer lol).I also love meeting 
          meet new people. I hope to share some of my interests and passions to connect to others.
          Please dont hesitate to reach out: ashleyy.czumak@gmail.com.
        </p>
        <p>P.S. this is my first time making a website, so its currently 
          a work in progress (done over perfect am I right?)</p>
        <p>  
        </p>
      </div>
    </div>
    </React.Fragment>
    
  );
}
function Post1(){
  return (
    <React.Fragment>
      <div className="containerBlog">
      <div className="blog-header">
        <h1 className="blog-title">What is The Metal API?</h1>
        <div>
          <h2 className="subtitle">Welcome To My First Post!</h2>
          <p>Hi, welcome to my first blog post! I'm making it a little shorter 
            just because I want to turn this into a series on how to learn how to
            use Apple's API metal. However, to use this API we must first know what it is, which 
            is what this post will be about so stay tuned!
          </p>
          <h2 className="subtitle">What is Metal</h2>
          <p>
            Metal is an API that Apple created which allows programmers to 
            optimize GPU operations. In machine learning, we can use metal to run 
            parallel compute operations, which means that tasks are divided and run 
            simultaneously across many GPU cores. This is way faster than running a program 
            one by one on a CPU. 
          </p>

          <p>
            Take a neural network for example. When you use Metal, you can offload 
            tensor operations (for instance matrix multiplication), onto the GPU. 
          </p>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}

function Blog() {
  return (
    <React.Fragment>
      <div className="containerBlog">
        <h1>My Writing</h1>
        <div className="blog-links">
          <Link to="/blog/post1">post1</Link>  
        </div>
      </div>
    </React.Fragment>
  );
}

function Coffee(){
  return (
    <React.Fragment>
      <h1>hey</h1>
    </React.Fragment>
  )
}
function Lessons(){
  return (
    <React.Fragment>
      <h1>hey</h1>
    </React.Fragment>
  )
}

function Pittsburgh(){
  return (
    <React.Fragment>
      <h1>hey</h1>
    </React.Fragment>
  )
}

function Toronto(){
  return (
    <React.Fragment>
      <h1>hey</h1>
    </React.Fragment>
  )
}

function Misc() {
  return (
    <React.Fragment>
      <div className="containerBlog">
        <h1>Misc</h1>
        <div className="blog-links">
          <Link to="/misc/coffee">Coffee Ratings</Link>  
        </div>
        <div className="blog-links">
          <Link to="/misc/readinglist">Reading List</Link>  
        </div>
        <div className="blog-links">
          <Link to="/misc/lessons">Lessons</Link>  
        </div>
        <div className="blog-links">
          <Link to="/misc/pittsburgh">Pittsburgh</Link>  
        </div>
        <div className="blog-links">
          <Link to="/misc/toronto">Toronto</Link>  
        </div>
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> <Link to="/about">About</Link>  <Link to="/blog">Blog</Link> 
        <Link to="/misc">Misc</Link> 
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog/post1" component={Post1} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/misc" component={Misc} />
        <Route path="/misc/coffee" component={Coffee} />
        <Route path="/misc/lessons" component={Lessons} />
        <Route path="/misc/pittsburgh" component={Pittsburgh} />
        <Route path="/misc/toronto" component={Toronto} />
      </Switch>
    </Router>
  );
}

export default App;
