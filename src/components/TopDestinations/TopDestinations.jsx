import bg from '../../assets/TopDestinations/p.jpg'

const TopDestinations = () => {
  return (
    <div className='max-w-7xl mx-auto mb-40'>
      <p className='text-2xl font-bold mb-2'>Top Destinations</p>
      <p className='font-bold mb-6'>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2">
        <PhotoContainers />
        <PhotoContainers />
        <PhotoContainers />
        <PhotoContainers />
        <PhotoContainers />
      </div>
    </div>
  );
};

export default TopDestinations;

const PhotoContainers = () => {
  return(
    <div className="relative">
      <img className='h-[230px] object-cover brightness-90' src={bg} alt="" />
      <p className='text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-slate-100'>Lorem, ipsum dolor.</p>
    </div>
  )
}