import { Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import ProductPage from "../pages/ProductPage";
import InoPage from "../pages/InoPage";
import MePage from "../pages/MePage";

const Routes = () => {
	return (
        <>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/ino" component={InoPage}/>
            <Route exact path="/markets" component={HomePage}/>
            <Route exact path="/account/me/collection" component={MePage}/>
            <Route exact path="/markets/0x2a62623bbb82ac60795d2015d70cc87861258def" component={HomePage}/>
            <Route exact path="/markets/0x2a62623bbb82ac60795d2015d70cc87861258def/:id" children={<ProductPage />}/>
        </>
	);
};

export default Routes;
