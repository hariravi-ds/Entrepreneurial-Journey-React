import React from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingBag } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsTools } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaFontAwesomeFlag } from "react-icons/fa";

const Sidebar = () => {
  const links = [
    { label: 'Inbox', icon: MdOutlineMailOutline, path: '/inbox' },
    { label: 'Project: Green Loop', icon: TiShoppingBag, path: '/projects/green-loop' },
    { label: 'Project: eTrail', icon: TiShoppingBag, path: '/projects/etrail' },
    { label: 'Project: AI Garden', icon: TiShoppingBag, path: '/projects/ai-garden' },
    { label: 'Tools', icon: BsTools, path: '/tools' },
    { label: 'My Network', icon: HiOutlineUserGroup, path: '/network' },
    { label: 'Saved', icon: FaFontAwesomeFlag, path: '/saved' },
    { label: 'Newsletters & Blogs', icon: SlEnvolopeLetter, path: '/newsletters' },
    { label: 'Settings', icon: IoMdSettings, path: '/settings' },
  ];

  return (
    <div className="h-full p-6 border-r">
      <nav>
        <ul>
          {links.map((link) => (
            <li className="py-3 px-2" key={link.path}>
              <Link to={link.path} className="flex gap-2 items-center hover:underline font-bold text-base" style={{ color: 'var(--text-secondary)' }}>
                <link.icon/> {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;