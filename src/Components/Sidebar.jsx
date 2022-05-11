import "../Styles/sidebar.css"

const Sidebar = ({sidebarOpen}) => {
    return (
        <div className={(sidebarOpen) ? "sideOpen show" : "sideOpen" }>
            <ul className = "sideList">
                <li className = "sideListItem">
                    <a className="link" href="/"> Home </a>
                </li>
                <li className = "sideListItem">
                    <a className="link" href="/"> Home </a>
                </li>
                <li className = "sideListItem">
                    <a className="link" href="/"> Home </a>
                </li>
                <li className = "sideListItem">
                    <a className="link" href="/"> Home </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;