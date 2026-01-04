import React, { useState } from "react";
import { Camera, Mail, MapPin, Phone, ShieldCheck, User } from "lucide-react";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  console.log(user.email, user);
  const [puser, setPUser] = useState({
    name: user.displayName,
    email: user.email,
    phone: "+880 1712 345678",
    address: "Dhaka, Bangladesh",
    role: "Premium Member",
    joined: "January 2024",
    image: user.photoURL,
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* 1. Header & Cover Section */}
      <div className="relative bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
        <div className="px-8 pb-8">
          <div className="relative flex flex-col md:flex-row items-end -mt-12 gap-6">
            <div className="relative group">
              <img
                src={puser.image}
                alt="Profile"
                className="w-32 h-32 rounded-3xl border-4 border-white shadow-md object-cover bg-white"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-white rounded-xl shadow-lg border border-slate-100 text-slate-600 hover:text-yellow-600 transition-colors">
                <Camera size={18} />
              </button>
            </div>

            <div className="flex-1 pb-2">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                {puser.name}
                <ShieldCheck size={20} className="text-blue-500" />
              </h2>
              <p className="text-slate-500 font-medium">{user.role}</p>
            </div>

            <button className="mb-2 px-6 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl transition-all shadow-sm">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 2. Personal Information Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">About Me</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <Mail size={18} />
                </div>
                <div className="text-sm">
                  <p className="text-slate-400 text-xs">Email Address</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <Phone size={18} />
                </div>
                <div className="text-sm">
                  <p className="text-slate-400 text-xs">Phone Number</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <MapPin size={18} />
                </div>
                <div className="text-sm">
                  <p className="text-slate-400 text-xs">Location</p>
                  <p className="font-medium">{user.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <User size={18} />
                </div>
                <div className="text-sm">
                  <p className="text-slate-400 text-xs">Member Since</p>
                  <p className="font-medium">{user.joined}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Stats & Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center">
              <p className="text-3xl font-bold text-slate-800">12</p>
              <p className="text-sm text-slate-500 font-medium">Total Trips</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center">
              <p className="text-3xl font-bold text-slate-800">4.9</p>
              <p className="text-sm text-slate-500 font-medium">User Rating</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Account Settings
            </h3>
            <div className="space-y-3">
              <label className="block">
                <span className="text-sm font-medium text-slate-600">
                  Display Name
                </span>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none"
                  defaultValue={user.name}
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-600">Bio</span>
                <textarea
                  className="mt-1 block w-full px-4 py-2 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none"
                  rows="3"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </label>
              <div className="flex justify-end">
                <button className="px-6 py-2 bg-slate-800 text-white text-sm font-semibold rounded-xl hover:bg-slate-900 transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
