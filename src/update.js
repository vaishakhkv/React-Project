import React,{Component} from 'react'
class Up1 extends Component{
    constructor(props){
        super(props);
        this.state={favouritecolor:"red"};
    }
    static getDerivedStateFromProps(props,state){
        return{favouritecolor:props.favcol};
    }
    changeColor=()=>{
        this.setState({favouritecolor:"blue"});
    }
    render(){
        return(
            <div>
                <h1>my favourite color is {this.state.favouritecolor}</h1>
                <button type="button" onClick={this.changeColor}>change color</button>
            </div>

        )
    }
}
export default Up1;