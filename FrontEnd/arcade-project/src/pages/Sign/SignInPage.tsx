import KakaoLogin from '../../components/Sign/KakaoLogin';
import GoogleLogin from '../../components/Sign/GoogleLogin';
import TwitterLogin from '../../components/Sign/TwitterLogin';
//가져온 정보를 어떻게 db에 저장을 하고 어떤식으로 로그인을 유지 할 것인지 생각해보기(restapi , jws)

const SignInPage = () => {
  return (
    <>
      <div>로그인페이지</div>
      <KakaoLogin />
      <GoogleLogin />
      <TwitterLogin />
    </>
  );
};

export default SignInPage;
