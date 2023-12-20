import bg from '../../assets/TopDestinations/p.jpg'
import food from '../../assets/categories/food.jpg'
import game from '../../assets/categories/game.jpg'
import travel from '../../assets/categories/travel.jpg'
import programming from '../../assets/categories/programming.jpg'
import movie from '../../assets/categories/movie.jpg'

const categories = [
  {text: "Travel", img: travel},
  {text: "Game", img: game},
  {text: "Programming", img: programming},
  {text: "Movie", img: movie},
  {text: "Food", img: food},
]

const TopDestinations = () => {
  return (
    <div className='max-w-7xl mx-auto mb-40'>
      <p className='text-2xl font-bold mb-2 px-3'>Top Destinations</p>
      <p className='font-bold mb-6 px-3'>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {
          categories.map((category, index) => <PhotoContainers key={index} category={category} />)
        }
      </div>
    </div>
  );
};

export default TopDestinations;

const PhotoContainers = ({category}) => {
  return(
    <div className="relative group overflow-hidden hover:scale-105 md:hover:scale-110 duration-500">
      <img className='h-[230px] w-full object-cover group-hover:brightness-50 cursor-pointer duration-500' src={category.img} alt="" />
      <p className='text-xl w-full absolute top-60 left-72 opacity-0 duration-500 group-hover:opacity-100 group-hover:top-1/2 group-hover:left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-slate-100'>{category.text}</p>
    </div>
  )
}