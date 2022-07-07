import Card from "../components/Card";
import { data } from "../data";

export default function Projects() {
  console.log(data);
  return (
    <div>
      <h1>Projects</h1>
      {data.map((projectData) => {
        return <Card project={projectData} />;
      })}
    </div>
  );
}
