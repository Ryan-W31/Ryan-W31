function App() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <div className="font-mono">
      <nav class="sticky sticky top-0 z-50 w-full border-b-2 border-light-secondary bg-dark-secondary">
        <div class="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#about"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-light-primary">
              Ryan Weisman
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#about"
                  class="block py-2 px-3 rounded text-light-primary hover:text-light-secondary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#exp"
                  class="block py-2 px-3 rounded text-light-primary hover:text-light-secondary"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#proj"
                  class="block py-2 px-3 rounded text-light-primary hover:text-light-secondary"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="block py-2 px-3 rounded text-light-primary hover:text-light-secondary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section
        id="about"
        className="flex flex-row items-center justify-between h-screen m-12 bg-dark-secondary rounded-lg border-light-secondary border-2"
      >
        <div class="flex flex-col items-center justify-center w-1/2">
          <h1 class="text-6xl font-bold text-light-primary mb-4">
            Hello, World! &#x1F44B;
          </h1>

          <img
            className="h-auto rounded-lg border-light-secondary border-2"
            src="../Ryan-W31/Ry-Grad-Pic.png"
          />
          <p class="text-xl text-light-primary mt-4">
            I'm Ryan, and welcome to my portfolio.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center w-1/2 p-12">
          <h1 class="text-6xl font-bold text-light-primary mb-4">
            A little about me...
          </h1>
          <ul className="text-light-primary text-left text-xl space-y-4">
            <li>
              &#127891; I'm a undergraduate student at the University of Central
              Florida.
            </li>
            <li>
              &#x1F4BB; I study computer science and I'm passionate about
              machine learning and its applications.
            </li>
            <li>
              Some of my other interests and hobbies include:
              <li>- Artificial Intelligence &#x1F916;</li>
              <li>- Sports (Golf) &#x26F3;</li>
              <li>- Photography &#x1F4F7;</li>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="exp"
        className="m-12 bg-dark-secondary rounded-lg border-light-secondary border-2"
      >
        <div>
          <h1 class="text-6xl font-bold text-light-primary text-center my-4">
            Experience
          </h1>
          <p class="text-light-primary text-center text-xl p-2">
            As I continue my studies, I'm looking for opportunities to apply my
            skills and knowledge in a professional setting. I'm eager to learn
            and grow as a software engineer and machine learning engineer.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 m-8 p-8 rounded-lg bg-dark-primary border-light-secondary border-2">
          <img
            className="inline-block rounded-lg h-32"
            src="../public/deltek.png"
          ></img>
          <h1 class="text-4xl font-bold text-light-primary">Deltek, Inc.</h1>
          <p class="text-light-primary text-center">
            Data and Analytics Intern
          </p>
          <p class="text-light-primary text-center">June 2023 - August 2023</p>
          <ul class="text-light-primary text-center space-y-2">
            <li>
              - Developed a classification model to assist sales representatives
              in identifying favorable customer interactions.
            </li>

            <li>
              - Collaborated with an IT team to test and refine a classification
              algorithm, achieving <b className="text-light-secondary">98%</b>{" "}
              accuracy.
            </li>

            <li>
              - Utilized Pandas, NumPy, and Matplotlib to test and visually
              analyze datasets comprising of{" "}
              <b className="text-light-secondary">1,000+</b> customers.
            </li>

            <li>
              - Engineered a specialized Python script incorporating OpenAI's
              GPT-4, attaining <b className="text-light-secondary">81%</b>{" "}
              accuracy.
            </li>
          </ul>
        </div>
      </section>
      <section
        id="proj"
        className="m-12 bg-dark-secondary rounded-lg border-light-secondary border-2"
      >
        <div>
          <h1 class="text-6xl font-bold text-light-primary text-center my-4">
            Projects
          </h1>
          <p class="text-light-primary text-center text-xl p-2">
            Here are some school and personal projects I've worked on (click on
            one):
          </p>
        </div>
        <a
          className="flex flex-col justify-center items-center space-y-4 m-8 p-8 border-light-secondary border-2 bg-dark-primary rounded-lg"
          href="https://github.com/Ryan-W31/myGPT2"
        >
          <h1 class="text-4xl font-bold text-light-primary">myGPT-2</h1>
          <p class="text-light-primary text-xl text-center">
            Python | PyTorch | Jupyter Notebook
          </p>
          <ul class="text-light-primary text-center space-y-2">
            <li>
              - Built a <b className="text-light-secondary">124M+</b> parameter
              GPT-2 clone based on OpenAI's GPT-2 model.
            </li>
            <li>
              - Implemented the <b className="text-light-secondary">10B</b>{" "}
              token Hugging Face FineWeb-Edu dataset for training.
            </li>
            <li>
              - Leveraged the PyTorch library for efficient use of CUDA and
              distributed parallel processing.
            </li>
          </ul>
        </a>
        <a
          className="flex flex-col justify-center items-center space-y-4 m-8 p-8 border-light-secondary border-2 bg-dark-primary rounded-lg"
          href="https://qbxr.net"
        >
          <h1 class="text-4xl font-bold text-light-primary">
            QBxR: NFL Quarterback Rating System
          </h1>
          <p class="text-light-primary text-center text-xl">
            MongoDB | Express.js | React | Node.js | Docker | AWS
          </p>
          <ul class="text-light-primary text-center space-y-2">
            <li>
              - Served as Project Manager and Full-Stack Developer for a senior
              capstone project.
            </li>
            <li>
              - Utilized Agile methodology to collaborate within a team setting
              and produce a <b className="text-light-secondary">150+</b> page
              technical document outlining research, system design, and
              implementation.
            </li>
            <li>
              - Implemented cloud infrastructure by leveraging &gt;5 AWS
              products, including EC2, S3, VPC, and more.
            </li>
          </ul>
        </a>
        <a
          className="flex flex-col justify-center items-center space-y-4 m-8 p-8 border-light-secondary border-2 bg-dark-primary rounded-lg"
          href="https://github.com/Ryan-W31/RL-Racecar"
        >
          <h1 class="text-4xl font-bold text-light-primary">RL-Racecar</h1>
          <p class="text-light-primary text-center text-xl">
            Python | NEAT-Python | pygame | NumPy | SciPy
          </p>
          <ul class="text-light-primary text-center space-y-2">
            <li>
              - Utilized the NeuroEvolution of Augmenting Topologies (NEAT)
              evolutionary algorithm to autonomously drive a virtual car around
              a racetrack.
            </li>
            <li>
              - Implemented Git for version control, ensuring an efficient and
              organized development process.
            </li>
          </ul>
        </a>
        <a
          className="flex flex-col justify-center items-center space-y-4 m-8 p-8 border-light-secondary border-2 bg-dark-primary rounded-lg"
          href="https://github.com/Ryan-W31/PL0-Compiler"
        >
          <h1 class="text-4xl font-bold text-light-primary">
            PL/0 Virtual Machine
          </h1>
          <p class="text-light-primary text-center text-xl">C</p>
          <ul class="text-light-primary text-center space-y-2">
            <li>
              - Designed and implemented a PL/0 compiler using C, complete with
              a syntax parser and code generator.
            </li>
            <li>
              - Engineered an assembler and virtual machine capable of executing
              basic programs and rendering output to the screen.
            </li>
          </ul>
        </a>
      </section>
      <section id="contact">
        <div class="flex flex-col items-center justify-center bg-dark-secondary border-2 border-light-secondary m-8 p-8 rounded-lg space-y-4">
          <h1 class="text-4xl font-bold text-light-primary">Contact</h1>
          <p class="text-light-primary text-center w-1/2">
            If you'd like to get in touch, feel free to send me an email at{" "}
            <a
              href="mailto:ryan.weisman.512@gmail.com"
              className="text-light-secondary"
            >
              ryan.weisman.512@gmail.com
            </a>
            .
          </p>
          <p class="text-light-primary text-center w-1/2">
            You can also find me on{" "}
            <a
              href="https://www.linkedin.com/in/ryanweisman/"
              className="text-light-secondary"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/Ryan-W31"
              className="text-light-secondary"
            >
              GitHub
            </a>
            .
          </p>
          <p class="text-light-primary text-center w-1/2">
            Thanks for stopping by! Here are some of my favorite photos I've
            taken:
          </p>
          <div className="flex flex-row space-x-4 items-center justify-center">
            <figure className="w-1/3 h-auto">
              <img
                className="rounded-lg"
                src="../Ryan-W31/7854150432__MG_4043.jpg"
              />
              <figcaption className="text-light-primary text-center">
                Nassau, The Bahamas
              </figcaption>
            </figure>
            <figure className="w-1/3 h-auto">
              <img className="rounded-lg" src="../Ryan-W31/IMG_0624.JPG" />
              <figcaption className="text-light-primary text-center">
                Henderson, NV (Hometown)
              </figcaption>
            </figure>
            <figure className="w-1/3 h-auto">
              <img className="rounded-lg" src="../Ryan-W31/_MG_9862.jpg" />
              <figcaption className="text-light-primary text-center">
                Chimney Rock, NC
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
