'use client';

import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
    return (
        <UserButton
            appearance={{
                elements: {
                    avatarBox: "w-20 h-20",
                }
            }}
        >

            <UserButton.MenuItems>
                <UserButton.Link
                    label='My Organizations'
                    labelIcon={<ChartNoAxesGantt size={20} />}
                    href='/onboardin'
                />
                <UserButton.Action label='manageAccount'/>

            </UserButton.MenuItems>
        </UserButton>
    )
}

export default UserMenu