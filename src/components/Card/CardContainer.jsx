import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="max-w-7xl mx-auto mb-40 px-2">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex">
      <button className="btn btn-primary mx-auto my-8">Load More</button>
      </div>
    </div>
  );
};

export default CardContainer;
