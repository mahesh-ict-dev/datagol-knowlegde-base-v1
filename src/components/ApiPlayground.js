import React, { useState } from 'react';
import styles from './ApiPlayground.module.css';

export default function ApiPlayground({ method = 'POST', endpoint, defaultBody = {}, successResponse = {}, errorResponse = {} }) {
  const [requestBody, setRequestBody] = useState(JSON.stringify(defaultBody, null, 2));
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [isLive, setIsLive] = useState(false);

  const handleRequest = async (simType = 'success') => {
    setLoading(true);
    setResponse(null);
    setStatus(null);

    // LIVE MODE: Real Fetch Call
    if (isLive) {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
        
        if (token) {
          // Detect if it's a Service Token (starts with x- or similar) or Bearer
          if (token.length < 50) {
            headers['x-auth-token'] = token;
          } else {
            headers['Authorization'] = `Bearer ${token}`;
          }
        }
        const options = {
          method,
          headers,
        };

        if (method !== 'GET' && method !== 'DELETE') {
          options.body = requestBody;
        }

        const baseUrl = 'https://be.datagol.ai';
        const absoluteUrl = endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`;

        const res = await fetch(absoluteUrl, options);
        setStatus(res.status);
        const data = await res.json();
        setResponse(data);
      } catch (err) {
        setStatus('Error');
        setResponse({ error: "Network Error", message: err.message });
      } finally {
        setLoading(false);
      }
      return;
    }

    // SIMULATION MODE
    setTimeout(() => {
      if (simType === 'success') {
        setStatus(200);
        setResponse(successResponse || { message: "Action completed successfully", success: true });
      } else {
        setStatus(400);
        setResponse(errorResponse || { error: "Bad Request", message: "Required fields are missing or invalid", code: "ERR_VALIDATION_FAILED" });
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className={styles.playgroundContainer}>
      <div className={styles.header}>
        <span className={`${styles.method} ${styles[`method${method.toLowerCase()}`]}`}>{method}</span>
        <code className={styles.endpoint}>{endpoint}</code>
        
        <div className={styles.modeToggle}>
          <button 
            className={`${styles.toggleBtn} ${!isLive ? styles.activeToggle : ''}`}
            onClick={() => setIsLive(false)}
          >
            Simulation
          </button>
          <button 
            className={`${styles.toggleBtn} ${isLive ? styles.activeToggle : ''}`}
            onClick={() => setIsLive(true)}
          >
            Live
          </button>
        </div>
      </div>

      {isLive && (
        <div className={styles.authSection}>
          <div className={styles.sectionHeader}>
            <span>Authentication</span>
          </div>
          <input 
            type="text" 
            placeholder="Paste x-auth-token or Bearer Token here..." 
            className={styles.tokenInput}
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
      )}

      {method !== 'GET' && method !== 'DELETE' && (
        <div className={styles.editorSection}>
          <div className={styles.sectionHeader}>
            <span>Request Body (JSON)</span>
          </div>
          <textarea
            className={styles.textArea}
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            spellCheck="false"
          />
        </div>
      )}

      <div className={styles.actions}>
        {isLive ? (
          <button 
            className={styles.successBtn} 
            onClick={() => handleRequest()}
            disabled={loading}
          >
            {loading ? 'Executing...' : `Execute ${method} Request`}
          </button>
        ) : (
          <>
            <button 
              className={styles.successBtn} 
              onClick={() => handleRequest('success')}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Simulate 200 OK'}
            </button>
            <button 
              className={styles.errorBtn} 
              onClick={() => handleRequest('error')}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Simulate 400 Error'}
            </button>
          </>
        )}
      </div>

      {status && (
        <div className={styles.responseSection}>
          <div className={styles.sectionHeader}>
            <span>Response</span>
            <span className={`${styles.statusBadge} ${status === 200 || (status >= 200 && status < 300) ? styles.status200 : styles.status400}`}>
              Status: {status}
            </span>
          </div>
          <pre className={styles.responseBody}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
