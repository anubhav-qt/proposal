import styled from 'styled-components';
import Photos from "./Photos.tsx";
import Photo from "./Photo.tsx";
import HiddenMessageButton from "./HiddenMessageButton.tsx";


const Memories = () => {
    return (
        <StyledWrapper>
            <div className="card memories">
                <Photo />
                <div className="first-text relative w-[145px] top-[-79px] left-[138px]">I am the luckiest guy ever to have you as my Valentine!🥰💘</div>
                <Photos />
                <div className="second-text z-0 relative w-[124px] top-[-138px] left-[23px]">Every moment with you is my favourite💞</div>
                <HiddenMessageButton />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .memories {
        animation: fadeIn 2s ease-in-out;
    }
    
    .card {
    width: 300px;
    height: 450px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
               -15px -15px 30px #ffffff;
  }
    .extraText {
        opacity: 0;
        transition: opacity 2s ease-in;
    }

    .extraText.show {
        opacity: 1;
    }
`;

export default Memories;







