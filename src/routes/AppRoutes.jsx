import { Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import DashboardPage from '../pages/DashboardPage';
import PlayerTeamFavourites from '../components/PlayerTeamFavComponent/PlayerTeamFavorites';
import AccountSetting from '../components/AccountSettingComponent/AccountSettingComponent';
import SettingsPage from '../pages/SettingsPage';
import ProtectedRoute from './ProtectedRoutes.jsx';
import GuestRoute from './GuestRoutes.jsx';
import { useSelector } from 'react-redux';
import PlayersInsightsMain from '../components/PlayersInsights/PlayersInsightsMain.jsx';
import TeamInsightMain from '../components/TeamInsight/TeamInsightMain.jsx';
import SubscriptionMain from '../components/Subscription/SubscriptionMain';
import LandingPage from '../pages/LandingPage.jsx';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import BettingOdds from '../components/BettingOdds/BettingOdds.jsx';
import { GameInsights } from '../components/GameInsights/GameInsights.jsx';
import Main from '../components/Test/Main.jsx';
import GameDetails from '../components/GameInsights/GameDetails.jsx';
import MatchDetailPage from './MatchDetailPage.jsx';
import Success from '../components/Subscription/Success.jsx';
import Cancel from '../components/Subscription/Cancel.jsx';

const AppRoutes = () => {
    const { userInfo } = useSelector((state) => state.auth);

    return (
        <Routes>
            {/* Authentication Routes */}
            <Route path="/" element={<GuestRoute><LandingPage /></GuestRoute>} />
            <Route path="/news" element={<GuestRoute><LandingPage /></GuestRoute>} />
            <Route path="/signin" element={<GuestRoute><SignInPage /></GuestRoute>} />
            <Route path="/Test_login" element={<GuestRoute><Main /></GuestRoute>} />
            <Route path="/signup" element={<GuestRoute><SignUpPage /></GuestRoute>} />
            <Route path="/pricing" element={<GuestRoute><SubscriptionMain /></GuestRoute>} />

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
                <Route path="/games-insight/:gameType/:leagueId/:status/:fixtureId" element={<GameDetails />} />
                <Route path="/subscription" element={<SubscriptionMain />} />
                <Route path="/subscription/success/:subcribtionPlan" element={<Success />} />
                <Route path="/subscription/cancel/:sessionId" element={<Cancel />} />
                <Route path="/betting-odds" element={<BettingOdds />} />
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
