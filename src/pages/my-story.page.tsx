import "../App.css";
// import displayPicture from "../assets/dp.png";
// import GithubLogo from "../assets/github.svg?react";
// import EmailLogo from "../assets/email.svg?react";
// import LinkedinLogo from "../assets/linkedin.svg?react";
import Layout from "../layout";

function MyStoryPage() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="prose max-w-none">
          <h1>Hey, I'm Nathan!</h1>
          <p>
            I'm a self-taught developer who got started by diving into online
            courses and experimenting with code in my spare time. From day one,
            I've loved the feeling of{" "}
            <strong>leveraging technology to make everyday life easier</strong>
            -for myself, for my team, and for anyone who uses the things I
            build.
          </p>

          <h2>How I Got Here (And Why I Still Love It)</h2>
          <p>
            I got into development purely on my own initiative, taking advantage
            of every free resource and course I could find. That journey led me
            from basic HTML tutorials to tinkering with full-stack
            applications-and I was hooked. I realised early on that software is
            a powerful tool to solve real-world problems, and I've been chasing
            that rush of creativity ever since.
          </p>
          <p>
            One proud milestone in my journey was{" "}
            <strong>becoming Head of Tech at my previous company</strong>.
            Running my own projects-and eventually my own team-opened my eyes to
            what's possible when developers have the freedom to create what they
            need. I built internal tools that
            <em>automated repetitive tasks</em>, made everyone's job simpler and
            faster, and ultimately drove more revenue. The ability to have a
            tangible impact on people's daily work is a big part of why I keep
            doing this.
          </p>

          <h2>What Lights Me Up</h2>
          <p>
            If it <strong>makes life easier</strong>, I'm probably interested in
            building it:
          </p>
          <ul>
            <li>Automation that cuts out manual drudgery</li>
            <li>
              Notification systems that keep teams or customers in the loop
            </li>
            <li>
              Workplace productivity tools that streamline routine processes
            </li>
          </ul>
          <p>
            I love these types of projects because they bring immediate,
            real-world benefits to the people using them.
          </p>

          <h2>My Values & Work Style</h2>
          <ul>
            <li>
              <strong>Clear Communication:</strong> I keep things transparent
              and straightforward from start to finish.
            </li>
            <li>
              <strong>Respect for Deadlines:</strong> Experimentation is great,
              but delivering on time is non-negotiable.
            </li>
            <li>
              <strong>Simple, Scalable Solutions:</strong> I favor clean,
              maintainable code over quick hacks.
            </li>
            <li>
              <strong>Close Collaboration:</strong> I love working directly with
              founders, startups, and small teams-where I can be flexible and
              have a big impact.
            </li>
          </ul>

          <h2>What I'm Good At</h2>
          <ul>
            <li>
              <strong>Simplifying Messy Processes:</strong> I get a kick out of
              taking a complicated workflow and boiling it down to something
              efficient.
            </li>
            <li>
              <strong>Moving Fast Without Breaking Things:</strong> I'm
              comfortable exploring new tech or pivoting quickly, but never at
              the expense of stability.
            </li>
            <li>
              <strong>Making Content Management Accessible:</strong> I love
              creating admin-friendly systems that non-technical folks can
              navigate with ease.
            </li>
          </ul>

          <h2>Outside of Code</h2>
          <p>I'm not all keyboards and code editors:</p>
          <ul>
            <li>
              <strong>Boxing &amp; Cooking:</strong> I recently won my first
              boxing match-training is a great outlet for me. If I'm not boxing,
              I'm in the kitchen figuring out new recipes.
            </li>
            <li>
              <strong>Building Side Projects for Fun:</strong> I've made a money
              budgeting app while traveling, a workout app for tracking my
              routines, and even a Spanish flashcard game to help me learn
              faster.
            </li>
          </ul>

          <p>
            I love finding little ways to automate or streamline daily tasks,
            whether that's finance, fitness, or learning a new language. If you
            share my passion for building things that truly help people,
            <strong>let's connect</strong>-I'm just a message away.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default MyStoryPage;
