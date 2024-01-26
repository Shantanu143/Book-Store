
import React, { useContext } from 'react';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiChartPie, HiInbox, HiLogin, HiLogout, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { AuthContext } from '../contects/AuthProvider';

import { BsFillCloudUploadFill } from 'react-icons/bs';

const SideBar: React.FC = () => {
  const { user }: { user: any } = useContext(AuthContext);
  const userPhotoURL = user?.photoURL || "https://imgs.search.brave.com/ABvCuXW60bLKFfqME2YfmQHfEJA5_WMjlZzNE_wKYaM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZG9y/YWVtb24tcGljdHVy/ZXMtdmN2MThnYjBm/NXQweWxiaS5qcGc";
  const userDisplayName = user?.displayName || "Demo User";
  return (
    <div>
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img={userPhotoURL} imgAlt="logo" className='w-16 h-16 rounded-lg'>
          <a href='#'>{userDisplayName}</a>
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
  );
};

export default SideBar;
