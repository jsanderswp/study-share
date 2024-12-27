"use client"

import TopMenu from "./includes/TopMenu";

export default function MainLayout({ Children }) {
    return (
        <>
           <div id="MainLayout" className='min-w-[1050px] max-w-[1300px] mx-auto'>
                <TopMenu />

           </div>
        </>
    );
}