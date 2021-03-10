import React from 'react';
import './premium.css';
import second from './assets/second.png'
import colored from './assets/colored.png'
import circle from './assets/circle.png'
import first from './assets/first.png'
import chart from './assets/chart.png'
import users from './assets/users.png'
import groups from './assets/groups.png'
import book from './assets/none.png'
import contract from './assets/icons.png'

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
            <div><p style={{marginTop: '10px', fontSize: '10px', fontWeight: 'bolder', color: 'blue', marginLeft: '50px'}}>100</p></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginTop: '3px'}}>
              <p>0</p>
              <p>>1000</p>
            </div>
            <div style={{ display: 'flex'}}>
              <hr style={{ width: '54px', height: '5px', background: 'blue', borderRadius: '5px'}}/>
              <img style={{marginTop: '-8px'}} src={circle} alt='' />
              <hr style={{ width: '400px', height: '5px', background: 'rgb(211, 211, 247)', borderRadius: '5px'}}/>
            </div>
          </div>
          <div className='modules'>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <div style={{width: '20%', fontSize: '8px', opacity: '0.6', fontWeight: 'bolder' }}><pre>ALL MODULES</pre></div>
              <div style={{ width: '100%', color: 'grey', opacity: '0.4'}}><hr /></div>
            </div>
            <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{ display: 'flex', alignItems: 'center', width: '20%'}}>
                <div><img src={colored} alt='' /></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: '20%'}}>
                <div><img src={second} alt='' /></div>
                <div><p style={{ fontSize: '9px', color: 'grey', opacity: '0.7', marginLeft: '5px'}}>Corporate Universe</p></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: '20%'}}>
                <div><img src={contract} alt='' /></div>
                <div><p style={{ fontSize: '9px', color: 'grey', opacity: '0.7', marginLeft: '5px'}}>Contract Domain</p></div>
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{ display: 'flex', alignItems: 'center', width: '20%'}}>
                <div><img src={first} alt='' /></div>
                <div><p style={{ fontSize: '9px', color: 'grey', opacity: '0.7', marginLeft: '5px'}}>Investor Relations</p></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: '20%'}}>
                <div><img src={users} alt='' /></div>
                <div><p style={{ fontSize: '9px', color: 'grey', opacity: '0.7', marginLeft: '5px'}}>Dispue Portfolio</p></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: '20%'}}>
                <div><img src={book} alt='' /></div>
                <div><p style={{ fontSize: '9px', color: 'grey', opacity: '0.7', marginLeft: '5px'}}>Minute Book</p></div>
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center'}}>
              <div style={{ display: 'flex', alignItems: 'center', width: '20%'}}>
                <div><img src={chart} alt='' /></div>
                <div><p style={{ fontSize: '9px', color: 'grey', opacity: '0.7', marginLeft: '5px'}}>Reporting Tool</p></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: '20%', marginLeft: '90px'}}>
                <div><img src={groups} alt='' /></div>
                <div><p style={{ fontSize: '9px', color: 'grey', opacity: '0.7', marginLeft: '5px'}}>Attendance Register</p></div>
              </div>
            </div>
          </div>
          <div className='continue'>
            <div><p>Go Back</p></div>
            <div><button>Continue</button></div>
          </div>
        </div>
    )
}

export default Premium;
