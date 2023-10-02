import { useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';

export const signOut = () => {
  const dispatch = useDispatch();
  dispatch(signOutUserStart());
};
window.signOut = signOut;
console.log('signOut function is defined');
