import styled from 'styled-components';
import { useAppSelector } from '../store/hooks';

const DashboardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 24px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 8px;
  font-weight: 500;
`;

const StatValue = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 4px;
`;

const StatChange = styled.div<{ positive?: boolean }>`
  font-size: 13px;
  color: ${(props) => (props.positive ? '#27ae60' : '#e74c3c')};
  font-weight: 600;
`;

const Section = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
`;

const ClientList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ClientItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e9ecef;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ClientName = styled.div`
  font-weight: 600;
  color: #2c3e50;
  font-size: 15px;
`;

const ClientSession = styled.div`
  font-size: 13px;
  color: #7f8c8d;
`;

const StatusBadge = styled.span<{ status: 'active' | 'inactive' }>`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => (props.status === 'active' ? '#d4edda' : '#f8d7da')};
  color: ${(props) => (props.status === 'active' ? '#155724' : '#721c24')};
`;

const Dashboard = () => {
  const clients = useAppSelector((state) => state.clients.clients);
  const activeClients = clients.filter((c) => c.status === 'active');

  return (
    <DashboardContainer>
      <PageTitle>Dashboard Overview</PageTitle>

      <StatsGrid>
        <StatCard>
          <StatLabel>Total Clients</StatLabel>
          <StatValue>{clients.length}</StatValue>
          <StatChange positive>+2 this month</StatChange>
        </StatCard>
        <StatCard>
          <StatLabel>Active Clients</StatLabel>
          <StatValue>{activeClients.length}</StatValue>
          <StatChange positive>+1 this week</StatChange>
        </StatCard>
        <StatCard>
          <StatLabel>Sessions This Week</StatLabel>
          <StatValue>12</StatValue>
          <StatChange>-3 from last week</StatChange>
        </StatCard>
        <StatCard>
          <StatLabel>Upcoming Today</StatLabel>
          <StatValue>3</StatValue>
          <StatChange positive>All confirmed</StatChange>
        </StatCard>
      </StatsGrid>

      <Section>
        <SectionTitle>Recent Clients</SectionTitle>
        <ClientList>
          {clients.slice(0, 5).map((client) => (
            <ClientItem key={client.id}>
              <ClientInfo>
                <ClientName>{client.name}</ClientName>
                <ClientSession>Last session: {client.lastSession}</ClientSession>
              </ClientInfo>
              <StatusBadge status={client.status}>
                {client.status.toUpperCase()}
              </StatusBadge>
            </ClientItem>
          ))}
        </ClientList>
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;

