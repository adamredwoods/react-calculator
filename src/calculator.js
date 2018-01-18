import React, {Component} from "react";

class Calculator extends Component {

   constructor(props) {
      super(props);
      this.state = {
         val1: 0,
         val2: 0,
         val3: 0,
         val4: 0,
         val5: 0,
         val6: 0,
         calcTotalAdd: 0,
         calcTotalSub: 0,
         calcTotalMult: 0
      }

      this.onChangeAdd = this.onChangeAdd.bind(this);
      //this.onChangeAdd2 = this.onChangeAdd2.bind(this);
      this.onChangeSub = this.onChangeSub.bind(this);
      this.onChangeMult = this.onChangeMult.bind(this);
   };

   onChangeAdd(e) {
      if(!e.target.value || !parseInt(e.target.value)) return;
      this.setState({[e.target.name]: e.target.value});
      this.setState((prev)=>({calcTotalAdd: parseInt(prev.val1)+parseInt(prev.val2)}));
      //this.setState({calcTotalAdd: parseInt(this.state.val1)+parseInt(this.state.val2)})
   }

   // onChangeAdd2(e) {
   //    if(!e.target.value) return;
   //    this.setState({val2: e.target.value});
   //    //this.setState((prev)=>({calcTotalAdd: parseInt(prev.val1)+parseInt(prev.val2)}));
   //    this.setState({calcTotalAdd: parseInt(this.state.val1)+parseInt(e.target.value)})
   // }

   onChangeSub(e) {
      if(!e.target.value || !parseInt(e.target.value)) return;
      this.setState({[e.target.name]: e.target.value});
      this.setState((prev)=>({calcTotalSub: parseInt(prev.val3)-parseInt(prev.val4)}));

   }

   onChangeMult(e) {
      if(!e.target.value || !parseInt(e.target.value)) return;
      this.setState({[e.target.name]: e.target.value});
      this.setState((prev)=>({calcTotalMult: parseInt(prev.val5)*parseInt(prev.val6)}));

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
            <div className="mult">
               <input type="text" className="text-input" name="val5" onChange={this.onChangeMult}/>
               <span>*</span>
               <input type="text" className="text-input" name="val6" onChange={this.onChangeMult}/>
               <span>=</span>
               <div className="">
                  <h3>{this.state.calcTotalMult}</h3>
               </div>
            </div>
         </div>
      )
   }
}


export default Calculator;
