import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from 'features/signin';
import { Layout } from 'common/components';
import Gallery from 'features/gallery/pages/Gallery';
import Profile from 'features/profile';
import PhotosList from 'features/gallery/components/PhotosList';
import path from 'path';

const isAuth = true;

export default function AppRouter() {
    return (
        <BrowserRouter>
            {isAuth ? (
                <Layout>
                    <Switch>
                        <Route path="/profile" component={Profile} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/photoslist/:id" component={PhotosList} />
                        <Route path="/photoslist" component={PhotosList} />
                        <Redirect to="/gallery" />
                    </Switch>
                </Layout>
            ) : (
                <Switch>
                    <Route path="/" component={SignIn} />
                </Switch>
            )}
        </BrowserRouter>
    );
}
