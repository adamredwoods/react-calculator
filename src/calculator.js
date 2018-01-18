import React, {Component} from "react";

class Calculator extends Component {

   constructor(props) {
      super(props);
      this.state = {
         val1: 0,
         val2: 0,
         val3: 0,
         val4: 0,
         calcTotalAdd: 0,
         calcTotalSub: 0
      }

      this.onChangeAdd = this.onChangeAdd.bind(this);
      this.onChangeSub = this.onChangeSub.bind(this);
   };

   onChangeAdd(e) {
      if(!e.target.value) return;
      this.setState({[e.target.name]: e.target.value});
      this.setState((prev)=>({calcTotalAdd: parseInt(prev.val1)+parseInt(prev.val2)}));

   }

   onChangeSub(e) {
      if(!e.target.value) return;
      this.setState({[e.target.name]: e.target.value});
      this.setState((prev)=>({calcTotalSub: parseInt(prev.val3)-parseInt(prev.val4)}));

   }

   render() {
      return (
         <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
               <input type="text" className="text-input" name="val1" onChange={this.onChangeAdd}/>
               <span>+</span>
               <input type="text" className="text-input" name="val2" onChange={this.onChangeAdd}/>
               <span>=</span>
               <div className="">
                  <h3>{this.state.calcTotalAdd}</h3>
               </div>
            </div>
            <div className="minus">
               <input type="text" className="text-input" name="val3" onChange={this.onChangeSub}/>
               <span>-</span>
               <input type="text" className="text-input" name="val4" onChange={this.onChangeSub}/>
               <span>=</span>
               <div className="">
                  <h3>{this.state.calcTotalSub}</h3>
               </div>
            </div>
         </div>
      )
   }
}


export default Calculator;
