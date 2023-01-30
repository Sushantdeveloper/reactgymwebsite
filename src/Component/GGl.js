import { render } from '@testing-library/react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

const GGl=()=>{
    render() 
    return(
        <div className="GGLMAP">
   <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
   
 </InfoWindow>
</Map>

        </div>
    );

}

export default GoogleApiWrapper({
    apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
  })(GGl)