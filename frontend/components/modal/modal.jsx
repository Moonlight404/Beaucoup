import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../login_form/signup_form_container';


// // function Modal({ modal, closeModal }) {
//     if (!modal) {
//         return null;
//     }

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            let component;
            switch (this.props.modal) {
                case 'login':
                    component = <LoginFormContainer />
                    break
                case 'signup':
                    component = <SignupFormContainer />
                    break
                default:

                    return null;
            }
        


        let modalchild = "modal-child";



        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className={modalchild} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    }

}



const mapStateToProps = (state, ownProps) => {
    return ({
        modal: state.ui.modal
    });
};

const mapDispatchToProps = (dispatch) => {

    return ({
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    });

};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);