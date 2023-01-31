import React from "react";
import './App.css';
import s from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, Routes, Navigate} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    catchUnhandledErrors = (promiseRejectionEvent) => {
        alert("Some error occurred");
        console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={s.app}>
                <div className={s.headerContainer}>
                    <HeaderContainer/>
                </div>
                <div className={s.appContainer}>
                    <div className={s.bodyContainer}>
                        {/*<Navbar/>*/}
                        {/*<Sidebar state={this.props.state.sidebar}/>*/}
                        <div className={'app-wrapper-content'}>
                                <React.Suspense fallback={<div><Preloader/></div>}>
                                    <Routes>
                                        {/*<Route exact path="/" element={<Navigate to={'/profile'}/>}/>*/}
                                        {/*<Route path='/profile' element={<ProfileContainer/>}/>*/}
                                        {/*<Route path='/profile/:userId' element={<ProfileContainer/>}/>*/}
                                        {/*<Route path='/dialogs' element={<DialogsContainer/>}/>*/}
                                        {/*<Route path='/news' element={<News/>}/>*/}
                                        {/*<Route path='/music' element={<Music/>}/>*/}
                                        {/*<Route path='/settings' element={<Settings/>}/>*/}
                                        {/*<Route path='/users' element={<UsersContainer/>}/>*/}
                                        <Route path='/login' element={<Login/>}/>
                                        <Route path='*' element={<div className={s.notFound}>404 NOT FOUND<p>.</p></div>}/>
                                    </Routes>
                                </React.Suspense>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

const FullApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer state={store.getState()}/>
            </Provider>
        </HashRouter>
    )
}

export default FullApp;
