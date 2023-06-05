import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


export default function CustomPopup(props) {
    return (
        <div className='inline cursor-pointer unselectable'>
            <Popup
                trigger={<mark className={`${props.x ? "pr-1" : "px-1"} ${props.y === "1" ? "py-1" : "py-[0.5px]"} text-white  ${props.golden ? (props.color === "bg-bittersweet-400" ? "bg-oxford-blue-300" : "bg-bittersweet-300") : (props.color === "bg-bittersweet-400" ? "bg-bittersweet-300" : "bg-oxford-blue-300")} rounded-[0.4rem]`}> {props.text}</mark>}
            >
                {close => (
                    <div className={`${props.golden ? props.color === "bg-bittersweet-400" ? "bg-oxford-blue-400" : "bg-bittersweet-400" : props.color} rounded-2xl shadow-full animate-fade `}>
                        <div className="w-full text-sm p-2 text-white text-center first-letter:uppercase" > {props.device} </div>
                        {props.content ?
                            <div className="w-full py-10 px-5">
                                {props.content}
                            </div> :
                            ""
                        }
                    </div>
                )}
            </Popup>
        </div>
    )
}