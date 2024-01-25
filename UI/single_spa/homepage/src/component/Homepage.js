import React, { useEffect, useState ,useRef} from 'react';
import axios from 'axios';
import sharedConfig from '../../src/config/config';

export default function Homepage() {
  const backendendpoint = sharedConfig.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState([]);
  const isMounted = useRef(true);
  const microservices = sharedConfig.MICROSERVICES;
  useEffect(() => {
    return () => {
      // Cleanup to set isMounted to false when the component unmounts
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      console.log('API call initiated...');
      const requests = microservices.map((serviceName) =>
        axios.get(`${backendendpoint}/${serviceName}`).catch((error) => {
          // handle error
        })
      );
  
      Promise.all(requests)
        .then((responses) => {
          console.log('API call completed successfully.');
          const responseData = responses.map((response) => response);
          setData(responseData);
        })
        .catch((error) => {
          console.error('Error making API calls:', error);
          setErrors((prevErrors) => [...prevErrors, 'Failed to fetch data. Please try again.']);
        });
    }
  }, [backendendpoint, microservices]);

    return (
      <div
        style={{
          flex: 1,
          maxWidth: 'lg',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          padding: '1rem',
          minHeight: 'calc(75vh - 2rem)', // Adjust the padding and border height accordingly
     
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            margin: '1rem 0',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: '#2a3b4c',
                  color: 'white',
                  padding: '0.5rem',
                  textAlign: 'left',
                  borderBottom: '2px solid white',
                }}
              >
                Microservice
              </th>
              <th
                style={{
                  backgroundColor: '#2a3b4c',
                  color: 'white',
                  padding: '0.5rem',
                  textAlign: 'left',
                  borderBottom: '2px solid white',
                }}
              >
                Response
              </th>
            </tr>
          </thead>
          <tbody>
            {errors.map((errorMessage, index) => (
              <tr key={index}>
                <td>{microservices[index]}</td>
                <td
                  style={{
                    color: 'red',
                    padding: '0.5rem',
                    borderBottom: '1px solid #2a3b4c',
                  }}
                >
                  {errorMessage}
                </td>
              </tr>
            ))}
            {data &&
              data.map((response, index) => (
                <tr key={index}>
                  <td>{microservices[index]}</td>
                  <td
                    style={{
                      padding: '0.5rem',
                      borderBottom: '1px solid #2a3b4c',
                    }}
                  >
                    {response ? (
                        response.error ? (
                          <p style={{ color: 'red' }}>{response.errorMessage}</p>
                        ) : (
                          <pre style={{ margin: 0 }}>{JSON.stringify(response.data, null, 2)}</pre>
                        )
                      ) : (
                        <p style={{ color: 'red' }}>Connection error. Unable to fetch data from the service.</p>
                      )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
  );
}
