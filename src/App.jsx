import './App.css';
import elephant from "./images/elephant.jpeg";


function App(props) {
  // code here
  return (
    <>
      <div>
        <h1>Kalvium gallary</h1>
        <div className='image-container'>
          {props.data.map((el) => {
            return (
              <div key={el.id}>
                <img src={el.img} alt=''></img>
              </div>
            )
          })}
        </div>
      </div>
      <div>Using function components</div>
    </>
  )
}

export default App;
