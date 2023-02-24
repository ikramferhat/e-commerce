import React from 'react';
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps';
import { LocationOn } from '@material-ui/icons';

export default function Map1() {
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <Map center={[34.85969650610708, 5.718250338532792]} zoom={11}>
        <ZoomControl />
        <Marker
          anchor={[34.85969650610708, 5.718250338532792]}
          payload={1}
          onClick={({ event, anchor, payload }) => {}}
          color="red"
        />
        <Overlay anchor={[34.85969650610708, 5.718250338532792]} offset={[120, 79]}>
          <h3>IKRAM FERHAT</h3>
          <LocationOn style={{ fontSize: '38px', color: 'red' }} />
        </Overlay>
      </Map>
    </div>
  );
}