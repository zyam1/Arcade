import { Link } from 'react-router-dom';

const Test = () => {
  return (
    <>
      <div>아케이드 페이지 테스트</div>
      <Link to={'/signin'}>로그인페이지</Link>
    </>
  );
};

export default Test;
