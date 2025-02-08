import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProposalCard = () => {
    const [clickCount, setClickCount] = useState(0);
    const [popUpText, setPopUpText] = useState('');
    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedClickCount = sessionStorage.getItem('clickCount');
        if (storedClickCount) {
            setClickCount(parseInt(storedClickCount, 10));
        }
    }, []);

    const handleNoClick = () => {
        setClickCount(clickCount + 1);
        sessionStorage.setItem('clickCount', (clickCount + 1).toString());
        if (clickCount === 0) {
            setPopUpText('Hehehe, did you think you have a choice?');
            setShowPopUp(true);
            setTimeout(() => {
                setShowPopUp(false);
            }, 4000);
        }
        if (clickCount === 1) {
            setPopUpText('I am inevitable');
            setShowPopUp(true);
            setTimeout(() => {
                setShowPopUp(false);
            }, 2000);
        }
        if (clickCount === 2) {
            setPopUpText('You can run, but you cannot hide');
            setShowPopUp(true);
            setTimeout(() => {
                setShowPopUp(false);
            }, 2000);
        }
        if (clickCount === 3) {
            setPopUpText('Keep tyring you silly goose');
            setShowPopUp(true);
            setTimeout(() => {
                setShowPopUp(false);
            }, 2000);
        }
        if (clickCount === 4) {
            setPopUpText('You are mine now!');
            setShowPopUp(true);
            setTimeout(() => {
                setShowPopUp(false);
            }, 2000);
        }
    }

    const handleYesClick = () => {
        navigate('/memories');
    }

    return (
        <StyledWrapper>
            <div className="brutalist-card">
                <div className="brutalist-card__header">
                    <div className="brutalist-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                    </div>
                    <div className="brutalist-card__alert">Undeniable Proposal</div>
                </div>
                <div className="brutalist-card__message">Will you be my Valentine?</div>
                <div className="brutalist-card__actions">
                    <button className="brutalist-card__button brutalist-card__button--yes" onClick={handleYesClick}>Yes!</button>
                    {clickCount < 5 && (
                        <button className="brutalist-card__button brutalist-card__button--no" onClick={handleNoClick} style={{transform: `scale(${1 - clickCount * 0.2}`}}>No</button>
                    )}
                </div>
                {showPopUp && <div className="popup">{popUpText}</div>}
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .brutalist-card {
        width: 320px;
        border: 4px solid #000;
        background-color: #fff;
        padding: 1.5rem;
        box-shadow: 10px 10px 0 #000;
        font-family: "Arial", sans-serif;
    }

    .brutalist-card__header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid #000;
        padding-bottom: 1rem;
    }

    .brutalist-card__icon {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        padding: 0.5rem;
    }

    .brutalist-card__icon svg {
        height: 1.5rem;
        width: 1.5rem;
        fill: #fff;
    }

    .brutalist-card__alert {
        font-weight: 900;
        color: #000;
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    .brutalist-card__message {
        margin-top: 1rem;
        color: #000;
        font-size: 0.9rem;
        line-height: 1.4;
        border-bottom: 2px solid #000;
        padding-bottom: 1rem;
        font-weight: 600;
    }

    .brutalist-card__actions {
        margin-top: 1rem;
    }

    .brutalist-card__button {
        display: block;
        width: 100%;
        padding: 0.75rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        border: 3px solid #000;
        background-color: #fff;
        color: #000;
        position: relative;
        transition: all 0.2s ease;
        box-shadow: 5px 5px 0 #000;
        overflow: hidden;
        text-decoration: none;
        margin-bottom: 1rem;
    }

    .brutalist-card__button--no {
        background-color: #000;
        color: #fff;
    }

    .brutalist-card__button::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
                120deg,
                transparent,
                rgba(255, 255, 255, 0.3),
                transparent
        );
        transition: all 0.6s;
    }

    .brutalist-card__button:hover::before {
        left: 100%;
    }

    .brutalist-card__button:hover {
        transform: translate(-2px, -2px);
        box-shadow: 7px 7px 0 #000;
        cursor: pointer;
    }

    .brutalist-card__button--yes:hover {
        background-color: #0f9800;
        border-color: #0f9800;
        color: #fff;
        box-shadow: 7px 7px 0 #015b05;
    }

    .brutalist-card__button--no:hover {
        background-color: #ff0000;
        border-color: #ff0000;
        color: #fff;
        box-shadow: 7px 7px 0 #800000;
    }

    .brutalist-card__button:active {
        transform: translate(5px, 5px);
        box-shadow: none;
    }
    .popup {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000;
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }`;

export default ProposalCard;
