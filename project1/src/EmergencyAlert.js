import React, { useState, useEffect } from 'react';
import './EmergencyAlert.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Map2 from './Map2'; // Import the Map2 component

// Sample audio alert
import alertSound from './Images/emergency-alarm-69780.mp3';

// Sample emergency alert data with coordinates (latitude, longitude)
const initialAlerts = [
  { id: 1, person: 'John Doe', location: 'Building A', time: '2024-09-12 14:30', severity: 'high', coords: [51.505, -0.09] },
  { id: 2, person: 'Jane Smith', location: 'Building B', time: '2024-09-12 13:00', severity: 'medium', coords: [51.515, -0.1] },
  { id: 3, person: 'Michael Johnson', location: 'Parking Lot', time: '2024-09-12 15:45', severity: 'low', coords: [51.52, -0.08] },
];

// Safe zone coordinates (manually added)
const safeZones = [
  { id: 1, name: 'Safe Zone 1', coords: [51.508, -0.11] },
  { id: 2, name: 'Safe Zone 2', coords: [51.52, -0.1] },
  { id: 3, name: 'Safe Zone 3', coords: [51.51, -0.08] },
];

const EmergencyAlert = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [selectedAlert, setSelectedAlert] = useState(null); // Track the selected alert
  const [sortOption, setSortOption] = useState('time');
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Function to handle sorting
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Function to sort alerts based on the selected option
  const sortedAlerts = [...alerts].sort((a, b) => {
    if (sortOption === 'severity') {
      const severityLevels = { high: 3, medium: 2, low: 1 };
      return severityLevels[b.severity] - severityLevels[a.severity];
    }
    return new Date(b.time) - new Date(a.time); // Sort by time (latest first)
  });

  // Function to play audio once the user enables it
  const playAudio = () => {
    if (audioEnabled && sortedAlerts.some((alert) => alert.severity === 'high')) {
      const audio = new Audio(alertSound);
      audio.play().catch((error) => {
        console.error("Audio playback failed", error);
      });
    }
  };

  // Activate flashing notification and audio alert
  useEffect(() => {
    if (audioEnabled) {
      playAudio();
    }
  }, [audioEnabled, sortedAlerts]);

  // Handle audio enabling by the user
  const handleEnableAudio = () => {
    setAudioEnabled(true); // Allow audio to play after user interaction
  };

  // Custom icon for the high-severity alert (blinking)
  const createBlinkingIcon = () => {
    return L.divIcon({
      className: 'blinking-marker',
      html: '<div class="blinking-circle"></div>',
      iconSize: [16, 16], // Adjust icon size
      popupAnchor: [0, -10], // Adjust popup position
    });
  };

  // Default marker icon for other severities
  const defaultIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  // Handle selecting an alert and centering the second map
  const handleAlertClick = (alert) => {
    setSelectedAlert(alert);
  };

  return (
    <div className="emergency-alert-container">
      {/* Flashing alert for high severity */}
      {sortedAlerts.some((alert) => alert.severity === 'high') && (
        <div className="flashing-alert">⚠️ SOS</div>
      )}

      {/* Sort by priority or time */}
      <div className="sort-options">
        <label>Sort by:</label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="time">Time</option>
          <option value="severity">Severity</option>
        </select>
      </div>

      {/* Alert list */}
      <div className="alert-list">
        {sortedAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`alert-item ${alert.severity}`}
            onClick={() => handleAlertClick(alert)}
            style={{ cursor: 'pointer' }} // Makes it clear that this is clickable
          >
            <div>
              <strong>Person:</strong> {alert.person}
            </div>
            <div>
              <strong>Location:</strong> {alert.location}
            </div>
            <div>
              <strong>Time:</strong> {alert.time}
            </div>
            <div>
              <strong>Severity:</strong> {alert.severity.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      {/* Map Section showing all alerts (Map 1) */}
      <div className="map-section">
        <h3>All Alert Locations</h3>
        <MapContainer
          center={[51.505, -0.09]} // Default center location
          zoom={13}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* All alert markers */}
          {alerts.map((alert) => (
            <Marker
              key={alert.id}
              position={alert.coords}
              icon={alert.severity === 'high' ? createBlinkingIcon() : defaultIcon}
            >
              <Popup>
                <strong>{alert.location}</strong> <br />
                {alert.person} <br />
                Severity: {alert.severity.toUpperCase()}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Conditionally render Map2 with selected alert and safe zones */}
      {selectedAlert && (
        <Map2 selectedAlert={selectedAlert} safeZones={safeZones} />
      )}
    </div>
  );
};

export default EmergencyAlert;
