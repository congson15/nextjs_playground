import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import MovieList from '../../MovieList';
export default function Detail() {
    let img='https://img.phimmoichill.net/images/info/spider-man-no-way-home.jpg';
  return (
    <div className='hidden md:block min-h-screen'>
         <div className="relative  md:h-[30rem] lg:h-[45rem] xl:h-[50rem] pt-20 px-28">
            <img
                src={img}
                alt="background"
                className="brightness-[0.4] h-full w-full"
            />
            <div className='absolute md:top-44 xl:top-48 px-[5%] w-[90%]'>
                <div>
                    <span className='text-white md:text-[250%] xl:text-[400%] font-semibold font-monsterrat'>
                        Spider-Man: No Way Home
                    </span>
                    <p className="block mb-9 md:mb-3 my-5 font-normal text-gray-100 font-monsterrat">
                        <FontAwesomeIcon color="red" icon={faStar} /> 5.0 | 129 phút
                    </p>
                    <span className='flex flex-row text-red-600 font-bold gap-5 xl:text-[120%] font-monsterrat'>
                        <p>Hành động</p>
                        <p>Viễn tưởng</p>
                    </span>
                    <p className="hidden md:block font-monsterrat text-gray-50 md:my-5 w-5/6 lg:w-1/2">
                        Người Nhện: Xa Nhà - Spider-Man: Far From Home lấy bối cảnh
                        vào mùa hè tại vùng đất Châu Âu rộng lớn. Peter nghỉ hè và
                        cùng với những người bạn của mình đi du lịch đễ giải tỏa căng
                        thẳng. Thế nhưng, tưởng chừng một chuyến đi chơi đầy thú vị và
                        hai hước, thì bọn họ lại vô tình gặp vô số rắc rối và vô tình
                        bị cuốn vào một cuộc hành trình đi đến một chiều không gian
                        khác. Tại đây, Peter phải chiến đấu để có thể bảo vệ bạn bè
                        của mình?
                    </p>
                    <div className=' flex flex-row gap-4'>
                        <div className="dot grid place-items-center">
                            <FontAwesomeIcon color="white" icon={faPlay} />
                        </div>
                        <span className='text-white font-monsterrat grid place-items-center md:text-[150%] xl:text-[150%]'>
                            Xem ngay
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-20'>
            <MovieList title="Nội dung tương tự"/>
        </div>
    </div>
  )
}
