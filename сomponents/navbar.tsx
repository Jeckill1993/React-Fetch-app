import React from 'react';
import Link from 'next/link';
import {NavLayout, ButtonLayout} from './styled_components/components';

const NavBar = () => (
    <NavLayout>
        <Link href="/">
            <ButtonLayout>Home</ButtonLayout>
        </Link>
        <Link href={'posts/new'}>
            <ButtonLayout>Create new post</ButtonLayout>
        </Link>
    </NavLayout>

)

export default NavBar;



