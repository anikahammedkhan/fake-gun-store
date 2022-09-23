import React from 'react';

const Modal = (modalData, setModalData) => {
    console.log(modalData, setModalData)
    const { id, name, img, bullet, price, category } = modalData.modalData;
    // console.log(id, name, img, bullet, price, category)
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => (modalData.setModalData(null))}>✕</label>
                    <figure><img className='h-[300px]' src={img} alt="Guns" /></figure>
                    <h2 className="card-title">{name}</h2>
                    <p>
                        <li>Category :{category}</li>
                        <li>Id :{id}</li>
                        <li>Bullet :{bullet}</li>
                        <li>Price : <b>{price} $</b></li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;