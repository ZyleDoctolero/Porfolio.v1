/* src/App.jsx */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from './routes/Layout.jsx';
import HomePage from './routes/index.jsx';
import CasePage from './routes/CasePage.jsx';

export default function App() {
  // reducedMotion="user": transform animations are skipped when the OS asks for less motion
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* Unknown slugs and unknown paths both fall through to CasePage's "No page here" */}
            <Route path="work/:slug" element={<CasePage />} />
            <Route path="*" element={<CasePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
