import logo from './logo.svg';
import './styles.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />} />
        {/* Protect the dashboard route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
