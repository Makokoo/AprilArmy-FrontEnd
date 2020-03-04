import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import thumbnail from '../assets/images/thumbnail.jpg';
import loading from '../assets/images/loading.gif';

class News extends Component{

    state = {
        isLoading: true,
        groups: []
      };
      
    async componentDidMount() {
       const response = await fetch('/basic/getNews');
       const body = await response.json();
       this.setState({ groups: body, isLoading: false });
    }

    render(){

        const {groups, isLoading} = this.state;

        if (isLoading) {
            return <p><img src={loading}></img></p>;
        }

        return (
            
        <div className="album py-5 bg-light">
            
            <div className="divider-new">
                <h3 className="h3-responsive text-black">Latest News</h3>
            </div>

            <hr className="col-md-4"/>
            
            <div className="container">
                <div className="row">

                {groups.map(card =>

                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img className="card-img-top" src={card.image == null ? thumbnail: card.image} alt="Card image cap"/>
                            <div className="card-body card-special">
                                <p className="card-text h5">
                                    {
                                        card.title.length < 30 ? card.title : card.title.substring(0,30).concat("...")
                                    }
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted text-left">
                                    {
                                        card.description.length < 200 ? card.description : card.description.substring(0,200).concat("...") 
                                    }
                                    </small>
                                </div>
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

export default News;