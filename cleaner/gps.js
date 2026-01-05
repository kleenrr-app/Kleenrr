import { supabase } from '/supabase.js'

const cleanerId = 'PUT_CLEANER_UUID_HERE'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-83.0, 40.0],
  zoom: 13
})

let marker

window.startTracking = () => {
  navigator.geolocation.watchPosition(async (pos) => {
    const { latitude, longitude } = pos.coords

    if (!marker) {
      marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map)
    } else {
      marker.setLngLat([longitude, latitude])
    }

    await supabase
      .from('cleaners')
      .update({ lat: latitude, lng: longitude })
      .eq('id', cleanerId)
  })
}
