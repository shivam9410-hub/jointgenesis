import React from "react";
import { Container, Row } from "react-bootstrap";
import Ingredient from "./Ingredient";
import './Ingredient.css'
const IngredientPage = () => {
  const ingredients = [
    {id:1,
      title: "Epimedium",
      desc: "It may help to blood flowin the body and improve the funcitoning of the body",
    },
    {id:2,
      title: "Hawthron berry",
      desc: "This natural ingredient may help to increase blood circulation in the body and brain",
    },
    {id:3,
      title: "Tribulus",
      desc: "Extracts of Tribulus may help to improve energy levels in the body",
    },
    {id:4,
      title: "Magnesium",
      desc: "This essential nutrient may help to improve mental foucs and increase concentration levels at work",
    },
    {id:5,
      title: "Magnesium",
      desc: "This essential nutrient may help to improve mental focus and increasde concentration levels at work.",
    },
    {id:6,
      title: "Tongkat Ali",
      desc: "Extracts of Tongkat Ali may help to improive overall health and enhance stamina in the body.",
    },
    {id:7,
      title: "Chrysin",
      desc: "This organic element may help to reduce stress and depression.",
    },
    {id:8,
      title: "Saw Palmetto",
      desc: "Extracts of Saw Palmetto may help to improve stamina in the body to perform various tasks in a day",
    },
    {id:9,
      title: "Winged Treebine",
      desc: "This natural ingredient may help to boost stamina in the body.",
    },
  ];

  return (
    <Container fluid  className="ingredientpage">
    <div className="ingredientpagetext">
    <p>
        The Endo Peak supplement is made of all the natural and organic
        ingredients. Have a look at the ingredients of the Endo Peak in the
        below section:
        <br></br>
        The ingredients used in the formation of
        <strong> EndoPeak</strong>
        &nbsp; are mentioned below:
      </p>

      {ingredients.map((obj) => {
        return <Ingredient id={obj.id} title={obj.title} desc={obj.desc} />;
      })}
    </div>
    </Container>
  );
};

export default IngredientPage;
