import React from 'React'
import { withRouter } from 'react-router-dom';

class DetailsButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            detail_button_hover: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        // this.clickHandler = this.clickHandler.bind(this);
    }

    handleMouseEnter(){
        this.setState({
            detail_button_hover: true
        });
    }

    handleMouseLeave(){
        this.setState({
            detail_button_hover: false
        })
    }

    clickHandler(){
        //  logic to send show page to modal
    }

    render(){

        let details_button_container = 'detailsbutton-container'
        let icon_class = 'material-icons details'
        let load_details = 'load-details-container'

        if (this.state.detail_button_hover) {
            details_button_container = 'detailsbutton-container-2'
            icon_class = 'material-icons details-2'
            load_details = 'load-details-container-2'
        }


        return(
            <div className={details_button_container}>
                <div className ={icon_class} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}> arrow_forward</div>
                <div className={load_details}>
                    <div className='text-details-container'>
                        <div className='details-text'>
                            GO TO DETAILS PAGE
                        </div>
                    </div>
                    {/* <div className='material-icons downarrowcontainer'> 
                        <div className='material-icons downarrow'> arrow_drop_down</div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(DetailsButton)