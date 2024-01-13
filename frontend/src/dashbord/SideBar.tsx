import React from 'react'
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiLogin, HiLogout, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import logo from '../assets/profile.jpg'
import { BsFillCloudUploadFill } from 'react-icons/bs';
const SideBar = () => {
  return (
    <div>

      <Sidebar aria-label="Sidebar with content separator example">

        <Sidebar.Logo href="#" img={logo} imgAlt="logo">
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashbord" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashbord/upload" icon={BsFillCloudUploadFill}>
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashbord/manage" icon={HiInbox}>
              Manage Book
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiLogin}>
              Log In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiLogout}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  )
}

export default SideBar
