import Button from "../Button";
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
        <Button className="mx-auto my-8 border" text="See More"/>
      </div>
    </div>
  );
};

export default CardContainer;
