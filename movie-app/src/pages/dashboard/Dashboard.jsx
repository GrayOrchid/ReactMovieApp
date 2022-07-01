
import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css'
import { motion } from 'framer-motion';
const Dashboard = ({favoriteTvShows,favoriteMovies}) => {
    return (
        <motion.div className='dashboard'
        initial={{width:0}}
        animate={{width:'100%'}}
        exit={{x:window.innerWidth,transition:{duration:.5}}}
        
        >
        <div className="dashboard-container">
           <div className="dashboard-title">Welcome</div>
           <div className="dashboard-cards">
           <Link to='/favoriteMovies'>
              <div className="dashboard-card">
                 <span className='dashboard-span_first'>{favoriteMovies.length}</span>
                 <span className='dashboard-span_second'>Movies</span>
              </div>
              </Link>
              {/* favoriteTv */}
          <Link to='/favoriteTvs'>
          <div className="dashboard-card">
                 <span className='dashboard-span_first'>{favoriteTvShows.length}</span>
                 <span className='dashboard-span_second'>TV Shows</span>
              </div>
          </Link>
              <div className="dashboard-card">
                 <span className='dashboard-span_first'>6</span>
                 <span className='dashboard-span_second'>Collections</span>
              </div>
           </div>
           <div className='dashaboard-links__title'> Quick Links</div>
           <div className="dashaboard-links">
              <div className="dashboard-link">Main</div>
              <div className="dashboard-link">Clear</div>
           </div>
        </div>

        </motion.div>
    );
}

export default Dashboard;
