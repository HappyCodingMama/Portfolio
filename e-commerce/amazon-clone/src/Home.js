import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
          alt="home image"
        />
        <div className="home__row">
          <Product
            id="16225014011"
            title="
            Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="1604760667"
            title="
            YOSUDA Indoor Cycling Bike Stationary - Exercise Bike for Home Gym with Comfortable Seat Cushion, Silent Belt Drive, iPad Holder"
            price={359.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71RqLrqSU6L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="2604760667"
            title="
            ProsourceFit Multi-Grip Chin-Up/Pull-Up Bar, Heavy Duty Doorway Trainer for Home Gym (ps-1109-cu), Black"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71lEJ%2BfgvVL._AC_SL1500_.jpg"
            rating={4}
          />

          <Product
            id="1302760867"
            title="ATIVAFIT Adjustable Dumbbell for Workout Strength Training Fitness Weight Gym (Single)"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51imCpzKbjL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="1604160667"
            title="
            Cot-Oath Ab Roller for Training Abs - Ab Wheel Workout Equipment - Ab Wheel Roller for Home Exercise - Ab Machine for Ab Exercise"
            price={13.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61IqaDXwBWL._AC_SL1311_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="16047602367"
            title="
            BalanceFrom GoYoga All-Purpose 1/4-Inch High Density Anti-Tear Exercise Yoga Mat with Carrying Strap"
            price={16.45}
            image="https://images-na.ssl-images-amazon.com/images/I/812bmNPkGXL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
