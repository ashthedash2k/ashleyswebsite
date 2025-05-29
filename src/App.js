import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
    <div className="containerBlog">
      <h1>💌 About Me 💌</h1>
      <div className="text-box">
        <p>
          Hi! I'm Ashley and I'm studying computer science @ Carnegie Mellon University. 
          I was born and raised in Toronto, Canada (Canadian eh) and I'm currently based in 
          Pittsburgh, PA.
        </p>
        <p>I'm interested in CUDA and deep learning.</p>
        <p>
          I love drinking coffee and touching grass (crazy for a programmer lol). I also love meeting 
          new people. I hope to share some of my interests and passions to connect to others.
          Please don't hesitate to reach out: ashleyy.czumak@gmail.com.
        </p>
        <p>
          P.S. this is my first time making a website, so it's currently 
          a work in progress (done over perfect, am I right?)
        </p>
      </div>
    </div>
  );
}

function Post1() {
  return (
    <div className="containerBlog">
      <div className="blog-header">
        <h1 className="blog-title">What is The Metal API?</h1>
        <h2 className="subtitle">Welcome To My First Post!</h2>
        <p>
          Hi, welcome to my first blog post! I'm making it a little shorter 
          just because I want to turn this into a series on how to learn how to
          use Apple's API Metal. However, to use this API we must first know what it is, which 
          is what this post will be about — so stay tuned!
        </p>
        <h2 className="subtitle">What is Metal</h2>
        <p>
          Metal is an API that Apple created which allows programmers to 
          optimize GPU operations. In machine learning, we can use Metal to run 
          parallel compute operations, which means that tasks are divided and run 
          simultaneously across many GPU cores. This is much faster than running programs 
          one-by-one on a CPU.
        </p>
        <p>
          Take a neural network for example. When you use Metal, you can offload 
          tensor operations (like matrix multiplication) onto the GPU.
        </p>

        <h2 className="subtitle">Metal Process Flow</h2>
        <p>
          Metal is written in the Metal Shading language (MSL) which is based on C++14. 
          In this series, we will be performing the GPU optimization with the MSL. Then 
          we use Swift to interact with Metal's API. Swift allows us to create a MTL device which is 
          like a gateway to creating Metal resources and sending commands. Once you have a device
          you create memory buffers and textures that hold the data your GPU code processes. A buffer
          is a linear memory array which is used to store vertex positions or tensor values. Textures 
          are multidimensional arrays data stored in GPU memory. This is more relevant for graphics and less
          relevant towards what we are doing in this series. Swift also allows us to set up metal shaders, 
          which are essentially kernels (not the same but similar idea). 
        </p>
        <p>
          MSL code is compiled ahead of time into a library. You load this library at runtime to access your 
          GPU functions. From this library the next step is the graph the specific function you want to run.
          After the compliation and setup, we want to encode commands and submit them to the GPU. 
          To do this, we would create a command queue to schedule GPU work. This is a queue where your GPU 
          commands line up. From the command queue, we must create a command buffer, which is a container 
          for one or more encoded GPU commands. Lastly, you can't just throw data and shaders at the GPU and 
          hope that it figures out what to do. You need to specify which shaders to use, bind resources (the buffers), 
          and tell the GPU when to start and stop processing. We encode these steps in a command encoder. 
        </p>

        <p>TLDR the flow is create resources, then compile GPU code, 
          then encode commands, then submit to GPU, then finally have the gpu run the code!
        </p>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="containerBlog">
      <h1>My Writing</h1>
      <div className="blog-links">
        <Link to="/blog/post1">What is Metal?</Link>
      </div>
    </div>
  );
}

function Coffee() {
  return (
    <div>
      <h1>Coffee Ratings</h1>
      <p>Coming soon...</p>
    </div>
  );
}

function ReadingList() {
  return (
    <div>
      <h1>Reading List</h1>
      <p>Coming soon...</p>
    </div>
  );
}

function Lessons() {
  return (
    <div>
      <h1>Lessons</h1>
      <p>Coming soon...</p>
    </div>
  );
}

function Pittsburgh() {
  return (
    <div>
      <h1>Pittsburgh</h1>
      <p>Coming soon...</p>
    </div>
  );
}

function Toronto() {
  return (
    <div>
      <h1>Toronto</h1>
      <p>Coming soon...</p>
    </div>
  );
}

function Misc() {
  return (
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
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/blog">Blog</Link>{" "}
        <Link to="/misc">Misc</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post1" element={<Post1 />} />
        <Route path="/misc" element={<Misc />} />
        <Route path="/misc/coffee" element={<Coffee />} />
        <Route path="/misc/readinglist" element={<ReadingList />} />
        <Route path="/misc/lessons" element={<Lessons />} />
        <Route path="/misc/pittsburgh" element={<Pittsburgh />} />
        <Route path="/misc/toronto" element={<Toronto />} />
      </Routes>
    </Router>
  );
}

export default App;
