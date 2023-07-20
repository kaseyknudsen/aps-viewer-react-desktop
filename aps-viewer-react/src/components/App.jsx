import React, { useState, useRef } from 'react';
import Viewer from './Viewer';
import './App.css';

const App = (props) => {
    const [camera, setCamera] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);
    const wrapperRef = useRef(null);

    const onInputChange = (ev) => {
        const val = ev.target.value.trim();
        const ids = val.split(',').filter(e => e.length > 0).map(e => parseInt(e)).filter(e => Number.isInteger(e));
        setSelectedIds(ids);
    };

    return (
        <div className="app">
            <div style={{ position: 'relative', width: '800px', height: '600px' }}>
                <Viewer
                    runtime={{ accessToken: props.token }}
                    urn={props.urn}
                    selectedIds={selectedIds}
                    onCameraChange={({ viewer, camera }) => setCamera(camera.getWorldPosition())}
                    onSelectionChange={({ viewer, ids }) => setSelectedIds(ids)}
                    ref={wrapperRef}
                />
            </div>
            <div>
                Camera Position:
                {camera && `${camera.x.toFixed(2)} ${camera.y.toFixed(2)} ${camera.z.toFixed(2)}`}
            </div>
            <div>
                Selected IDs:
                <input type="text" value={selectedIds.join(',')} onChange={onInputChange} />
            </div>
            <button onClick={() => wrapperRef.current.viewer.autocam.goHome()}>Reset View</button>
        </div>
    );
};

export default App;
