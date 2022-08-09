import Links from './Links'

export default function SideBarNavigation({navref}) {

    // Sidebar navigation menu
    return (
        <ul data-aos="zoom-in-right" ref={navref} className='nav' id='sidebar'>
            <Links />
        </ul>
    )
}
