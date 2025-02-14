import styled from 'styled-components';

const Photos = () => {
    return (
        <StyledWrapper>
            <div className="main z-1">
                <div id="c1" className="Card"><div className="box w-[75px] h-[75px] mt-[7px]"><img src={"https://media.discordapp.net/attachments/808570701698039818/1337768072802734184/rutu4.jpg?ex=67a8a51b&is=67a7539b&hm=c0b91aa7677f8f8eea119d7ec77ad36700f9e14de57d45d8cd70b024053eabfd&=&format=webp&width=645&height=645"} alt="us1"/></div></div>
                <div id="c2" className="Card"><div className="box w-[75px] h-[75px] mt-[7px]"><img src={"https://media.discordapp.net/attachments/808570701698039818/1337768072525647922/rutu3.jpg?ex=67a8a51b&is=67a7539b&hm=c7a91c4c7064e79f4ee00bd59d9e77c22802bf4721523537bda5856576559f1a&=&format=webp&width=645&height=645"} alt="us1"/></div></div>
                <div id="c3" className="Card"><div className="box w-[75px] h-[75px] mt-[7px]"><img src={"https://media.discordapp.net/attachments/808570701698039818/1337768072265859155/rutu2.jpg?ex=67a8a51a&is=67a7539a&hm=db4fd3d24c6a78e3693c3cee6b6b24d478a35855ffe9115cfa60a44b835664f2&=&format=webp&width=645&height=645"} alt="us1"/></div></div>
                <div id="c4" className="Card"><div className="box w-[75px] h-[75px] mt-[7px]"><img src={"https://media.discordapp.net/attachments/808570701698039818/1337768071963738284/rutu1.jpg?ex=67a8a51a&is=67a7539a&hm=e7175a3eb4d7706d230673d769f937c4254067fc3952d1ed3b0f3f97f4597c4d&=&format=webp&width=645&height=645"} alt="us1"/></div></div>
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
