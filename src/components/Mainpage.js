import React from 'react';
import { MainImg, Searchbox} from '../styles/MainpageStyle';
import mainimg from '../assets/main.jpg';



const Mainpage= () => {
  return (
    <div className='main'>
        <Searchbox>
            <div className='search-wrap'> 
                <h2>한국의 휴가 임대 시설</h2>
                <p>CoralParadise에서 독특한 숙소를 예약하세요.</p>
                <div className='search'>
                    <div className='location'><p>위치</p><input placeholder='검색' /></div>
                    <div className='check'>
                        <div><p>체크인</p><input placeholder='날짜 입력' /></div>
                        <div><p>체크아웃</p><input placeholder='날짜 입력'/></div>
                    </div>
                    <button>검색</button>
                </div>
            </div>
        </Searchbox>
        <MainImg>
            <img className="main-img"src={mainimg}/>
        </MainImg>
    </div>
  )
}

export default Mainpage
