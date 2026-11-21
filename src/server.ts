import express from 'express';
import type { Contact } from './types/contact.js';

let contacts: Contact[] = [
  {
    id: 1,
    name: 'Ana Silva',
    email: 'ana.silva@example.com',
    phone: '(11) 99999-1001',
    createdAt: new Date('2026-01-10T10:00:00Z'),
    updatedAt: new Date('2026-01-10T10:00:00Z')
  },
  {
    id: 2,
    name: 'Bruno Costa',
    email: 'bruno.costa@example.com',
    phone: '(21) 98888-2002',
    createdAt: new Date('2026-02-11T10:00:00Z'),
    updatedAt: new Date('2026-02-11T10:00:00Z')
  },
  {
    id: 3,
    name: 'Carla Mendes',
    email: 'carla.mendes@example.com',
    phone: '(31) 97777-3003',
    createdAt: new Date('2026-03-12T10:00:00Z'),
    updatedAt: new Date('2026-03-12T10:00:00Z')
  },
  {
    id: 4,
    name: 'Diego Oliveira',
    email: 'diego.oliveira@example.com',
    phone: '(41) 96666-4004',
    createdAt: new Date('2026-04-13T10:00:00Z'),
    updatedAt: new Date('2026-04-13T10:00:00Z')
  },
  {
    id: 5,
    name: 'Eduarda Santos',
    email: 'eduarda.santos@example.com',
    phone: '(51) 95555-5005',
    createdAt: new Date('2026-05-14T10:00:00Z'),
    updatedAt: new Date('2026-05-14T10:00:00Z')
  }
];

const app = express();
const PORT = 3000;

app.get('/contacts', (req, res) => {
  res.status(200).json({ contacts});
});

app.get('/contacts/:id', (req, res) => {
  const { id } = req.params;

  const contact = contacts.find(item => item.id === Number(id));

  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  res.status(200).json({ contact });
});

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});


/* app.post('/criar', (req, res) => {
  res.status(201).json({ message: 'Resource created successfully!' });
});

app.delete('/remover', (req, res) => {
  res.status(200).json({ message: 'Resource deleted successfully!' });
});
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});