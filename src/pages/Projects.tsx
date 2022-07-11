import Card from "../components/Card";
import { data } from "../data";

export default function Projects() {
  console.log(data);
  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>
      {data.map((projectData) => {
        return <Card project={projectData} />;
      })}
    </div>
  );
}
