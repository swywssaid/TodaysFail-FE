import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import ReceiptShareContainer from '../../components/receipt/ReceiptShareContainer';

export default function SharePage() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const shareBtnType = {
    bgColor: 'black',
    width: '145',
    fontSize: '16',
    isHover: 'false',
    isFixed: 'true',
  };

  const modalBtnType = {
    bgColor: 'black',
    width: '95',
    fontSize: '16',
  };

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <Container>
      <h1 className='sr-only'>나의 영수증 공유 페이지</h1>
      <ReceiptShareContainer />
      <Button
        type={shareBtnType}
        text={'자랑하기'}
        handleClick={() => {
          setIsVisibleModal(true);
        }}
      />
      {isVisibleModal && (
        <Modal mainText={'주소가 복사되었습니다'} subText={'오늘의 실패를  부담없이 공유해보세요!'}>
          <Button
            type={modalBtnType}
            text={'그럴게요'}
            handleClick={() => {
              handleClick();
              setIsVisibleModal(false);
            }}
          />
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 19px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
