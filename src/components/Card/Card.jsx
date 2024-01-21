import moment from 'moment';
import img2 from '../../assets/icons/img.svg'

const Card = ({blog}) => {
  const {title, body, category, date, img, author} = blog
  return (
    <div className="border group h-full">
      <figure className="mb-6 relative">
        <img
          className="w-full h-[300px] object-cover"
          src={img.img}
          alt=""
        />
        <div className="absolute inset-2 text-white hidden group-hover:block">
          <span className="mr-3 py-1 px-2 bg-slate-400 bg-opacity-70 rounded-md font-semibold text-sm">{category.toUpperCase()}</span>
          {/* <span className=" py-1 px-2 bg-slate-400 bg-opacity-70 rounded-md font-semibold text-sm">dddd</span> */}
        </div>
        <img className='absolute top-2 right-2 bg-slate-400 p-1 bg-opacity-70 rounded-full hidden group-hover:block' src={img2} alt="" />
      </figure>
      <div className="px-4">
        <p className="text-2xl font-bold mb-5 hover:underline">{title}</p>
        <User user={author} date={date} />
        <p className="text-[#6C757D] text-sm mb-4">
          {body[0].substring(0, 200)}...
        </p>
        <button className="font-bold text-[#121416] underline mb-3">View More</button>
      </div>
    </div>
  );
};

export default Card;

const User = ({user, date}) => {
  const letterOfName = user.name.toUpperCase().split('')[0]
  return (<div className="flex items-center gap-4 mb-4">
      {user.img ? <img className='w-10 h-10 rounded-full' src={user.img} /> : <div className="w-10 h-10 rounded-full bg-slate-500 flex justify-center items-center"><span className='block font-bold text-white '>{letterOfName}</span></div>}
      <div className="flex items-center md:gap-4 flex-col md:flex-row md:flex-grow">
        <p className="text-[#121416] text- font-bold">{user.name}</p>
        <hr className="flex-grow  hidden md:block" />
        <p className="text-[#6C757D] text-sm">{moment(date).format('D MMM, YYYY')}</p>
      </div>
    </div>
  );
};
