import { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import PopUp from "./component/PopUp";
import Footer from "./component/footer/Footer";
import  Pokemon  from "./component/Pokemon";




function App() {
  // etat

  const [titres, setTitres] = useState([

    {id : 1, nom: "accueil"},
    {id : 2, nom:  "lorem ipsum-2"},
    {id : 3, nom:  "lorem ipsum-3"},
    {id : 4, nom: "lorem ipsum-4"},

  ])

  // const Voiture = ()  => {
  //   return <li className="text-3xl cursor-pointer rounded-md px-5 mx-3 bg-violet-500 hover:bg-indigo-600 active:bg-indigo-800">Ferrari</li>
  //   };
  // comportement
    const Supptitre = (id) => {
      console.log(id);
      // copie du l'état
      const TitreCopie = [...titres];
      //manipulation de l'etat
      const TitreCopieUpdate = TitreCopie.filter((titre) => titre.id !== id);
      //modification de l'état
      setTitres(TitreCopieUpdate);
    }
  // affichage
  return (
    <div className="container mx-auto">
      <div className="App flex flex-wrap flex-col content-center">
        <h1 className="text-5xl font-bold underline text-center decoration-amber-500 text-lime-400 ">
          Hello world!
        </h1>
        <ul className="flex sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center mx-2 my-10 justify-center ">
          {titres.map((titre) => (
            <li className="text-2xl cursor-pointer rounded-md xl:py-3 px-5 mx-5 bg-violet-500 hover:bg-indigo-600 active:bg-indigo-800" key={titre.id}>
              {titre.nom} <button className="ml-5" onClick={() =>Supptitre(titre.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      {/* <hr className="bg-dark-800"></hr>
        <Main />
      <hr className="bg-dark-800"></hr>
      <PersoPreferer  />
      <hr className="bg-dark-800"></hr> */}
      <Pokemon/>
      <PopUp/>

      <Footer/>

    </div>
   )

}
export default App;

