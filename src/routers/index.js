import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from '../component/Register';
import Check from '../component/Check';
import VerifyHistory from '../component/VerifyHistory';
import RecognizeHistory from '../component/RecognizeHistory';
import LayoutHistory from '../component/LayoutHistory';
import Voice from '../component/Voice';
import CheckVoice from '../component/CheckVoice';
import Video from '../component/Video';
const Routers = props => {
    return (
        <div>
            <Router>
                <Switch>
                    {/* <Route path="/" exact>
                        <Register />
                    </Route>
                    <Route path="/check" exact>
                        <Check />
                    </Route> */}

                    {/* <Route path="/verifyHistory" exact>
                        <VerifyHistory />
                    </Route>
                    <Route path="/recognizeHistory" exact>
                        <RecognizeHistory />
                    </Route> */}
                    {/* <Route path="/" exact>
                        <LayoutHistory />
                    </Route> */}


                    {/* <Route path="/checkvoice" exact>
                        <CheckVoice />
                    </Route> */}
                    {/* <Route path="/" exact>
                        <Voice />
                    </Route> */}
                    <Route path="/" exact>
                        <Video />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routers
