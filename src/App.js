// import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className={'app-wrapper'}>
        <header className={'header'}>
            <img src='https://assets.stickpng.com/thumbs/61362734f5966900044cbf74.png'/>
        </header>
    <nav className={'nav'}>
        <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Messages</a>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
        <div className={'content'}>
            <div>
                <img src='https://i.redd.it/a0ez44uhhx911.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
