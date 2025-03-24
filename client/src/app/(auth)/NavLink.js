import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className="inline-flex items-center px-1 pt-1  text-sm  text-gray-300 font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ">
        {children}
    </Link>
)

export default NavLink
