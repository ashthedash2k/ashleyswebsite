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
function Post2() {
  return (
    <div className="containerBlog">
      <div className="blog-header">
        <h1 className="blog-title">CUDA VS Metal </h1>
        <h2 className="subtitle">Preface</h2>
        <p>
          If you haven't heard of Metal, you definitely have heard of CUDA.
          Both are for GPU programming however CUDA was created by NVIDIA and is ran 
          by NVIDIA GPUs and Metal was created by Apple and runs on Apple Silicon. 
          CUDA is older than Metal and therefore more developed. You can use Metal for 
          deep learning because you can write your own deep learning operations in MSL (which 
          is what we will be doing in this series!).
        </p>
        <h2 className="subtitle">SIMD VS SIMT</h2>
        <p>Both SIMD and SIMT are ways to execute programs in parallel. CUDA uses 
          SIMT which means that each thread executes its own copy of the program. Threads are
          organized into warps (which are groups of 32 on NVIDIA GPUs). All threads in a warp execute
          in lockstep which means that if all threads follow the same execution path we get a fast execution.
          If threads diverge (which means that the control flow goes down different branches), there is slower execution 
          due to warp divergence. Even though CUDA handles divergence, it does hurt performance. 
        </p>
        <p> In contrast, metal uses SIMD which means that a single instruction operates on multiple values simultaneously.
          So you write shaders in Metal and we think of them as mini parallel programs. Each thread processes a chunk of 
          data, using vector types refered to as float# (example, float2 is a two component vector with 32-bit floating point values). 
          Threads are scheduled in threadgroups, which is terminology that means that threads are executed together and can 
          share a common block of memory. 
        </p>

        <h2 className="subtitle">Why Distinction Matters</h2>
        <p>
          Vectorization is more explicit in Metal. You write code that operates on vectors 
          which allows of the user to be very aware of how data is packaged and processed. 
          Because you control the vector width and alignment, this leads to efficient use of the hardware.
          CUDA sort of abstracts vectorization behind threads. This makes it easier to write parallel code without
          worrying about explicit vector operations, but it can be less efficient if there is lots of divergence or poor 
          memory access patterns. 
        </p>
        <h2 className="subtitle">Synchronization In Metal</h2>
        <p>
          A threadgroup is a collection of threads. Threads in the same
          threadgroup can run on the same compute unit. This means that they can 
          share data using threadgroup memory (fast shared memory) and synchronize with 
          each other using barriers. 
        </p>
        <p>
          Threadgroup memory is memory shared only by threads in the same thread group. 
          We use this to share itermediate results, avoid costly global memory reads/writes, 
          and coordinate tasks (example matrix multiplication, which will be seen in future tutorials).
        </p>
        <p>
          When threads in a threadgroup need to ensure all have completed some work before continuing, 
          we use something called a barrier. This tells the GPU to wait until all threads in this threadgroup have reached 
          some point and finished their threadgroup memory operations.
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
      <div className="blog-links">
      <Link to="/blog/post2">Cuda VS Metal</Link>
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
        <Route path="/blog/post2" element={<Post2 />} />

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
