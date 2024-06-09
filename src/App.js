import './App.css';
import Card from './components/card';
import CommunityCard from './components/CommunityCard';
import Footer from './components/footer';
import furniture from './images/furniture.jpg';
import pushchair from './images/pushchair.jpg';
import clothing from './images/clothing.jpg';
import FeedingWeaning from './images/FeedingWeaning.jpg';
import ToysGifts from './images/ToysGifts.jpg';
import bathing from './images/bathing.jpg';

function App() {
  return (
    <div className="page">
      <header className="header">
        <h3 className="signupnow">
          25 off your next order over 250 | Sign up now
        </h3>
        <div className="options">
          <ul className="myaccount">
            <li>
              <a className="myaccount-links" href="">
                Sign in
              </a>
            </li>
            <li className="logo">Mom & Kinder</li>
            <li>
              <div class="box">
                <input
                  type="search"
                  id="search"
                  placeholder="Search..."
                  className="search-mobile"
                />
              </div>
              <li className="hamburger-icono">icono hamburgesa</li>
            </li>
          </ul>
          <ul className="list">
            <li>Category</li>
            <li>Type of products</li>
            <li>Collecion</li>
            <li>Colors</li>
            <li>Clothing size</li>
            <li>Price</li>
          </ul>
        </div>
      </header>
      <body className="body">
        <div className="top-body">
          <div className="top-body_text">
            <h4 className="text">Baby Clothing</h4>
            <p className="text">Perfect Clothing for every occasion.</p>
            <p className="text">
              Discover our pushchairs, baby clothing, nursery furniture and
              more...
            </p>
            <div className="links">
              <a className="button" href="">
                Everyday CLothing
              </a>
              <a className="button" href="">
                Personalizate gifts
              </a>
              <a className="button" href="">
                Ask our professionals
              </a>
            </div>
          </div>
          <div className="top-body_image">
            <img
              className="image"
              src="https://images.selfridges.com/is/image/selfridges/230609_KIDS_HOME_PLP_CS?wid=1920&fmt=jpg&fit=constrain&qlt=95,1"
            />
          </div>
        </div>

        <div className="containerbody">
          <ul className="containerbody-categories">
            <li className="containerbody-categories_furniture">
              <Card
                alt={'Furniture'}
                image={furniture}
                category={'Furniture'}
                discount={'20'}
              />
            </li>
            <li className="containerbody-categories_furniture">
              <Card
                alt={'Pushchair'}
                image={pushchair}
                category={'Pushchair'}
                discount={'15'}
              />
            </li>
            <li className="containerbody-categories_furniture">
              <Card
                alt={'Clothing'}
                image={clothing}
                category={'Clothing'}
                discount={'25'}
              />
            </li>
            <li className="containerbody-categories_furniture">
              <Card
                alt={'Feeding & Weaning'}
                image={FeedingWeaning}
                category={'Feeding & Weaning'}
                discount={'40'}
              />
            </li>
            <li className="containerbody-categories_furniture">
              <Card
                alt={'Selected Toys & Gifts'}
                image={ToysGifts}
                category={'Selected Toys & Gifts'}
                discount={'40'}
              />
            </li>
            <li className="containerbody-categories_furniture">
              <Card
                alt={'Bathing & Changing'}
                image={bathing}
                category={'Bathing & Changing'}
                discount={'50'}
              />
            </li>
          </ul>
        </div>

        <div className="community">
          <p className="community-text">Find out whats is happening in</p>
          <h1 className="community-title">Our community</h1>
          <ul className="community-list">
            <li className="container-community">
              <CommunityCard
                image={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bczkihoysU59qlGprpN2PQ_ufv3Nf5iaCg&s'
                }
                communitytitle={"Let's Talk Car Seat Appointments"}
                description={
                  'Helping you find and fit your perfect car seat, whether it is their first or next stage'
                }
              />
            </li>
            <li className="container-community">
              <CommunityCard
                image={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbBz4nRiJMKdj-3gZ4RXddiIBE8Y9mbjjzntTGpddsA&s'
                }
                communitytitle={'Loved for live'}
                description={
                  'Give pre-loved baby products a new lease of life with our range of services'
                }
              />
            </li>
            <li className="container-community">
              <CommunityCard
                image={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91uYi9YWe1gcuiRcjPvD9-apySvk_6uJAhw&s'
                }
                communitytitle={'Trade-In'}
                description={
                  'Receive a voucher when you return your used Mamas & Papas pushchair for it to be lovingly restored and re-sold'
                }
              />
            </li>
          </ul>
        </div>
      </body>

      <footer className="footer">
        <div className="singup">
          <h1 className="signup-title">Sign up & Save</h1>
          <p className="signup-p">
            Sign up to our mailing list & hear about our latest offers & new
            products, plus enjoy £25 off your next order over £250
          </p>
          <a className="signup-bottom" href="">
            Sign up here
          </a>
        </div>
        <div className="footer-links">
          <Footer
            title={'Shopping to Suit You'}
            link={'Buying for a baby'}
            link1={'Car Seat Appointments'}
            link2={'Gift Cards'}
            link3={'Pushchair Valet & Service'}
            link4={'Klarna'}
            link5={'Best Price Guarantee'}
            link6={'Stores & Stockists'}
            link7={'Refer a Friend'}
            link8={'Seasonal Baby Events'}
          />

          <Footer
            title={'Customer Care'}
            link={'Track Your Order'}
            link1={'Check Gift Card Balance'}
            link2={'Make A Payment'}
            link3={'Delivery, Collection & Returns Information'}
            link4={'Help'}
            link5={'Contact Us'}
            link6={'Terms & Conditions'}
            link7={'Privacy Policy'}
            link8={'Cookie Policy'}
          />

          <Footer
            title={'About Mamas & Papas'}
            link={'About Us'}
            link1={'Careers'}
            link2={'Our Blog'}
            link3={'Our Brands'}
            link4={'Our Awards'}
            link5={'Mamas & Papas - For the Future'}
            link6={'Influencers & Affiliates'}
            link7={'Media & Press'}
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
