import React from 'react';
import './premium.css';

const Premium = () => {
    return (
        <div className='premium'>
          <div className='trialDays'>
            <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
              <div><p style={{ color: 'grey', fontWeight: 'bold', fontSize: '13px'}}>HEY TERRY</p></div>
              <div style={{marginTop: '5px'}}><p style={{ color: 'black', fontSize: '20px', fontWeight: 'bolder'}}>Start your <span style={{ color: 'rgb(240, 171, 44)', fontStyle: 'italic', fontWeight: 'bolder'}}>30 days</span> Trial</p></div>
              <div style={{ marginTop: '10px'}}><p style={{ color: 'grey', fontSize: '10px'}}>Select your Preferred Package below</p></div>
            </div>
            <div className='NGN'>
              <div><p style={{ color: 'skyblue', fontSize: '10px', fontWeight: '700'}}>NGN</p></div>
              <div style={{marginTop: '2px'}}><p style={{ color: 'blue', fontWeight: 'bolder', fontSize: '20px'}}>1,999,999</p></div>
              <div style={{ marginTop: '3px'}}><p style={{ color: 'grey', fontWeight: 'bold'}}>Total<span style={{ fontSize: '10px'}}> (Excludes Vat)</span></p></div>
            </div>
          </div>
          <div className='numbers'>2</div>
          <div className='users'>3</div>
          <div className='modules'>4</div>
          <div className='continue'>5</div>
        </div>
    )
}

export default Premium;
