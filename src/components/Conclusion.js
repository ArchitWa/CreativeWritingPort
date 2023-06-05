import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import PieceOneText from './piece_one/PieceOneText';
import PieceTwoText from './piece_two/PieceTwoText';

export default function Conclusion() {
    const navigate = useNavigate();

    const [isHomePageAnimated, setIsHomePageAnimated] = useState(false);
    const [isP1PageAnimated, setIsP1PageAnimated] = useState(false);
    const [isP2PageAnimated, setIsP2PageAnimated] = useState(false);

    const page_order = ["/", "/pieceone", "/piecetwo", "/conclusion"]

    const handleClick = (num) => {
        if (isHomePageAnimated || isP1PageAnimated || isP2PageAnimated) return;
        if (num === 0) {
            setIsHomePageAnimated(true);
            setIsP1PageAnimated(true);
            setIsP2PageAnimated(true);
        }
        if (num === 1) {
            setIsP1PageAnimated(true);
            setIsP2PageAnimated(true);
        }
        if (num === 2) {
            setIsP2PageAnimated(true);
        }

        setTimeout(() => navigate(page_order[num]), 1200); // Adjust the duration of the animation
    };

    return (
        <div>
            <div className={`home-page border absolute z-[3] bg-platinum border-platinum w-[3%] h-[80rem]  shadow ${isHomePageAnimated ? "home-page-open" : ""} `}>
                <div className='home-page-text mr-1' onClick={() => handleClick(0)}>
                    <div className="nav-text unselectable" style={{ fontFamily: "akshar" }}>
                        <span>H</span><br />
                        <span>O</span><br />
                        <span>M</span><br />
                        <span>E</span><br />
                    </div>
                </div>
            </div>

            <div className={`piece-one-page border absolute z-[2] bg-bittersweet-300 border-bittersweet-300 w-[6%] h-[80rem]  shadow ${isP1PageAnimated ? "p1-page-open" : ""}`}>
                <div className='piece-one-page-text mr-[0.3rem]' onClick={() => handleClick(1)}>
                    <div className="nav-text unselectable" style={{ fontFamily: "akshar" }}>
                        <span>P</span><br />
                        <span>I</span><br />
                        <span>E</span><br />
                        <span>C</span><br />
                        <span>E</span><br />
                        <span>&nbsp;</span><br />
                        <span>O</span><br />
                        <span>N</span><br />
                        <span>E</span><br />
                    </div>
                </div>

                <div className={`${isP1PageAnimated ? "ml-[3%]" : "hidden"}`}>
                    <PieceOneText />
                </div>
            </div>

            <div className={`piece-two-page border absolute z-[1] bg-oxford-blue-200 border-oxford-blue-200 w-[9%] h-[80rem]  shadow ${isP2PageAnimated ? "p2-page-open" : ""}`}>
                <div className='piece-two-page-text mr-1' onClick={() => handleClick(2)}>
                    <div className="nav-text unselectable" style={{ fontFamily: "akshar" }}>
                        <span>P</span><br />
                        <span>I</span><br />
                        <span>E</span><br />
                        <span>C</span><br />
                        <span>E</span><br />
                        <span>&nbsp;</span><br />
                        <span>T</span><br />
                        <span>W</span><br />
                        <span>O</span><br />
                    </div>
                </div>

                <div className={`${isP2PageAnimated ? "ml-[6%]" : "hidden"}`}>
                    <PieceTwoText />
                </div>
            </div>

            <div className={`conclusion-page border absolute bg-khaki left-[3%] border-khaki w-[97%] h-[80rem]  shadow`}>
                <div className='conclusion-page-text mr-1'>
                    <div className="nav-text unselectable " style={{ fontFamily: "akshar" }}>
                        <span>C</span><br />
                        <span>O</span><br />
                        <span>N</span><br />
                        <span>C</span><br />
                        <span>L</span><br />
                        <span>U</span><br />
                        <span>S</span><br />
                        <span>I</span><br />
                        <span>O</span><br />
                        <span>N</span><br />
                    </div>
                </div>
            </div>
        </div>
    )
}