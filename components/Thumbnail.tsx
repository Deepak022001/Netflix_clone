import { Movie } from '@/typing';
import Image from 'next/image';
interface Props {
  movie: Movie | DocumentData;
}
export default function thumbnail({ movie }: Props) {
  return (
    <div className='relative h-20 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image
        width={180}
        height={180}
        className='grid grid-cols-3 gap-20'
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=''
      ></Image>
    </div>
  );
}
