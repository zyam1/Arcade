import React from 'react';

const KakaoLogin = () => {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  const kakaoLoginHandler = () => {
    window.location.href = link;
  };
  return (
    <>
      <button type="button" onClick={kakaoLoginHandler}>
        <img
          className=""
          alt="kakaoligin"
          src="http://localhost:3000/Logo/kakao_login_medium_narrow.png"
        />
      </button>
    </>
  );
};

export default KakaoLogin;
