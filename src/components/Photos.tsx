import styled from 'styled-components';

const Photos = () => {
    return (
        <StyledWrapper>
            <div className="main z-1">
                <div id="c1" className="Card"><div className="box w-[75px] h-[75px] mt-[7px]"><img src={"https://github.com/anubhav-qt/proposal/blob/master/public/rutu4.jpg"} alt="us1"/></div></div>
                <div id="c2" className="Card"><div className="box w-[75px] h-[75px] mt-[7px]"><img src={"https://github.com/anubhav-qt/proposal/blob/master/public/rutu3.jpg"} alt="us1"/></div></div>
                <div id="c3" className="Card"><div className="box w-[75px] h-[75px] mt-[7px]"><img src={"https://github.com/anubhav-qt/proposal/blob/master/public/rutu2.jpg"} alt="us1"/></div></div>
                <div id="c4" className="Card"><div className="box w-[75px] h-[75px] mt-[7px]"><img src={"https://github.com/anubhav-qt/proposal/blob/master/public/rutu1.jpg"} alt="us1"/></div></div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .Card {
    width: 90px;
    height: 120px;
    background: rgba(211, 211, 211, 0.199);
    position: absolute;
    transition: 0.3s ease-in-out;
    cursor: pointer;
      box-shadow: 2px 4px 5px #bebebe;
      margin-top: 20px;
      margin-left: 20px;
      border: 1px solid #aea9a9;
      display: flex;
        justify-content: center;
  }

  #c1 {
    background-color: white;
  }

  #c2 {
    background-color: white;
  }

  #c3 {
    background-color: white;
  }

  #c4 {
    background-color: white;
  }

  .main:hover #c1 {
    transform: translateX(-40px) rotate(-40deg);
  }

  .main:hover #c2 {
    transform: translateX(-20px) rotate(-30deg);
  }

  .main:hover #c3 {
    transform: translateX(0) rotate(-20deg);
  }

  .main:hover #c4 {
    transform: translateX(20px) rotate(-10deg);
  }

  #c1:hover {
    transform: translateX(-80px) rotate(0deg) !important;
  }

  #c2:hover {
    transform: translateX(-60px) rotate(0deg) !important;
  }

  #c3:hover {
    transform: translateX(-60px) rotate(0deg) !important;
  }

  #c4:hover {
    transform: translateX(20px) rotate(0deg) !important;
  }

  .main {
    display: grid;
    height: 120px;
    width: 90px;
    place-items: center;
      position: relative;
      left: 173px;
      top: -50px;
  }`;

export default Photos;
