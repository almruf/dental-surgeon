import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="m-5">
            <div className="footer p-10 bg-slate-400">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms  ♂☺☺☺ use</Link>
                    <Link className="link link-hover">Privacy ♂☺☺☺ policy</Link>
                    <Link className="link link-hover">Cookie  ♂☺☺☺ policy</Link>
                </nav>
            </div>
            <div className='text-center'>
                <p>Copyright © 2024 - All right reserved by ABDUR RAHMAN</p>
            </div>
        </footer>
    );
};

export default Footer;