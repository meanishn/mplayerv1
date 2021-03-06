import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Weather from '../WeatherPage';
import PostsIndex from '../PostPage/PostsIndex';
import PostDetail from '../PostPage/PostDetail';
import HomePage from '../HomePage';
import Player from '../Player';
import UserPlaylist from '../UserPlaylist';
import NavBar from '../../components/NavBar';
import Artists from '../Artists';
export default function App() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <NavBar />
              <Player />
              <div className="main-area">
                <Switch>
                  <Route path="/weather" component={Weather} />
                  <Route path="/posts/:id" component={PostDetail} />
                  <Route path="/posts" component={PostsIndex} />
                  <Route path="/artists/:id" component={Artists} />
                  <Route path="/playlists" component={UserPlaylist} />
                  <Route path="/" component={HomePage} />
                </Switch>
              </div>
          </div>
        </BrowserRouter>
      </div>
    );
}
