var container = document.getElementById("app");
// var title = document.createElement("h1");
// title.innerHTML = "Title insert by JavaScripto :O \\O/";
// container.appendChild(title);

function Counter(props){
    // let number = 0;
    const [number, setNumber] = React.useState(0);

    function add(){
        setNumber(number + 1);
        //number++;
        console.log("I add and stayed = " + number);
    }

    function subtract(){
        setNumber(number - 1);
        // number--;
        console.log("I subtract and stayed = " + number);
    }

    return (
        <React.Fragment>
            <div class="card">
                <div class="head">
                    <h1>{props.title}</h1>
                    <img src={props.url}/>
                </div>
                <h2>{number}</h2>
                <div class="div-btn">
                    <button class="btn add" onClick={add}>+</button>
                    <button class="btn remove" onClick={subtract}>-</button>
                </div>
            </div>
        </React.Fragment>
    );
}

function App(){
    return (
        <React.Fragment>
            <Counter title="Kill Em All" url="img/kill.jpg" />
            <Counter title="Ride The Lightning" url="img/ride.jpg"/>
            <Counter title="Master of Puppets" url="img/master.jpg"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);
// ReactDOM.render(App(), container);

// PascalCase -> React Components follow this pattern.
// camelCase -> JavaScript functions 
// Components can only return ONE element per Component
// exit -> nest in a ReactFragment
// We can create propriets for our components (props)