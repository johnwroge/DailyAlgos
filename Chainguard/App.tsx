import React from 'react';

/**
 * Designer requirement - please make this look like "design.png"
 target design, style that component to arrive at a similar
  out to that component
 */
export default function App() {
  return (
    <div className='app'>
      <div className='topbar'>
        <span>🥐 The Bakery</span>
        <button>Sign up</button>
      </div>
      <div className='content'>
      
        <div className='leftnav'>
          <a href='#'>🏠Home</a>
          <a href='#'>🥮Products</a>
          <a href='#'>🗺️Locations</a>
          <a href='#'>📞Contact us</a>
        </div>
        <div className='copy'>
          <h1>Welc🥯me</h1>
          <h2>This is our home page.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales
            orci ut ipsum ultricies suscipit a in ex. Phasellus commodo id velit
            ut malesuada. Aliquam euismod, tortor ut mollis efficitur, nisl
            ligula tincidunt urna, vel malesuada dui felis a arcu. Proin vel est
            orci. Aliquam erat volutpat. Suspendisse sit amet vulputate ante.
            Phasellus auctor vehicula risus, quis posuere nibh dictum id. Nullam
            hendrerit facilisis placerat. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Mauris a quam
            urna. Aliquam vel ligula nunc. In in arcu venenatis, convallis
            libero nec, interdum lacus. Ut vulputate turpis diam. Aliquam sed
            tempor purus.
          </p>
        </div>
      </div>
      <div className='footer'>
        <span>© 2023 The Bakery, Inc.</span>
      </div>
    </div>
  );
}
