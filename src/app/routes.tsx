import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { WelcomePage } from './pages/WelcomePage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { HomePage } from './pages/HomePage';
import { LogPage } from './pages/LogPage';
import { HistoryPage } from './pages/HistoryPage';
import { RoutinePage } from './pages/RoutinePage';
import { SettingsPage } from './pages/SettingsPage';
import { SleepGoalPage } from './pages/SleepGoalPage';
import { NudgePage } from './pages/NudgePage';
import { SleepLogDetailPage } from './pages/SleepLogDetailPage';
import { AddTaskPage } from './pages/AddTaskPage';
import { SleepTrackingPage } from './pages/SleepTrackingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      // ── Onboarding / Auth ──────────────────────────────────
      { index: true, Component: WelcomePage },
      { path: 'signup',          Component: SignUpPage },
      { path: 'signin',          Component: SignInPage },
      // ── Main app ──────────────────────────────────────────
      { path: 'nudge',           Component: NudgePage },
      { path: 'home',            Component: HomePage },
      { path: 'log',             Component: LogPage },
      { path: 'history',         Component: HistoryPage },
      { path: 'log-detail',      Component: SleepLogDetailPage },
      { path: 'routine',         Component: RoutinePage },
      { path: 'add-task',        Component: AddTaskPage },
      { path: 'sleep-tracking',  Component: SleepTrackingPage },
      { path: 'settings',        Component: SettingsPage },
      { path: 'sleep-goal',      Component: SleepGoalPage },
    ],
  },
]);