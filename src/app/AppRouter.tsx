import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from 'features/signin';
import Login from 'features/signin/Login';
import { Layout } from 'common/components';
import Gallery from 'features/gallery/pages/Gallery';
import PhotosList from 'features/gallery/components/PhotosList';
import path from 'path';

const isAuth = true;

export default function AppRouter() {
    return (
        <BrowserRouter>
            {isAuth ? (
                <Layout>
                    <Switch>
                        <Route path="/gallery/:id" component={Gallery} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/photoslist/:id" component={PhotosList} />
                        <Route path="/photoslist" component={PhotosList} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/login" component={Login} />
                        <Redirect to="/login" />
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
