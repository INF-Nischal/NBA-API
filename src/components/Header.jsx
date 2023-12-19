import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-[10vh] px-16 py-4 flex justify-between bg-gray-200'>
        <h1 className='text-3xl'>
            <Link to='/'>NBA</Link>
        </h1>
        <ul className='flex'>
            <li className='px-4 py-2 mr-5'>
                <Link to='/teams'>Teams</Link>
            </li>
            <li className='px-4 py-2'>
                <Link to='/games'>Games</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header