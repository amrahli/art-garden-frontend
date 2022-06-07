import React from 'react'
import Service from "../components/Service";
import { persistor, store } from '../store/reducers/store'
import { Provider } from 'react-redux'



const ModalService: React.FC = (props) => {

    return (
        <div className={"modal service-modal "}>
            <div className="modal-body">
                <span className="close-button" onClick={()=>{console.log("ok")}}>&times;</span>
                <div className="modal-header">
                    <h2>Art Studio</h2>
                </div>
                <div className="modal-content">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quibusdam animi aliquid corporis ratione neque officia aperiam quod eum reprehenderit sunt error a eos sit rem illum deleniti eius veniam!
                    </p>
                </div>
                <div className="modal-footer">
                    Test Footer
                </div>
            </div>
        </div>
    )
}

export default ModalService
