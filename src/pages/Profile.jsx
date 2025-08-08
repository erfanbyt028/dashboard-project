import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../features/user/userSlice';
import { Link } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, profile } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="mb-3">وارد نشده‌اید.</p>
        <div className="flex gap-3">
          <Link className="text-teal-600 underline" to="/signin">ورود</Link>
          <Link className="text-teal-600 underline" to="/signup">ثبت نام</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-2">
      <h2 className="text-xl font-bold">پروفایل</h2>
      <p><span className="font-medium">نام:</span> {profile?.name ?? '-'}</p>
      <p><span className="font-medium">ایمیل:</span> {profile?.email}</p>
      <button className="mt-4 bg-gray-100 px-4 py-2 rounded" onClick={() => dispatch(signOutUser())}>
        خروج
      </button>
    </div>
  );
};

export default Profile;

