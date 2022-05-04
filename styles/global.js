import { createGlobalStyle } from "styled-components";
// import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
    :root {
        // Greens
        --forest: #1c4726;
        --grass: #57b15b;
        --sage: #dae8db;
        --white: #ffffff;

        //Font color
        --font-color: #434343;
        --light-font-color: #a0a0a0;
        --border-color: #dcdcdc;
        --input-color: #f1f1f1;

        //Fonts
        --primary-font: "Raleway";
        --secondary-font: "Overpass"

        //Weights
        --bold: 700;
        --semi-bold: 600;

        //Details
        --border-radius: 10px;
    } 

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Overpass:wght@400;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: var(--primary-font), Helvetica, sans-serif;
}

a {
  color: inherit;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #434343;
}

h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #434343;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #434343;
}

h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #434343;
}

.body-text {
  font-size: 1rem;
  font-weight: 400;
  color: #434343;
  line-height: 1.5rem;
}

.body-xl {
  font-size: 1.125rem;
  font-weight: 400;
  color: #434343;
}

.active {
  font-weight: 700;
}

.inactive {
  font-weight: 500;

  &:hover {
    font-weight: 700;
  }
}

.cta__grass {
  background-color: #57b15b;
  padding: 13px 45px;
  color: #ffffff;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
}

.icon {
  color: #a0a0a0;
  font-size: 1.875rem;

  &:hover {
    color: #1c4726;
  }
}

.hotel__wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1360px;
  margin: 100px auto;
}

.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  cursor: pointer;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.03);
}

`;

export default GlobalStyle;
