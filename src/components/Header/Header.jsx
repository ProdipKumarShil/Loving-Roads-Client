import bg from '../../assets/header/bg.jpg'
import Button from '../Button';

const Header = () => {
  return (
    <div className='relative mb-40'>
      <img className=' w-full h-[500px] md:h-screen brightness-75 ' src={bg} alt="" />
      <div className="absolute top-1/2 w-full transform -translate-y-1/2 flex flex-col gap-5">
        <p className='text-center text-white text-xl font-bold md:text-3xl lg:text-6xl duration-500' >Inspiration for travel by real people</p>
        <p className='text-center md:text-xl font-bold lg:text-3xl text-white duration-500'>Book smart, travel simple</p>
        <Button className=" text-sm md:w-[217px] mx-auto" text="Start planning your trip" />
      </div>
    </div>
  );
};

export default Header;