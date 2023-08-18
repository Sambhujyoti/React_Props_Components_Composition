import Concept from "./Concept";

function Concepts(props) {
  return (
    <ul id="concepts">
      {props.items.map((item) => (
        <Concept
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}

export default Concepts;
