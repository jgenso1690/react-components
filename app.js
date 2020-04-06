class GroceryList extends React.Component {
   constructor(props){
       super(props);

       this.state = {
           bold: false
       };
   }

   onMouseOver() {
       this.setState({
           bold: !this.state.bold
       });
   }

   render(){
       let style = {
           fontWeight: this.state.bold ? 'bolder' : 'normal'
           };
       
       return (
        
            <li style={style} onMouseOver={this.onMouseOver.bind(this)}> {this.props.item} </li>
        );
   }
}


var List = (props) =>(
    <ul>
        {props.items.map(item =>
            < GroceryList key = {item} item = {item} /> )}
    </ul>
);


ReactDOM.render(<List items = {['Rice', 'Bread']} />, document.getElementById("app"));