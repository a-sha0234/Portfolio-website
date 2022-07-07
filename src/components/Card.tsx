interface IProps {
  project: {
    id: number;
    name: string;
    githubFrontRepo: string;
    githubBackRepo: string;
    screenshot: string;
  };
}

export default function Card(props: IProps) {
  return (
    <div>
      <p>{props.project.name}</p>
      <img src={props.project.screenshot} alt={props.project.name}></img>
    </div>
  );
}
