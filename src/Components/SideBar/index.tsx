import React, {useState} from 'react';
import './style.scss'
import {useHistory} from 'react-router-dom';
import { ReactComponent as TodoIcon }  from '../../image/todo-list.svg';
import { ReactComponent as TasksIcon }  from '../../image/tasks-manager.svg';

const listPages:{title: string, Icon: React.FC<React.SVGProps<SVGSVGElement>>}[] = [
    {title: "Dashboard", Icon: TodoIcon},
    {title: "Customers", Icon: TodoIcon},
    {title: "Remittance", Icon: TodoIcon},
    {title: "P2P", Icon: TodoIcon},
    {title: "Messages", Icon: TasksIcon},
    {title: "Todos", Icon: TodoIcon},
]

function SideBar() {
    const history = useHistory();
    const [location, setLocation] = useState<string>(history.location.pathname.slice(1))

    const setPageActive = (otherPage: string): void => {
         history.push(otherPage.toLowerCase())
         setLocation(otherPage.toLowerCase())
    }

    return (
        <div className={"side-bar"}>
            {listPages.map(page => {
                return <div
                    className={`link-page ${location === page.title.toLowerCase() ? "link-page-active" : ""}`}
                    key={page.title}
                    onClick={() => setPageActive(page.title)}
                >
                   <div>
                       <page.Icon width={"20px"} fill="white" stroke={location === page.title.toLowerCase() ? "green" : "black"}/>
                   </div>
                    <span>
                        {page.title.replace("-", " ")}
                    </span>
                </div>
            })}
        </div>
    );
}

export default SideBar;
