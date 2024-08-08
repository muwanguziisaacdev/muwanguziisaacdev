import React from 'react'

const Header = () => {
  return (
    <>
        <header className='flex justify-between py-4 px-6'>

                <div><h4 className='underline text-3xl'>it's me</h4></div>
                <nav>
                    <ul className='flex lg:gap-20'>
                        <li className='menuList'>
                            <header><h2 className='text-sm font-bold'>My Projects</h2></header>
                            <p className='text-sm font-extralight'>See all of nice project</p>
                            <p className='text-sm font-extralight'>i have done</p>
                        </li>
                        <li className='menuList'>
                            <header><h2 className='text-sm font-bold'>My Projects</h2></header>
                            <p className='text-sm font-extralight'>See all of nice project</p>
                            <p className='text-sm font-extralight'>i have done</p>
                        </li>
                        <li className='menuList'>
                            <header><h2 className='text-sm font-bold'>My Projects</h2></header>
                            <p className='text-sm font-extralight'>See all of nice project</p>
                            <p className='text-sm font-extralight'>i have done</p>
                        </li>
                    </ul>
                </nav>
        </header>
    </>
  )
}

export default Header