import React from 'react';
import { useState } from 'react';
import Modal from '../modal/Modal';

const Gun = (props) => {
    const [modalData, setModalData] = useState({})
    // console.log(modalData)
    const { name, img, bullet, category, price } = props.gun;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                <figure><img className='h-[300px]' src={img} alt="Guns" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>
                        <li>Category :{category}</li>
                        <li>Bullet :{bullet}</li>
                        <li>Price : <b>{price} $</b></li>
                    </p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-3" className="btn modal-button btn-outline btn-info" onClick={() => (setModalData(props.gun))}>Details</label>
                    </div>
                </div>
            </div>
            {
                modalData && <Modal modalData={modalData} setModalData={setModalData}></Modal>
            }
        </div >

    );
};

export default Gun;