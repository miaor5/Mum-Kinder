import './App.css';
import Card from './components/card';
import CommunityCard from './components/CommunityCard';
import maria from './images/maria.jpg';
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
                <input type="search" id="search" placeholder="Search..." />
              </div>
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

        <div>
          <p>Find out whats is happening in</p>
          <h1>Our community</h1>
          <ul>
            <li>
              <CommunityCard
                image={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bczkihoysU59qlGprpN2PQ_ufv3Nf5iaCg&s'
                }
                communitytitle={"Let's Talk Car Seat Appointments"}
                description={
                  'Helping you find and fit your perfect car seat, whether it is their first or next stage. Book your free appointment today'
                }
              />
            </li>
          </ul>
        </div>
      </body>
    </div>
  );
}

export default App;
