import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav,Tab,TabContainer} from 'react-bootstrap';
const Portfolio=()=>{
const [open, setOpen] = useState(false);
    return(
<section className="portfolio" id="portfolio">
<div className="portfolio-title text-center">
<h2>My Portfolio</h2>
<h4>This is what demonstrates my knowledge</h4> 
</div>
<div className='portfolio-container container'>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='e-commerce.jpeg'/>
</div>
<a className='pt-3'>Modern E-commerce </a>
<div className='portfolio-links'>
<a href='https://github.com/turqay667/accessories.az' className='btn btn-success' target='_blank'>GitHub</a>
<a href="https://accessories-az.onrender.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
</div>

</article>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='forecast.jpeg'/>
</div>
<a className='pt-3'>Weather Forecast</a>
<div className='portfolio-links'>
<a href='https://github.com/' className='btn btn-success'  target='_blank'>GitHub</a>
<a href="https://lastforecast.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='advice.jpeg'/>
</div>
<a className='pt-3'>  Advice Generator </a>
<div className='portfolio-links'>

<a href='https://github.com/turqay667/advice_generator' target='_blank' className='btn btn-success'>GitHub</a>
<a href="https://turqay667.github.io/advice_generator/" className='btn btn-primary' target='_blank'>Live Demo</a>

</div>
</article>
</div>



</section>
    )
}
export default Portfolio;