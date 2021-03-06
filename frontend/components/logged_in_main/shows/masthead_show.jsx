import React from 'react';
import DetailsButton from '../../buttons/details_button_container'
import MyStuffButton from '../../buttons/mystuff_button_container'
import MastheadPlayButton from '../../buttons/masthead_play_button'



class MastheadShow extends React.Component {
    constructor(props){
        super(props);
    }



    render() {
        

        let showinfo
        let epinfo;
        let showid
        if(this.props.show && this.props.episode){
            showinfo = this.props.show
            epinfo = this.props.episode
            showid = this.props.show.id
        } 
        return (
            <div className='masthead-details-container'>
                <ul className='masthead-show'>
                    <li>
                        <h2> WATCH THE TIMELESS CLASSIC</h2>
                    </li>
                    <li>
                         <h3>{this.props.show.title}</h3>
                    </li>
                    <li>
                        <h5>1995  ·  Old School  /  Action</h5>
                    </li>   
                    <li className='masthead-show-description'>
                        <h4>{this.props.show.description}</h4>
                    </li>
                    <li className='masthead-details-buttons'>
                        <ul className='masthead-details-buttons-list'>
                            <li>
                                <MastheadPlayButton video = {epinfo}/>
                            </li>
                            <li>
                                START WATCHING
                            </li>
                            <li>
                                <DetailsButton show={showinfo} episode={epinfo} />
                            </li>
                            <li>   
                                <MyStuffButton show={showid}/>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}


export default MastheadShow 