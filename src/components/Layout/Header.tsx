import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';

const HeaderContainer = styled.header`
  height: 70px;
  background-color: white;
  border-bottom: 1px solid #e1e8ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const UserInfo = styled.div`
  text-align: right;
`;

const UserName = styled.div`
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
`;

const UserEmail = styled.div`
  font-size: 12px;
  color: #7f8c8d;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const LogoutButton = styled.button`
  padding: 8px 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <HeaderContainer>
      <PageTitle>Welcome, {user?.name || 'User'}</PageTitle>
      <UserSection>
        <UserInfo>
          <UserName>{user?.name}</UserName>
          <UserEmail>{user?.email}</UserEmail>
        </UserInfo>
        <Avatar>{user ? getInitials(user.name) : 'U'}</Avatar>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;

