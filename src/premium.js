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
          <div className='numbers'>
            <div className='numUsers' style={{ display: 'flex', flexDirection: 'column'}}>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginTop: '50px', lineHeight: '15px' }}>
                <div><p style={{ color: 'rgb(240, 171, 44)', opacity: '0.5', fontWeight: 'bolder', fontSize: '10px'}}>Start from</p></div>
                <div><p style={{ color: 'grey', opacity: '0.5', fontWeight: 'bolder', fontSize: '10px'}}>NGN</p></div>
                <div><p style={{ fontWeight: 'bolder', fontSize: '13px'}}>5,999,999</p></div>
                <div><p style={{ color: 'grey', fontWeight: 'bolder', fontSize: '10px'}}>per annum</p></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft:'10px', lineHeight: '17px'}}>
                <div><p style={{ color: 'black', fontSize: '15px', fontWeight: 'bolder'}}>Premium</p></div>
                <div><p style={{ color: 'grey', fontSize: '10px', fontWeight: 'bold'}}>100 users . All Modules</p></div>
              </div>
            </div>
            <div className='basic' style={{ display: 'flex', flexDirection: 'column', padding: '20px', border: '1px solid rgb(160, 160, 255)', borderRadius: '5px', background: 'rgb(240, 240, 248)' }}>
              <div><p style={{ color: 'blue', fontWeight: 'bold', fontSize: '15px'}}>Basic</p></div>
              <div style={{ marginTop: '4px'}}><p>30 days trial on our premium</p></div>
              <div style={{ marginTop: '4px'}}><p>App features and features</p></div>
              <br />
              <div><pre style={{ color: 'grey', fontWeight: 'bold', fontSize: '12px'}}>INCLUDES ------------- </pre></div>
              <div style={{ marginTop: '4px'}}><p>- 25 users</p></div>
              <div style={{ marginTop: '4px'}}><p>-All modules and features</p></div>
              <div style={{ marginTop: '4px'}}><p>-Unlimited commitees</p></div>
              <div style={{ marginTop: '4px'}}><p>-Unlimited role creation</p></div>
            </div>
          </div>
          <div className='users'>
            <div><p style={{ color: 'grey', fontWeight: 'bold', fontSize: '13px'}}>Add more users</p></div>
            <div style={{ marginTop: '4px'}}><p style={{ color: 'grey', fontWeight: 'bold', fontSize: '10px'}}>NGN99,999 <span style={{ fontSize: '10px', fontWeight: '400'}}>per user</span></p></div>
            <div></div>
          </div>
          <div className='modules'>4</div>
          <div className='continue'>
            <div><p>Go Back</p></div>
            <div><button>Continue</button></div>
          </div>
        </div>
    )
}

export default Premium;
