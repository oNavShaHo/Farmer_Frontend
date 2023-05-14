import React from 'react'
import Navbar from './navbar'
import ImageForm from './ImageForm'
import Pie from './images/pie.png'
import Add from './add'

function home() {
  return (
    <div id='home'>
        <Navbar/>
        <ImageForm/>
        <div className='flex justify-around mt-10 '>
          
          
           
            <div className='cure'>
            <h3>मक्का के सामान्य धब्बे के इलाज</h3>
  <ul>
    <li>संक्रमित पत्तियों को हटाएं</li>
    <li>फंगीसाइड लगाएं</li>
    <li>नियमित रूप से पानी दें</li>
    <li>अच्छा हवा परिसंचरण प्रदान करें</li>
    <li>प्रतिरोधी विविधताओं का उत्पादन करें</li>
  </ul>
            </div>
            <div className='cure1'>
            <h3>मक्का के सामान्य धब्बे से बचाव</h3>
  <ul>
    <li>फसलों का रोटेशन करें</li>
    <li>प्रतिरोधी विविधताओं का बोवा लगाएं</li>
    <li>संक्रमित पौधों को हटाएं</li>
    <li>नियमित रूप से पानी दें</li>
    <li>फंगीसाइड लगाएं</li>
  </ul>
            </div>






            <div className='aad absolute bottom-5  right-0'>
        <Add/>
            </div>
        </div>
        </div>
  )
}

export default home