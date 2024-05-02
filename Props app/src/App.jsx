import Student from "./components/Students"
import Usergreeting from "./components/Usergreeting"
import List from "./components/fruitList"
import VegetableList from "./components/vegetableList"
import Button from "./components/Button"
import Picture from "./components/Picture"
import Name from "./components/Name"
import Counter from "./components/Counter"
import OnChange from "./components/OnChange"

function App() {

  const vegetable = [
    {
      name: "pumpkin",
      id: 1,
      calories: 23
    },
    {
      name: "lettuce",
      id: 2,
      calories: 45
    },
    {
      name: "green pea",
      id: 3,
      calories: 57,
    },
    {
      name: "cucumber",
      id: 4,
      calories: 68
    },
    {
      name: "brocolli",
      id: 5,
      calories: 23
    },
  ]


  const roots = [
    {
      name: "cassava",
      id: 6,
      calories: 230
    },
    {
      name: "yam",
      id: 7,
      calories: 345
    },
    {
      name: "cocoyam",
      id: 8,
      calories: 570,
    },
    {
      name: "sweet yam",
      id: 9,
      calories: 680
    },
    {
      name: "Irish potato",
      id: 10,
      calories: 123
    },
  ]

  return (
    <section>
      <Student name="Emediong" age={26} isStudent={true} />
      <Student name="Moon" age={25} isStudent={false} />
      <Student/>
      <Usergreeting isLoggedIn= {false} username='Emediong'/>
      <List/>
      {vegetable.length > 0 ? <VegetableList item={vegetable} category="vegetable"/> : null}
      {vegetable.length > 0 && <VegetableList item={roots} category="Roots and Tubers"/>}
      <Button/><br></br>
      <Picture/><br></br><hr></hr>
      <Name/>
      <Counter/>
      <hr></hr>
      <OnChange />


    </section>

    

  )
}

export default App
