import React, { useState } from 'react'
import ShowModal from './ShowModal';
import './modal.css'


function Modal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const mainModal = (
    <ShowModal closeModal={closeModal}>
      <div className="modal-wrapper" onClick={closeModal} ></div>
      <div className="modal-container">
        <h2>STAY TUNED</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio iusto, distinctio deserunt quae vitae rem quos ad dolores amet consectetur!</p>
        <button onClick={closeModal} className='modal-btn'>Accept It</button>
      </div>
    </ShowModal>
  )

  return (
    <>
      <button onClick={openModal} className='modal-btn'>Open Modal</button>
      {showModal && mainModal}

      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eius perferendis, consectetur ducimus officiis corrupti, labore dolorem autem iure quo delectus, ullam esse minima fuga veniam quasi reiciendis quibusdam. Quo.</p>
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>
    </>
  )
}

export default Modal
