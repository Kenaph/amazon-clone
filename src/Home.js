import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004054_.jpg"
        alt="home"
      />

      {/* product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="10001"
          title="The King of Drugs"
          price={200}
          rating={4}
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
        />
        <Product
          id="10002"
          title="The Hunt"
          price={100}
          rating={5}
          image="https://m.media-amazon.com/images/I/41qMDxyi00L.SX316.SY316.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="10003"
          title="The Pursuit"
          price={150}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/A161%2BjrDnaL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL320_SR200,320_.jpg"
        />
        <Product
          id="10004"
          title="Fringe"
          price={120}
          rating={3}
          image="https://www.rockingbookcovers.com/wp-content/uploads/2019/06/Fringe-e1566073334391.jpg"
        />
        <Product
          id="10005"
          title="The Title"
          price={99.9}
          rating={5}
          image="https://bellamediamanagement.com/wp-content/uploads/2017/10/35.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="10006"
          title="His Name was Death"
          price={400}
          rating={4}
          image="https://fionajaydemedia.com/wp-content/uploads/2016/10/HNWSFrontCoverFinal-FJM_Low_Res_500x750.jpg"
        />
      </div>

      {/* product id, title, price, rating, image */}
      {/* product id, title, price, rating, image */}
    </div>
  );
}

export default Home;
