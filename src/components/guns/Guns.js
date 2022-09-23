import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Gun from '../gun/Gun';
import '../guns/Guns.css'

const Guns = () => {
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data));
    }, []);
    const [guns, setGuns] = useState([])
    return (
        <div className='grid'>
            {
                guns.map((gun) => (<Gun
                    gun={gun}></Gun>)
                )
            }
        </div>
    );
};

export default Guns