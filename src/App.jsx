function App() {
  return (
    <div className="font-mono">
      <nav class="sticky inset-x-0 top-0 z-50 w-full border-b-2 border-rose bg-dark-secondary">
        <div class="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#about" class="flex items-center space-x-3 rtl:space-x-reverse ">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-foam">Ryan Weisman</span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-rose rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-dark-secondary">
              <li>
                <a href="#about" class="block py-2 px-3 rounded text-light-primary hover:text-love">
                  About
                </a>
              </li>
              <li>
                <a href="#exp" class="block py-2 px-3 rounded text-light-primary hover:text-love">
                  Experience
                </a>
              </li>
              <li>
                <a href="#proj" class="block py-2 px-3 rounded text-light-primary hover:text-love">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" class="block py-2 px-3 rounded text-light-primary hover:text-love">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section
        id="about"
        className="flex flex-row items-center justify-between m-12 p-12 bg-dark-secondary rounded-lg border-rose border-2 scroll-mt-12"
      >
        <div class="flex flex-col space-y-4 items-center w-1/2">
          <p class="text-6xl text-light-primary">Hi, I'm Ryan !</p>
          <img className="h-auto rounded-lg border-rose border-2" src="../Ryan-W31/SF.jpeg" />
          <p class="text-sm text-foam mt-4">That's me in San Francisco (Go Knights Go !!)</p>
        </div>
        <div class="flex flex-col items-center justify-center w-1/2 p-12">
          <h1 class="text-4xl font-bold text-foam mb-4 w-full text-left">A little about me...</h1>
          <ul className="text-light-primary text-left text-xl space-y-4">
            <li>
              I'm currently a Software Engineer at Apple, Inc. in Austin, TX. I graduated from the University of
              Central Florida with a B.S. in Computer Science.
            </li>
            <br />
            <li>
              <p className="mb-2 mt-2">
                <span className="text-foam">Some of my favorite (developer) things at the moment:</span>
                <li>
                  <li className="font-bold text-sm">
                    - <span className="text-gold">Font:</span> <span className="font-normal">Zed Mono</span>
                  </li>
                  <li className="font-bold text-sm">
                    - <span className="text-gold">Editor:</span> <span className="font-normal">Neovim</span>
                  </li>
                  <li className="font-bold text-sm">
                    - <span className="text-gold">Theme:</span> <span className="font-normal">Rosé Pine</span>
                  </li>
                  <li className="font-bold text-sm">
                    - <span className="text-gold">Terminal Emulator:</span>{" "}
                    <span className="font-normal">Ghostty</span>
                  </li>
                </li>
              </p>
            </li>
            <br />
            <li>
              <span className="text-foam">Some of my other interests and hobbies include:</span>
              <li className="text-sm">- Reading (I love everything Brandon Sanderson !) &#x1F4DA;</li>
              <li className="text-sm">- Sports &#x26F3;</li>
              <li className="text-sm">- Photography &#x1F4F7;</li>
              <li className="text-sm">- Hiking &#x1F9D7;</li>
              <li className="text-sm">- Travelling &#x1F6EB;</li>
              <li className="text-sm">- Motorcycles &#x1F3CD;</li>
            </li>
          </ul>
        </div>
      </section>
      <section id="exp" className="flex space-x-8 m-12 items-center justify-between scroll-mt-24">
        <div className="w-2/3 bg-dark-secondary rounded-lg border-rose border-2">
          <div>
            <h1 class="text-6xl font-bold text-gold text-center my-4">Experience</h1>
            <p class="text-light-primary text-center text-xl p-2">
              I like making cool stuff and solving cool problems in cool (and efficient) ways.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 m-8 p-8 rounded-lg bg-dark-primary border-pine border-2">
            <h1 class="text-4xl font-bold text-foam">Apple, Inc.</h1>
            <p class="text-iris text-center">Software Engineer</p>
            <p class="text-pine text-center">January 2025 - Present</p>
            <ul class="text-light-primary text-center space-y-2">
              <li>
                - Developing and maintaining the ingestion services for Apple’s internal generative AI platform,
                powering RAG workflows used by over <b className="text-light-secondary">200</b> internal
                applications.
              </li>
              <li>
                - Designed scalable microservices using Kubernetes and Kafka to accommodate{" "}
                <b className="text-light-secondary">3M+</b> weekly requests.
              </li>
              <li>
                - Replaced a critical legacy system with a modern Java Spring solution to improve developer
                accessibility and reduce document ingestion time by <b className="text-light-secondary">30%</b>.
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 m-8 p-8 rounded-lg bg-dark-primary border-pine border-2">
            <h1 class="text-4xl font-bold text-foam">Deltek, Inc.</h1>
            <p class="text-iris text-center">Data and Analytics Intern</p>
            <p class="text-pine text-center">June 2023 - August 2023</p>
            <ul class="text-light-primary text-center space-y-2">
              <li>
                - Developed a classification model to assist sales representatives in identifying favorable
                customer interactions.
              </li>

              <li>
                - Collaborated with an IT team to test and refine a classification algorithm, achieving{" "}
                <b className="text-light-secondary">98%</b> accuracy.
              </li>

              <li>
                - Utilized Pandas, NumPy, and Matplotlib to test and visually analyze datasets comprising of{" "}
                <b className="text-light-secondary">1,000+</b> customers.
              </li>

              <li>
                - Engineered a specialized Python script incorporating OpenAI's GPT-4, attaining{" "}
                <b className="text-light-secondary">81%</b> accuracy.
              </li>
            </ul>
          </div>
        </div>
        <figure className="w-1/3 h-auto space-y-4">
          <img className="rounded-lg border-2 border-rose" src="../Ryan-W31/7854150432__MG_4043.jpg" />
          <figcaption className="text-pine text-center text-sm">
            I snapped this photo in Nassau, The Bahamas
          </figcaption>
        </figure>
      </section>
      <section id="proj" className="flex items-center justify-between m-12 scroll-mt-24 space-x-8">
        <figure className="w-1/3 h-auto space-y-4">
          <img className="rounded-lg border-2 border-rose" src="../Ryan-W31/_MG_9862.jpg" />
          <figcaption className="text-pine text-center text-sm">
            And this one was taken in Chimney Rock, NC
          </figcaption>
        </figure>
        <div className="w-2/3 border-2 border-rose rounded-lg bg-dark-secondary">
          <div>
            <h1 class="text-6xl font-bold text-gold text-center my-4">Projects</h1>
            <p class="text-light-primary text-center text-xl p-2">
              Here are some school and personal projects I've worked on (click on one):
            </p>
          </div>
          <a
            className="flex flex-col justify-center items-center space-y-4 m-8 p-8 border-pine hover:border-love border-2 bg-dark-primary rounded-lg"
            href="https://github.com/Prometheus1400/remux"
          >
            <h1 class="text-4xl font-bold text-foam">remux</h1>
            <p class="text-iris text-center text-xl">Rust</p>
            <ul class="text-light-primary text-center space-y-2">
              <li>- Revamping tmux by building a terminal multiplexer from the ground up using Rust.</li>
            </ul>
          </a>
          <a
            className="flex flex-col justify-center items-center space-y-4 m-8 p-8 border-pine hover:border-love border-2 bg-dark-primary rounded-lg"
            href="https://github.com/Ryan-W31/myGPT2"
          >
            <h1 class="text-4xl font-bold text-foam">myGPT-2</h1>
            <p class="text-iris text-xl text-center">Python | PyTorch | Jupyter Notebook</p>
            <ul class="text-light-primary text-center space-y-2">
              <li>
                - Built a <b className="text-light-secondary">124M+</b> parameter GPT-2 clone based on OpenAI's
                GPT-2 model.
              </li>
              <li>
                - Implemented the <b className="text-light-secondary">10B</b> token Hugging Face FineWeb-Edu
                dataset for training.
              </li>
              <li>
                - Leveraged the PyTorch library for efficient use of CUDA and distributed parallel processing.
              </li>
            </ul>
          </a>
          <a
            className="flex flex-col justify-center items-center space-y-4 m-8 p-8 border-pine hover:border-love border-2 bg-dark-primary rounded-lg"
            href="https://github.com/Ryan-W31/QBxR"
          >
            <h1 class="text-4xl font-bold text-foam">QBxR: NFL Quarterback Rating System</h1>
            <p class="text-iris text-center text-xl">MongoDB | Express.js | React | Node.js | Docker | AWS</p>
            <ul class="text-light-primary text-center space-y-2">
              <li>- Served as Project Manager and Full-Stack Developer for a senior capstone project.</li>
              <li>
                - Utilized Agile methodology to collaborate within a team setting and produce a{" "}
                <b className="text-light-secondary">150+</b> page technical document outlining research, system
                design, and implementation.
              </li>
              <li>
                - Implemented cloud infrastructure by leveraging &gt;5 AWS products, including EC2, S3, VPC, and
                more.
              </li>
            </ul>
          </a>

          <a
            className="flex flex-col justify-center items-center space-y-4 m-8 p-8 border-pine hover:border-love border-2 bg-dark-primary rounded-lg"
            href="https://github.com/Ryan-W31/PL0-Compiler"
          >
            <h1 class="text-4xl font-bold text-foam">PL/0 Virtual Machine</h1>
            <p class="text-iris text-center text-xl">C</p>
            <ul class="text-light-primary text-center space-y-2">
              <li>
                - Designed and implemented a PL/0 compiler using C, complete with a syntax parser and code
                generator.
              </li>
              <li>
                - Engineered an assembler and virtual machine capable of executing basic programs and rendering
                output to the screen.
              </li>
            </ul>
          </a>
        </div>
      </section>
      <section id="contact" class="scroll-mt-24">
        <div class="flex flex-col items-center justify-center bg-dark-secondary border-2 border-rose m-8 p-8 rounded-lg space-y-4">
          <h1 class="text-6xl font-bold text-gold">Contact</h1>
          <p class="text-light-primary text-center w-1/2">
            If you'd like to get in touch, feel free to send me an email at:{" "}
            <a href="mailto:ryan.weisman.512@gmail.com" className="text-iris hover:text-love">
              ryan.weisman.512@gmail.com
            </a>
            .
          </p>
          <p class="text-light-primary text-center w-1/2">
            You can also find me on{" "}
            <a href="https://www.linkedin.com/in/ryanweisman/" className="text-foam hover:text-love">
              LinkedIn
            </a>{" "}
            and{" "}
            <a href="https://github.com/Ryan-W31" className="text-foam hover:text-love">
              GitHub
            </a>
            .
          </p>
          <p class="text-light-primary text-center w-1/2">Thanks for stopping by !</p>
          <div className="flex flex-row space-x-4 items-center justify-center">
            <figure className="w-1/2 h-auto space-y-4">
              <img className="rounded-lg border-2 border-rose" src="../Ryan-W31/IMG_0624.JPG" />
              <figcaption className="text-light-primary text-center">
                This is my hometown Henderson, NV (just outside of Las Vegas)
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
