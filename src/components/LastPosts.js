import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import thumbnail from '../assets/images/thumbnail.jpg';
import loading from '../assets/images/loading.gif';

const avatarStyle = {
    height: 50,
    width: 50
}

class LastPosts extends Component{

    state = {
        isLoading: true,
        groups: []
      };
      
    async componentDidMount() {
       const response = await fetch('/basic/getLastPosts');
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
                <h3 className="h3-responsive text-black">Latest Posts</h3>
            </div>

            <hr className="col-md-4"/>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {groups.map(post =>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="col-md-1">
                                        <img src={thumbnail} style={avatarStyle} className="rounded-circle border border-warning"/>
                                    </div>
                                    <div className="col-md-3">
                                        <a className="text text-dark" href={post.title}>
                                            {
                                                post.title.length < 80 ? post.title : post.title.substring(0,80).concat("...") 
                                            }
                                        </a>
                                    </div>
                                    <div className="text-muted">
                                        {
                                            post.content.length < 80 ? post.content : post.content.substring(0,80).concat("...") 
                                        }
                                    </div>
                                    <span className="badge badge-warning badge-pill">{post.userId}</span>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
      </div> 
        );
    };

}

export default LastPosts;