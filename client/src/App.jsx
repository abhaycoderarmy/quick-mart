import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
import toast,{ Toaster } from 'react-hot-toast'
import fetchUserDetails from "./utils/fetchUserDetails";
import { useEffect } from "react";
import { setUserDetails } from "./store/userSlice";
import { useDispatch } from "react-redux";

function App() {

     const despatch = useDispatch();

     useEffect(() => { 
          const fetchUser = async () => {
              try {
               
                  const userInfo = await fetchUserDetails();
                  despatch(setUserDetails(userInfo.data));

              } catch (error) {
                  console.log("Error in fetchUser", error);
              }
          };
      
          fetchUser();
      }, []);

     return( <>
          <Header />
          <main className='min-h-[78vh]'>
          <Outlet />
          </main>
          <Footer />
          <Toaster />
     </>)
}

export default App
