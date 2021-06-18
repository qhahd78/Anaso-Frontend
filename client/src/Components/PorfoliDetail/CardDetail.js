import React from 'react';
import styled from 'styled-components';
import {
  UserDetailAPI,
  UserProjectDeleteAPI,
  UserProjectDetailAPI,
} from '../../Api/Project/Project';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';
import { useState, useEffect } from 'react';
import Button from '../common/Button/Button';
import { useSelector } from 'react-redux';
const Title = styled.p`
  font-family: 'Spoqa-Medium';
  font-size: 1.5rem;
`;
import { Link } from 'react-router-dom';

function CardDetail({ match }) {
  const userId = useSelector((state) => state.userInfo.userInfo.userID);
  const token = useSelector((state) => state.auth.currentToken);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const carddetail = match.params.id;
  // console.log(carddetail);
  const clickdel = () => {
    console.log(carddetail);
    alert('삭제되었습니다.');
    UserProjectDeleteAPI(carddetail, config);
  };
  // console.log(carddetail);
  // state 설정
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { userid } = match.params;
  useEffect(() => {
    // 컴포넌트가 화면에 나타날 때 실행할 함수
    const fetchDetails = async () => {
      try {
        // Error, Porfol 빈값으로, Loading true 로 로딩화면 보이게
        setError(null);
        setLoading(true);
        // api 로부터 호출된 값 저장
        const result = (await UserProjectDetailAPI(carddetail)).data;
        // state에 저장
        // console.log(result.user_id);
        setDetails(result);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false); // 응답이 오면 Loading 종료
    };
    // 함수 fetchUsers 실행
    fetchDetails();
  }, []);
  // 로딩 시
  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  // 에러 발생 시
  if (error)
    return (
      <>
        <Error />
      </>
    );
  return (
    <>
      <Title>{details.title}</Title>
      <img width="300px" height="300px" src={details.thumbnail} />
      <div>
        <p>여기는 내용</p>
      </div>
      {details.role}
      {/* {details.participant} */}
      {userId === details.user_id ? (
        <Link to={`/portfoliodetail/${userId}`}>
          <Button
            text="이 프로젝트 삭제하기"
            color="coral"
            onClick={clickdel}
          />
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}

export default CardDetail;
