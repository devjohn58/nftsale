import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Routes from "./routes/Routes";
import AuthContextProvider from "./contexts/AuthContext"
import BuyModal from './components/modals/BuyModal';
import OfferModal from './components/modals/OfferModal';
import NotifyModal from './components/modals/NotifyModal';

function App() {
	return (
        <Router>
            <Switch>
                <AuthContextProvider>
                    <Routes />
                    <BuyModal />
                    <OfferModal />
                    <NotifyModal />
                </AuthContextProvider>
            </Switch>
        </Router>
    )
}

export default App;
