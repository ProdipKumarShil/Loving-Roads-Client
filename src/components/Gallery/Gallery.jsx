import { ParallaxBanner } from 'react-scroll-parallax';
import foreground from '../../assets/parallax/foreground.png'
import background from '../../assets/parallax/background.png'
import Button from '../Button';

const Gallery = () => {
  return (
    // <div className='relative h-[600px] overflow-hidden mb-40'>
    //   <img className=' w-full md:h-screen brightness-75 blur-[2px] object-center h-[600px]' src={bg} alt="" />
    //   <div className="absolute top-1/2 w-full transform -translate-y-1/2 flex flex-col gap-5">
    //     <p className='text-center text-white text-5xl  '>Richird Norton photorealistic rendering as real photos</p>
    //     <p className='text-center text-white '>Progressively incentivize cooperative systems through technically sound functionalities. <br /> The credibly productivate seamless data.</p>
    //     {/* <button className='btn btn-primary w- mx-auto'>Start planning your trip</button> */}
    //     <Button className="mx-auto" text="Start planning your trip" />
    //   </div>
    // </div>
    <ParallaxBanner
      layers={[
        { image: background, speed: -10 },
        { image: foreground, speed: -30 },
      ]}
      className="aspect-[2/1] h-[600px] overflow-hidden mb-40 px-1"
    >
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl text-white font-thin">Hello World!</h1>
      </div> */}
      <div className="absolute top-1/2 w-full transform -translate-y-1/2 flex flex-col gap-5">
        <p className='text-center text-white text-5xl  '>Richird Norton photorealistic rendering as real photos</p>
        <p className='text-center text-white'>Progressively incentivize cooperative systems through technically sound functionalities. <br /> The credibly productivate seamless data.</p>
        {/* <button className='btn btn-primary w- mx-auto'>Start planning your trip</button> */}
        <Button className="mx-auto" text="Start planning your trip" />
      </div>
      
    </ParallaxBanner>
  );
};

export default Gallery;