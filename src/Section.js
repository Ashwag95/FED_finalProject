import React from "react";
import Booking from "./Booking";

const Section = () => {
  return (
    <>
      <div className="sec1" id="sec1">
        <section>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit,
            sed do eiusmod tempor<br></br> incididunt ut labore et dolore
            <br></br> magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </section>
        <img src="/restauranfood.jpg"></img>
      </div>
      <div className="weekSpecial" id="weekSpecial">
        <section>
          <p>This week specials!</p>
          <button>Online Menu</button>
        </section>
      </div>
      <div className="cards-container">
        <div className="cards">
          <div>
            <img src="greek salad.jpg"></img>
            <pre>
              Greek Salad <span>$12.00</span>{" "}
            </pre>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a href="#">
              Order now &emsp;<i class="fa-solid fa-truck"></i>
            </a>
          </div>
          <div>
            <img src="bruchetta.png"></img>
            <pre>
              Bruchetta <span>$22.00</span>
            </pre>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <a href="#">
              Order now &emsp;<i class="fa-solid fa-truck"></i>
            </a>
          </div>
          <div>
            <img src="lemon dessert.jpg"></img>
            <pre>
              Lemon Dessert<span>$10.00</span>
            </pre>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <a href="#">
              Order now &emsp;<i class="fa-solid fa-truck"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section;
