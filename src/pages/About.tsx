export default function About() {
  return (
    <section className="about">
      <h1 className="about__heading">About me</h1>
      <p className="about__text">
        I am a recent graduate of computer science looking for an opportunity to
        apply my skills in a software development setting. 
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
          <li>Bootstrap</li>
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
