import bg from '../../assets/header/bg2.jpg'
import Button from '../Button';

const Gallery = () => {
  return (
    <div className='relative h-[600px] overflow-hidden mb-40'>
      <img className=' w-full md:h-screen brightness-90 object-center h-[600px]' src={bg} alt="" />
      <div className="absolute top-1/2 w-full transform -translate-y-1/2 flex flex-col gap-5">
        <p className='text-center text-[#E5E5E5] text-5xl  '>Richird Norton photorealistic rendering as real photos</p>
        <p className='text-center text-[#E5E5E5] '>Progressively incentivize cooperative systems through technically sound functionalities. <br /> The credibly productivate seamless data.</p>
        {/* <button className='btn btn-primary w- mx-auto'>Start planning your trip</button> */}
        <Button className="mx-auto" text="Start planning your trip" />
      </div>
    </div>
  );
};

export default Gallery;