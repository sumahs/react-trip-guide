import React, {component, Component} from 'react';
import Trip from "../Trip";
import { tourData } from "../../tourData";
import './triplist.scss';

export default class triplist extends Component {
    state ={
        trips: tourData
    }
    removeTrip = id =>{
        console.log(id);
        const{trips} =this.state;
        const sortedTrip = trips.filter(trips => trips.id !== id);
        this.setState({
            trips :sortedTrip
        })
    }
    render() {
        //console.log(this.state.tours);
        const{trips} = this.state;
        return(
            <section className="triplist">
                {
                    trips.map(trip => (<Trip key={trip.id} trip={trip}
                         removeTrip={this.removeTrip}/>))
                }
            </section>
        );
    }
}