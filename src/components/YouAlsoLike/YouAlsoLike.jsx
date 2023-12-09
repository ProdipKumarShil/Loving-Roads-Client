import bg from "../../assets/TopDestinations/p2.jpg";

const YouAlsoLike = () => {
  return (
    <div className="max-w-7xl mx-auto mb-40">
      <p className="text-[#121416] text-xl mb-5">You May Also Like</p>
      <div className="grid grid-cols-4 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default YouAlsoLike;

const Card = () => {
  return (
    <div className="border">
      <img className="h-[200px] w-full object-cover" src={bg} alt="" />
      <div className="px-2 py-4 space-y-2">
        <p className="text-lg font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, error.
        </p>
        <p className="text-[#6C757D] text-sm ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          sapiente nam ut saepe sed veniam itaque, quisquam iusto ipsam beatae.
        </p>
        <div className="flex justify-between items-center text-sm mt-2 font-bold">
          <p>23 Jun, 2033</p>
          <p>2 minutes to read</p>
        </div>
      </div>
    </div>
  );
};
