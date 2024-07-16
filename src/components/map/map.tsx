import type { MapRef, MapProps } from 'react-map-gl';

import MapGL from 'react-map-gl';
import { forwardRef } from 'react';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export const Map = forwardRef<MapRef, MapProps>(({ ...other }, ref) => (
  // @ts-ignore
  <MapGL
    ref={ref}
    mapLib={import('mapbox-gl') as any}
    mapboxAccessToken={CONFIG.mapbox.apiKey}
    {...other}
  />
));
