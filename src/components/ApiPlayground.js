import React, { useState } from 'react';
import styles from './ApiPlayground.module.css';

export default function ApiPlayground({ method = 'POST', endpoint, defaultBody = {}, successResponse = {}, errorResponse = {} }) {
  const [requestBody, setRequestBody] = useState(JSON.stringify(defaultBody, null, 2));
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);


  // adding the commnts 
  const simulateRequest = (type) => {
    setLoading(true);
    setResponse(null);
    setStatus(null);

    // Artificial delay for realism
    setTimeout(() => {
      if (type === 'success') {
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
        <span className={`${styles.method} ${styles[`method${method}`]}`}>{method}</span>
        <code className={styles.endpoint}>{endpoint}</code>
      </div>

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

      <div className={styles.actions}>
        <button 
          className={styles.successBtn} 
          onClick={() => simulateRequest('success')}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Simulate 200 OK'}
        </button>
        <button 
          className={styles.errorBtn} 
          onClick={() => simulateRequest('error')}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Simulate 400 Error'}
        </button>
      </div>

      {status && (
        <div className={styles.responseSection}>
          <div className={styles.sectionHeader}>
            <span>Response</span>
            <span className={`${styles.statusBadge} ${status === 200 ? styles.status200 : styles.status400}`}>
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
