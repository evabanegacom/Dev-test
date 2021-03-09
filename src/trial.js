import React from 'react';
import './trial.css';
import badge from './assets/badge.png';

const Trial = () => {
    return (
        <div className='trial'>
          <div className='first'>
            <img src={badge} alt='' />
          </div>
          <div className='second'>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div><p style={{ color: '#FFFFFF', fontWeight: 'bolder', fontFamily: 'Times New Roman'}}>Trial & Pricing</p></div>
                  <div><i style={{color: 'lightgrey'}} class="fa fa-arrow-right" aria-hidden="true"></i></div>
              </div>
              <div><p style={{ color: 'lightGrey', fontWeight: 'bold', fontFamily: 'TImes New Roman'}}>Payment Method</p></div>
              <div><pre style={{ color: 'yellow'}}>------</pre></div>
              <div><p style={{ color: 'lightgrey', fontSize: '13px'}}>Get started</p></div>
          </div>
          <div className='third'>
              <div><i style={{ color: 'grey', fontSize: '40px', marginLeft: '-10px'}} class="fa fa-quote-left" aria-hidden="true"></i></div>
              <div style={{width: '53%', marginLeft: '20px'}}><p style={{ color: 'lightgrey', fontSize: '11px', lineHeight: '20px'}}>Success is not final; failure is not fatal;
              it is the courage to continue that counts.
              <pre style={{marginTop: '0px', color: '#FFFFFF', fontWeight: 'bold'}}>-Winston Churchill</pre></p></div>
          </div>
        </div>
    )
}

export default Trial;
