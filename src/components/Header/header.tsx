import "./header.css";

const Header = () => {
    return (
        <div className='header_section'>
            <div className='logo'>
                <span>{"<"}</span>
                {"RAHMAN"}
                <span>{"/>"}</span>
            </div>
            <ul>
                <li>{"Start/>"}</li>
                <li>{"Work/>"}</li>
                <li>{"Lab/>"}</li>
                <li>{"About/>"}</li>
                <li>{"Contact/>"}</li>
            </ul>
        </div>
    );
};

export default Header;
