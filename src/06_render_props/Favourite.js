
import { React, Component } from 'react';
import Toggle from './Toggler';

function Favourite() {

        return (
            <Toggle render={ function (on, toggle) {
                    return (
                        <div>
                            <h3>Click heart to favorite</h3>
                            <h1>
                                <span
                                    onClick={toggle}>
                                    {on ? "❤️" : "♡"}
                                </span>
                            </h1>
                        </div>
                    )}
                
            } />
            
        )
    
}


export default Favourite