import { Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import DashboardPage from '../pages/DashboardPage';
import PlayerTeamFavourites from '../components/PlayerTeamFavComponent/PlayerTeamFavorites';
import AccountSetting from '../components/AccountSettingComponent/AccountSettingComponent';
import SettingsPage from '../pages/SettingsPage';
import ProtectedRoute from './ProtectedRoutes.jsx';
import GuestRoute from './GuestRoutes.jsx';
import PlayersInsightsMain from '../components/PlayersInsights/PlayersInsightsMain.jsx';
import TeamInsightMain from '../components/TeamInsight/TeamInsightMain.jsx';
import SubscriptionMain from '../components/Subscription/SubscriptionMain';
import LandingPage from '../pages/LandingPage.jsx';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import { GameInsights } from '../components/GameInsights/GameInsights.jsx';
import Main from '../components/Test/Main.jsx';
import GameDetails from '../components/GameInsights/GameDetails.jsx';
import MatchDetailPage from './MatchDetailPage.jsx';
import Success from '../components/Subscription/Success.jsx';
import Cancel from '../components/Subscription/Cancel.jsx';
import TrendingNews from '../components/LandingPage/News/TrendingNews.jsx';
import MainLayout from '../pages/MainLayout.jsx';
import ContactForm from '../components/LandingPage/ContactUs/ContactForm.jsx';
import Summary from '../components/GameInsights/Summary.jsx';
import Odds from '../components/GameInsights/Odds.jsx';
import MatchStatistics from '../components/GameInsights/MatchStatistics.jsx';
import Prediction from '../components/GameInsights/Prediction.jsx';
import SportsCategorySelector from '../components/LandingPage/SportsCategory/SportsCategorySelector.jsx';

const AppRoutes = () => {

    return (
        <Routes>
            {/* Authentication Routes */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<GuestRoute><LandingPage /></GuestRoute>} />
                <Route path="/news" element={<GuestRoute><TrendingNews /></GuestRoute>} />
                <Route path="/pricing" element={<GuestRoute><SubscriptionMain /></GuestRoute>} />
                <Route path="/games" element={<GuestRoute><SportsCategorySelector /></GuestRoute>} />
                {/* <Route path="/betting-odds" element={<GuestRoute><LandingPage /></GuestRoute>} /> */}
                <Route path="/education" element={<GuestRoute><LandingPage /></GuestRoute>} />
                <Route path="/contact" element={<GuestRoute><ContactForm /></GuestRoute>} />
            </Route>
            <Route path="/signin" element={<GuestRoute><SignInPage /></GuestRoute>} />
            <Route path="/Test_login" element={<GuestRoute><Main /></GuestRoute>} />
            <Route path="/signup" element={<GuestRoute><SignUpPage /></GuestRoute>} />

            {/* Dashboard and Protected Routes */}
            {/* <Route element={userInfo ? (<ProtectedRoute />) : <Navigate to="/signin" replace />} > */}
            {/* Default redirect to account-setting */}
            {/* <Route index element={<Navigate to="/dashboard/account-setting" replace />} > */}
            {/* <Route element={<ProtectedRoute />}> */}
            <Route element={<ProtectedRoute ><DashboardPage /></ProtectedRoute>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/match" element={<MatchDetailPage />} />
                <Route path="/player-insight" element={<PlayersInsightsMain />} />
                <Route path="/team-insight" element={<TeamInsightMain />} />
                <Route path="/games-insight" element={<GameInsights />} />
                <Route path="/games-insight/:gameType/:leagueId/:status/:fixtureId" element={<GameDetails />}>
                    <Route path="summary" element={<Summary />} />
                    <Route path="odds" element={<Odds />} />
                    <Route path="prediction" element={<Prediction />} />
                    <Route path="stats" element={<MatchStatistics />} />
                </Route>
                <Route path="/subscription" element={<SubscriptionMain />} />
                <Route path="/subscription/success/:subcribtionPlan" element={<Success />} />
                <Route path="/subscription/cancel/:sessionId" element={<Cancel />} />
                {/* <Route path="/betting-odds" element={<BettingOdds />} /> */}
                <Route path="/dashboard/player-team-favourites" element={<PlayerTeamFavourites />} />
                <Route path="/dashboard/account-setting" element={<AccountSetting />} />
                <Route path="/dashboard/setting" element={<SettingsPage />} />
            </Route>
            {/* </Route> */}
            {/* </Route> */}

            {/* Catch-all route to redirect unauthenticated users to signin */}
            <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
    );
};

export default AppRoutes;
