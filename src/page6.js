import React from "react";
import { Container, Row } from "react-bootstrap";
import Ingredient from "./Ingredient";
import './Ingredient.css'
const IngredientPage = () => {
  const ingredients = [
    {id:1,
      title: "Ginger powder",
      desc: "Ginger is a natural component that contains fantastic antioxidants that eliminate free radicals that are harmful to the user's health. It has the ability to reduce stress and damage to the user's DNA. When achieving this result, customers can include ginger in their routine to reduce heart disease, high blood pressure, lung illness, and other conditions. It is also useful for people who want to make the ageing process more enjoyable for themselves",
    },
    {id:2,
      title: "Black pepper",
      desc: "The black pepper in this medication differs slightly from the other ingredients. This ingredient is used to help with bioavailability rather than directly affecting the joints. With stomach acid, the body breaks down many components, losing many minerals before they can be used. By including a black pepper extract, these components can survive for longer, ensuring that they can provide all of the nutritional benefits intended",
    },
    {id:3,
      title: "Pycnogenol",
      desc: "The bark of the Maritime Pine is used to make this ingredient. It's one of the world's most potent active ingredients for stimulating a healthy inflammatory response, thanks to its high antioxidant content. This ingredient, according to the inventor, can reduce inflammation and joint pain while also reducing stiffness and swelling. It also maintains improved joint function",
    },
    {id:4,
      title:"Mobilee",
      desc: "Mobilee is another important ingredient in the creation of Joint Genesis. It works by incorporating hyaluronan to replace lost synovial fluid. It is ten times more effective than the standard version used in previous clinical trials. It has the ability to quickly lubricate and cushion the joint, hydrate cartilage tissues, and promote harmless inflammation",
    },
    {id:5,
      title: "Bioperine",
      desc: "The patented black pepper extract is called bioperine. In Joint Genesis, its main function is to increase the bioavailability of other ingredients, making them more potent. The antioxidant and anti-inflammatory properties of bioperine reduce joint discomfort. It promotes gut health, curbs hunger, and has some medicinal uses for a number of diseases and infections. According to studies, Bioperine can help control blood sugar levels."
    }
  ];

  return (
    <Container fluid  className="ingredientpage">
    <div className="ingredientpagetext">
    <p>
        The  Joint Genesis supplement is made of all the natural and organic
        ingredients. Have a look at the ingredients of the Joint Genesis in the
        below section:
        <br></br>
        The ingredients used in the formation of
        <strong> Joint Genesis</strong>
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
