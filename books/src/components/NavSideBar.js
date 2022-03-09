import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NavSideBar() {


    return (
        <>
       
		<nav>
        <Link to='/browse-all'> Browse all</Link>
        <Link to='/add-book'>   Add Book</Link>
        <Link to='/your-books'> Your books</Link>
        </nav>
        </>

	)
}