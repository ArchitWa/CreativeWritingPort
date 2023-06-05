import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import PieceOneText from './piece_one/PieceOneText';
import PieceTwoText from './piece_two/PieceTwoText';
import HomeText from './HomeText';


export default function Home() {
    const navigate = useNavigate();

    const [isHomePageAnimated, setIsHomePageAnimated] = useState(false);
    const [isP1PageAnimated, setIsP1PageAnimated] = useState(false);
    const [isP2PageAnimated, setIsP2PageAnimated] = useState(false);

    const page_order = ["/", "/pieceone", "/piecetwo", "/conclusion"]

    const handleClick = (num) => {
        if (isHomePageAnimated || isP1PageAnimated || isP2PageAnimated) return;
        if (num === 1) setIsHomePageAnimated(true);
        if (num === 2) {
            setIsHomePageAnimated(true);
            setIsP1PageAnimated(true);
        }
        if (num === 3) {
            setIsHomePageAnimated(true)
            setIsP1PageAnimated(true);
            setIsP2PageAnimated(true);
        }

        setTimeout(() => navigate(page_order[num]), 1200); // Adjust the duration of the animation
    };

    return (
        <div className=''>
            <div className={`home-page border absolute z-[3] bg-platinum border-platinum w-[94%] h-[80rem]  shadow ${isHomePageAnimated ? "home-page-close" : ""} `}>
                <div className='home-page-text mr-1'>
                    <div className="nav-text unselectable" style={{ fontFamily: "akshar" }}>
                        <span>H</span><br />
                        <span>O</span><br />
                        <span>M</span><br />
                        <span>E</span><br />
                    </div>
                </div>

                <HomeText />

            </div>

            <div className={`piece-one-page border absolute z-[2] bg-bittersweet-300 border-bittersweet-300 left-[3%] w-[94%] h-[80rem]  shadow ${isP1PageAnimated ? "p1-page-close" : ""}`}>
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

                <PieceOneText />
            </div>

            <div className={`piece-two-page border absolute z-[1] bg-oxford-blue-200 border-oxford-blue-200 left-[6%] w-[94%] h-[80rem]  shadow ${isP2PageAnimated ? "p2-page-close" : ""}`}>
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

                <PieceTwoText />
            </div>

            {/* <div className={`conclusion-page border absolute bg-khaki border-khaki left-[9%] w-[91%] h-[80rem]  shadow`}>
                <div className='conclusion-page-text mr-1' onClick={() => handleClick(3)}>
                    <div className="nav-text unselectable" style={{ fontFamily: "akshar" }}>
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
            </div> */}
        </div>
    )
}