import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavBar = () => (
    <NavLayout>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href={'posts/new'}>
            <a>Create new post</a>
        </Link>
    </NavLayout>

)

export default NavBar;


const NavLayout = styled.div`

    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    grid-template-columns: 1fr repeat(4, 2fr) 1fr;
    grid-gap: 2px;
    
    background: rgb(79, 79, 87);
    padding: 10px;
`
