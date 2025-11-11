import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectClient } from '../store/slices/clientsSlice';

const DetailsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #f8f9fa;
  color: #2c3e50;
  border: 2px solid #e1e8ed;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e9ecef;
    border-color: #ced4da;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const EditButton = styled.button`
  padding: 10px 20px;
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

const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const ClientCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
`;

const ClientHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 2px solid #f8f9fa;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 32px;
`;

const ClientInfo = styled.div`
  flex: 1;
`;

const ClientName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 8px 0;
`;

const StatusBadge = styled.span<{ status: 'active' | 'inactive' }>`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => (props.status === 'active' ? '#d4edda' : '#f8d7da')};
  color: ${(props) => (props.status === 'active' ? '#155724' : '#721c24')};
`;

const DetailSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DetailLabel = styled.div`
  font-size: 13px;
  color: #7f8c8d;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DetailValue = styled.div`
  font-size: 16px;
  color: #2c3e50;
  font-weight: 500;
`;

const NotesSection = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 2px solid #f8f9fa;
`;

const NotesTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
`;

const NotesContent = styled.p`
  font-size: 15px;
  color: #5a6c7d;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const SessionsCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px;
  color: #7f8c8d;
  font-size: 14px;
`;

const ClientDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const client = useAppSelector((state) => state.clients.selectedClient);

  useEffect(() => {
    if (id) {
      dispatch(selectClient(id));
    }
  }, [id, dispatch]);

  if (!client) {
    return (
      <DetailsContainer>
        <EmptyState>Client not found</EmptyState>
      </DetailsContainer>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <DetailsContainer>
      <Header>
        <BackButton onClick={() => navigate('/clients')}>← Back to Clients</BackButton>
        <ActionButtons>
          <EditButton>Edit Client</EditButton>
          <DeleteButton>Delete Client</DeleteButton>
        </ActionButtons>
      </Header>

      <ClientCard>
        <ClientHeader>
          <Avatar>{getInitials(client.name)}</Avatar>
          <ClientInfo>
            <ClientName>{client.name}</ClientName>
            <StatusBadge status={client.status}>
              {client.status.toUpperCase()}
            </StatusBadge>
          </ClientInfo>
        </ClientHeader>

        <DetailSection>
          <DetailItem>
            <DetailLabel>Email Address</DetailLabel>
            <DetailValue>{client.email}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Phone Number</DetailLabel>
            <DetailValue>{client.phone}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Last Session</DetailLabel>
            <DetailValue>{client.lastSession}</DetailValue>
          </DetailItem>
        </DetailSection>

        {client.notes && (
          <NotesSection>
            <NotesTitle>Clinical Notes</NotesTitle>
            <NotesContent>{client.notes}</NotesContent>
          </NotesSection>
        )}
      </ClientCard>

      <SessionsCard>
        <SectionTitle>Session History</SectionTitle>
        <EmptyState>No sessions recorded yet</EmptyState>
      </SessionsCard>
    </DetailsContainer>
  );
};

export default ClientDetails;

