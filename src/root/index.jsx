// import { Container } from './style.js'
import { Navbar } from './../components/Navbar/index';
import { Route, Routes, Navigate } from 'react-router-dom';
import { navbar } from '../utils/navbar.js';

export const Root = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />} >
                {navbar.map(({ path, id, Element, param }) => {
                    return !param && <Route key={id} path={path} element={Element} />
                })}
            </Route>
            {navbar.map(({ path, id, Element, hidden }) => {
                return hidden && <Route key={id} path={path} element={Element} />
            })}
            <Route path="/" element={<Navbar />} >
                {navbar.map(({ path, id, Element, hidden }) => {
                    return !hidden && <Route key={id} path={path} element={Element} />
                })}
            </Route>
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='*' element={<div>Not Found</div>} />
        </Routes>
        
    );
}