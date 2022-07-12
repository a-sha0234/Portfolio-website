export default function About() {
  return (
    <section className="about">
      <h1 className="about__heading">About me</h1>
      <p className="about__text">
        I am a recent graduate of computer science looking for an opportunity to
        apply my skills in a business setting. During my studies I got to work
        with teams which allowed me to get a feel of a real workplace
        environment, this helped me cultivate a handful of skills. To
        illustrate, maintaining communication with other team members
        religiously as the challenges we faced were diverse and always changing.
        This required us to know when to ask for help and be organised enough in
        order to be able to do so. This was instrumental into our success. I
        look forward to working in a dynamic environment and translating skills
        that I have developed to produce real results.
      </p>
      <h1 className="about__heading">Skill Set</h1>

      <div>
        <p className="about__title">Languages</p>
        <ul className="about__skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>TypeScript</li>

          <li>NoSql</li>
          <li>Python</li>
        </ul>
        <p className="about__title">Technologies</p>
        <ul className="about__skills">
          <li>React</li>
          <li>Bootstrao</li>
          <li>Node</li>
          <li>Express</li>
        </ul>

        <p className="about__title">Testing</p>
        <ul className="about__skills">
          <li>Jest</li>
          <li>React Testing Library</li>
        </ul>
      </div>
    </section>
  );
}
