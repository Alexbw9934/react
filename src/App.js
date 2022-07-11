import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <div className='w-full !mx-auto rounded-md xl:!w-3/4 bg-slate-400'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default App;