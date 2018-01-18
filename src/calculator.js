import React, {Component} from "react";

class Calculator extends Component {

   constructor(props) {
      super(props);
      this.state = {
         val1: 0,
         val2: 0,
         calcTotal: 0
      }

      this.onChange = this.onChange.bind(this);
   };

   onChange(e) {
      if(!e.target.value) return;
      this.setState({[e.target.name]: e.target.value});
      this.setState((prev)=>({calcTotal: parseInt(prev.val1)+parseInt(prev.val2)}));

   }

   render() {
      return (
         <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
               <input type="text" className="text-input" name="val1" onChange={this.onChange}/>
               <span>+</span>
               <input type="text" className="text-input" name="val2" onChange={this.onChange}/>
               <span>=</span>
               <div className="">
                  <h3>{this.state.calcTotal}</h3>
               </div>
            </div>
         </div>
      )
   }
}


export default Calculator;
