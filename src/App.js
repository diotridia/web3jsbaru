import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js';
import Calkulator from './kalkulator.js';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name : 'Home',
      color : 'grey',
      img : 'Home.jpg',
      img2 : 'home.png',
      nilai1 : null,
      nilai2: null,
      operator: null,
      hasil: null,
    };
    toast.notify('Hello world!')
  }
  clicked(menu) {
    //utk memperbarui state sesuai dengan menu yang digunakan
    this.setState({
      name : menu.name,
      color: menu.color,
      img : menu.img,
      img2 : menu.img2,
    });
  }

  info(name){
    if(name === "Calculator"){
      return < Calkulator />;
    }
      else if (name == "Profile"){
       return <Profile nama = "hahahah " / >;
      }
    
    else{
      return(
      <div>
      This is <span className={"selected "+this.state.color}>{this.state.name}</span>
            <br></br>
          <br></br>
          <img src={this.state.img} width="240"></img>
          <br></br>
          <br></br>
          <img src={this.state.img2} width="240"></img>
    </div>);
    }
  }
  /*menusaya(){
    if (this.state.active.toLowerCase()==='Red'){
			gambar = "Red";
		}
		else if (this.state.active.toLowerCase()==='Yellow'){
			gambar = "Yellow";
		}
		else if (this.state.active.toLowerCase()==='Green'){
			gambar = "Green";
		}
		else if (this.state.active.toLowerCase()==='Blue'){
			gambar = "Blue";
		} 
    return <img src={this.state.color+".jpg"} width="240"></img>
}*/

  render(){
    return(
      <div id="app">
          <nav className="nav">{this.props.items.map((
            menu, index)=> {
              var style = 'menu';

              if(this.state.color===menu.color){
                style = `${style} is-active`;
              } //muncul warna berbeda ketika diklik
            
          return <div 
                  className={style+" "+menu.color}
                  onClick={this.clicked.bind(this,menu)}
                  key={index}>
                  {menu.name}
                  </div>;
           }) }
          </nav>

          <div className="info">                  
          {this.info(this.state.name)}
          </div>
  </div>
    ); 
}}
export default App;    