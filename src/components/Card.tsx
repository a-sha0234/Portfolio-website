interface IProps {
  project: {
    id: number;
    name: string;
    githubFrontRepo: string;
    githubBackRepo: string;
    screenshot: string;
    description: string;
    languages: string[];
  };
}

export default function Card(props: IProps) {
  return (
    <div>
      <div className="card">
        <p>{props.project.name}</p>

        <img
          src={props.project.screenshot}
          alt={props.project.name}
          width={350}
          height={300}
        ></img>
        <div id="cardDescription">
          <p>{props.project.description}</p>
        </div>
      </div>
      <div className="card__languages">
        {props.project.languages.map((data) => {
          return <img src={data} alt="efne" width={40} height={40}></img>;
        })}
      </div>
      <div className="card__button">
        {props.project.githubFrontRepo && (
          <a href={props.project.githubFrontRepo}>
            <button> Front End Code</button>
          </a>
        )}
        {props.project.githubBackRepo && (
          <a href={props.project.githubBackRepo}>
            <button> Back End Code</button>
          </a>
        )}
      </div>
    </div>
  );
}
