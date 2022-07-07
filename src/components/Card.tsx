interface IProps {
  project: {
    id: number;
  };
}

export default function Card(props: IProps) {
  return <div>{props.project.id}</div>;
}
