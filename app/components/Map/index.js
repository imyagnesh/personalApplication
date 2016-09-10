import React, { PropTypes } from 'react';
import {
  GoogleMap,
  Marker,
} from 'react-google-maps';

import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader';

import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';


/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 *
 * We use React 0.14 stateless function components here.
 * https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
 */
const SimpleMap = ({ markers, containerElementProps, languageId }) => (
  <section>
    <ScriptjsLoader
      hostname={'maps.googleapis.com'}
      pathname={'/maps/api/js'}
      query={{ v: '3.exp', libraries: 'geometry,drawing,places', language: languageId }}
      loadingElement={
        <div {...containerElementProps} style={{ height: '100%' }}>
          <CircularProgress mode="indeterminate" color="white" size={0.5} />
        </div>
      }
      containerElement={
        <div
          {...containerElementProps}
          style={{
            height: '100%',
            minHeight: '460px',
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 12.849830, lng: 77.646654 }}
        >
          {markers.map((marker) => (
            <Marker
              {...marker}
            />
          )) }
        </GoogleMap>
      }
    />
  </section>
);

SimpleMap.propTypes = {
  markers: PropTypes.array,
  containerElementProps: PropTypes.object,
  languageId: PropTypes.string.isRequired,
};

export default SimpleMap;
