interface IProps {
  project: {
    id: number;
    name: string;
    githubFrontRepo: string;
    githubBackRepo: string;
    screenshot: string;
    languages: string[];
  };
}

export default function Card(props: IProps) {
  return (
    <div>
      <p>{props.project.name}</p>
      <img
        src={props.project.screenshot}
        alt={props.project.name}
        width={200}
        height={200}
      ></img>
      {props.project.languages.map((data) => {
        return <img src={data} alt="efne" width={20} height={20}></img>;
      })}
    </div>
  );
}
