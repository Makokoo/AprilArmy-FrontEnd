import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import thumbnail from '../assets/images/thumbnail.svg';

class Videos extends Component{

    state = {
        isLoading: true,
        groups: []
      };
      
    async componentDidMount() {
       const response = await fetch('/basic/getVideos');
       const body = await response.json();
       this.setState({ groups: body, isLoading: false });
    }

    render(){

        const {groups, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        console.log("datos: " + groups);

        return (
            
        <div className="album py-5 bg-light">
            
            <div className="divider-new">
                <h3 className="h3-responsive text-black">Latest Videos</h3>
            </div>
            <hr/>
            <div className="container">
                <div className="row">

                {groups.map(card =>

                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img className="card-img-top" src={card.image} alt="Card image cap"/>
                            <div className="card-body card-special">
                                <p className="card-text h5">
                                    {
                                        card.title.length < 30 ? card.title : card.title.substring(0,30).concat("...")
                                    }
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Published {card.modDate} days ago</small>
                            </div>
                        </div>
                    </div>
                    
                )}
            
                </div>
            </div>
      </div> 
        );
    };

}

export default Videos;