import React from 'react';
import {Link} from 'react-router-dom';

const Main =()=>{
    return(
        <>
            <img src="https://littledeep.com/wp-content/uploads/2020/03/fire_illustration_style1.png" width="80" height="80" alt='firedetection'/>
            <ul>
                <Link to= "/AuthComponent/Googlelogin">구글아이디로 쉽게 로그인하세요!   </Link>
                <Link to= "/GuideBook">firedetection 앱 사용설명서</Link>
                <Link to= "/AuthComponent/Logout">로그아웃하기</Link>
            </ul>

        </>

    );
}

export default Main;