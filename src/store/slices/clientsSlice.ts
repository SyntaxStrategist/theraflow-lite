import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  lastSession: string;
  notes?: string;
}

interface ClientsState {
  clients: Client[];
  selectedClient: Client | null;
}

const initialState: ClientsState = {
  clients: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '(555) 123-4567',
      status: 'active',
      lastSession: '2025-11-10',
      notes: 'Making good progress with CBT techniques.',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '(555) 987-6543',
      status: 'active',
      lastSession: '2025-11-08',
      notes: 'Working on anxiety management.',
    },
    {
      id: '3',
      name: 'Robert Johnson',
      email: 'robert.j@example.com',
      phone: '(555) 456-7890',
      status: 'inactive',
      lastSession: '2025-10-15',
      notes: 'Paused sessions temporarily.',
    },
  ],
  selectedClient: null,
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    addClient: (state, action: PayloadAction<Client>) => {
      state.clients.push(action.payload);
    },
    updateClient: (state, action: PayloadAction<Client>) => {
      const index = state.clients.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.clients[index] = action.payload;
      }
    },
    deleteClient: (state, action: PayloadAction<string>) => {
      state.clients = state.clients.filter((c) => c.id !== action.payload);
    },
    selectClient: (state, action: PayloadAction<string>) => {
      state.selectedClient = state.clients.find((c) => c.id === action.payload) || null;
    },
    clearSelectedClient: (state) => {
      state.selectedClient = null;
    },
  },
});

export const { addClient, updateClient, deleteClient, selectClient, clearSelectedClient } = clientsSlice.actions;
export default clientsSlice.reducer;

