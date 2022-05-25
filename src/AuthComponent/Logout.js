import {signOut, getAuth} from "../fbase";


const Logout = () => {
    const auth=getAuth();
    auth.signOut();
    return(
        <div className='Test'>
          <h1>로그아웃되었습니다...!</h1>
        </div>
    );

}

export default Logout;