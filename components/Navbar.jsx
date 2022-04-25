import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import { useUser } from '@auth0/nextjs-auth0';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  // const { user, error, isLoading } = useUser();
  // // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Jamstack Headphones</Link>
      </p>
      <div className='navbar__right'>
        <button
          type='button'
          className='cart-icon'
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
        {/* {user ? (
          <div className='right'>
            <img src={user?.picture} alt={user?.name} />
            <a href='/api/auth/logout'>Logout</a>
          </div>
        ) : (
        

          <a href='/api/auth/login'>Login</a>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
