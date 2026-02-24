import online1 from './Image/online1.jpg'
import moneyback from './Image/moneyback.png'
import freeshipping from './Image/freeshipping.jpg'
import liquor2 from './Image/liquor2.jpg'
import liquor4 from './Image/liquor4.webp'
import liquor5 from './Image/liquor5.webp'
import liquor6 from './Image/liquor6.webp'  
import liquor7 from './Image/liquor7.jpg'
function Design(){ 
                   return(
                          <div>
                            <nav>
                               <p className="p01"><h1>🔴🟠🟣🔵</h1> <p> 🔍 search or enter website name 🔄</p></p>
                               <div className="div1"><p className="p02">📞 +91 9564783929 </p> <p className="p03">  ✉ youremail@gmail.com</p><a href="#">SIGN UP</a><a href="#">LOGIN</a></div>                              
                               <div className="div2">
                               <a className="a01" href="#"><b>LIQUOR STORE</b></a><a className="a02" href="#">HOME</a><a href="#">ABOUT</a><a href="#">PRODUCTS</a><a href="#">BLOG</a><a href="#">CONTACT</a>
                               </div>     
                               <div className="div3">
                               Good <b>Drink</b> For Good <b>Moments</b> 
                               <button className="btn1">SHOP NOW</button><button className="btn2">READ MORE</button>
                               </div> 

                               <div className="div4">
                               <div className="div4-1"><img src={online1} /><div>
                               <h3>ONLINE SUPPORT 24/7</h3><p>offers many services such as online ordering, in-store pickup,prepaid services.</p></div></div>
                               <div className="div4-2"><img src={moneyback}/><div>
                               <h3>MONEY BACK GUARANTEE</h3><p> Gift wrapping and customization services for special occasions are frequently available.</p></div></div>
                               <div className="div4-3"><img src={freeshipping}/><div>
                               <h3>FREE SHIPPING & RETURN</h3><p> This is a core offering, often with both "well" (budget-friendly) and "top-shelf" (premium) options.</p></div></div>
                               </div>

                               <div className="div5">
                               <img src={liquor2}/><h2>Desire Meets A New Taste</h2>
                                                   <p className="p04"> Brands like Smirnoff, Tito's, Grey Goose. Sweetened spirits with various flavors like coffee, cream, fruit, or herbs.
                                                                       Distilled from fruit, often grapes, such as Hennessy or RemyMartin.Offerings typically include domestic lagers 
                                                                       (e.g., Budweiser), imported brands, craft beers, ales, stouts, and non-alcoholic options.
                                                   <div className="div6">  <img src={liquor4}/><img src={liquor5}/><img src={liquor6}/><img src={liquor7}/>  </div>
                                                   </p>
                                </div>
                            </nav>
                          </div> 
                         )
                }
export default Design