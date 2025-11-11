import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../store/hooks';

const ClientsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const PageTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
`;

const AddButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 14px 20px;
  border: 2px solid #e1e8ed;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 24px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

const ClientCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

const ClientHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 16px;
`;

const ClientName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 8px 0;
`;

const StatusBadge = styled.span<{ status: 'active' | 'inactive' }>`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  background-color: ${(props) => (props.status === 'active' ? '#d4edda' : '#f8d7da')};
  color: ${(props) => (props.status === 'active' ? '#155724' : '#721c24')};
`;

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #5a6c7d;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    color: #7f8c8d;
  }
`;

const LastSession = styled.div`
  padding-top: 12px;
  border-top: 1px solid #e1e8ed;
  font-size: 13px;
  color: #7f8c8d;
  
  strong {
    color: #2c3e50;
  }
`;

const Clients = () => {
  const navigate = useNavigate();
  const clients = useAppSelector((state) => state.clients.clients);

  return (
    <ClientsContainer>
      <Header>
        <PageTitle>Clients</PageTitle>
        <AddButton>+ Add New Client</AddButton>
      </Header>

      <SearchBar placeholder="Search clients by name, email, or phone..." />

      <ClientsGrid>
        {clients.map((client) => (
          <ClientCard key={client.id} onClick={() => navigate(`/clients/${client.id}`)}>
            <ClientHeader>
              <ClientName>{client.name}</ClientName>
              <StatusBadge status={client.status}>
                {client.status.toUpperCase()}
              </StatusBadge>
            </ClientHeader>
            <ClientDetails>
              <DetailRow>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {client.email}
              </DetailRow>
              <DetailRow>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {client.phone}
              </DetailRow>
            </ClientDetails>
            <LastSession>
              <strong>Last Session:</strong> {client.lastSession}
            </LastSession>
          </ClientCard>
        ))}
      </ClientsGrid>
    </ClientsContainer>
  );
};

export default Clients;

