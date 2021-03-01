import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Message from '../UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';

import '../../css/Dashboard.scss';
import Button from '../UI/Button';

const Dashboard: React.FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  
  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);
  
  return (
    <div className='dashboard-home'>
          {needVerification && <Message type="success" msg="Please verify your email address."/>}
      <h1 className="is-size-1">Welcome {user?.firstName}</h1>

    

          <ul className="ulBox">
            <li className="list"><Link to='/forum'>Forum</Link></li>
            <li className="list"><Link to="/crypto">Cryptocurrency</Link></li>
            <li className="list"><Link to="/newspage">News</Link></li>
            <li className="list"><Link to='/test'>Lek</Link></li>
          </ul>

   
  </div>
  )
}

export default Dashboard;