import React, { useContext, useState } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { 
  LayoutDashboard, 
  PlusCircle, 
  ListTodo, 
  HandHeart, 
  UserCircle, 
  LogOut, 
  Menu, 
  X, 
  Bell,
  Search,
  ChevronRight
} from 'lucide-react';
import toast from 'react-hot-toast';

const DashboardLayout = () => {
  const { user, signOutFunc, setUser } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutFunc()
      .then(() => {
        toast.success("Logged out successfully");
        setUser(null);
        navigate('/');
      })
      .catch(err => toast.error(err.message));
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/dashboard', end: true },
    { icon: <PlusCircle size={20} />, label: 'Add Issue', path: '/dashboard/add-issue' },
    { icon: <ListTodo size={20} />, label: 'My Issues', path: '/dashboard/my-issues' },
    { icon: <HandHeart size={20} />, label: 'My Contribution', path: '/dashboard/my-contribution' },
    { icon: <UserCircle size={20} />, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="min-h-screen bg-base-200/50 flex flex-col md:flex-row overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden bg-base-100 p-4 flex justify-between items-center border-b border-base-300">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="bg-primary text-primary-content px-2 py-1 rounded-lg">C</span>
          <span className="text-secondary">Hub</span>
        </Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="btn btn-ghost btn-sm">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0 w-72' : '-translate-x-full w-0'} 
        fixed md:relative md:translate-x-0 z-50 h-screen bg-base-100 border-r border-base-300 transition-all duration-300 flex flex-col
      `}>
        <div className="p-8 pb-10 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tight">
                <span className="bg-primary text-primary-content px-2 py-1 rounded-lg">Clean</span>
                <span className="text-secondary">Hub</span>
            </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
            <p className="text-[10px] font-black uppercase text-base-content/30 tracking-[0.2em] px-4 mb-4">Main Menu</p>
            {menuItems.map((item, i) => (
                <NavLink 
                    key={i} 
                    to={item.path} 
                    end={item.end}
                    className={({ isActive }) => `
                        flex items-center justify-between gap-3 px-4 py-3 rounded-2xl transition-all group
                        ${isActive 
                            ? 'bg-primary text-primary-content shadow-lg shadow-primary/20 font-bold' 
                            : 'hover:bg-primary/10 text-base-content/70 hover:text-primary'}
                    `}
                >
                    <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-sm">{item.label}</span>
                    </div>
                    <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${item.end ? 'hidden' : ''}`} />
                </NavLink>
            ))}
        </nav>

        <div className="p-4 mt-auto">
            <div className="bg-secondary text-secondary-content p-6 rounded-[2rem] shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                    <img src={user?.photoURL} alt="" className="w-16 h-16 rounded-2xl border-4 border-white/20 mb-4" />
                    <h4 className="font-bold truncate w-full">{user?.displayName}</h4>
                    <p className="text-[10px] opacity-70 mb-4 truncate w-full">{user?.email}</p>
                    <button 
                        onClick={handleLogout}
                        className="btn btn-sm btn-block rounded-xl bg-white/10 border-white/20 text-white hover:bg-error hover:border-error transition-all"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto relative">
        {/* Top Header (Desktop) */}
        <header className="hidden md:flex sticky top-0 bg-base-100/80 backdrop-blur-md z-40 p-6 px-10 items-center justify-between border-b border-base-200">
             <div className="relative w-96 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                    type="text" 
                    placeholder="Search for issues, status, or contributors..." 
                    className="input w-full pl-12 rounded-2xl bg-base-200/50 border-transparent focus:bg-base-100 focus:border-primary/30 transition-all font-medium"
                />
             </div>
             
             <div className="flex items-center gap-6">
                 <button className="btn btn-ghost btn-circle relative">
                    <Bell size={24} className="text-secondary" />
                    <span className="absolute top-2 right-2 w-3 h-3 bg-error border-2 border-base-100 rounded-full"></span>
                 </button>
                 <div className="h-10 w-[1px] bg-base-300"></div>
                 <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-sm font-black text-secondary">{user?.displayName}</p>
                        <p className="text-[10px] text-base-content/40 uppercase tracking-widest font-bold">Standard User</p>
                    </div>
                    <img src={user?.photoURL} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-primary ring-offset-2 shadow-lg" alt="" />
                 </div>
             </div>
        </header>

        {/* Content Area */}
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
