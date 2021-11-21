import { Switch, Route } from "react-router-dom";
import Shop from "../Shop";
import Orders from "../Orders";
import Checkout from "../Checkout";

const Content = () => {
    return (
        <div className="mb-auto">
            <Switch>
                <Route exact path="/" component={Shop}/>
                <Route exact path="/Orders" component={Orders}/>
                <Route exact path="/Checkout" component={Checkout}/>
            </Switch>
        </div>
    );
}

export default Content;