export default function About() {
  return (
    <section className="about">
      <h1 className="about__title">About me</h1>
      <p className="about__text">de</p>
      <h1 className="about__title">Skill Set</h1>

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
