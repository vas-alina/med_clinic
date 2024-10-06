import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #dce9e2;
  ;
  color: #000;
  padding: 10px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;
const H1 = styled.h1`
  
  width: 50%;
  font-size: 3.2em;
  line-height: 1.1;
  left: -20%;
  color: #2e7d32;
  text-align: left;
  z-index: 2;
`;
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }

  
`;

export const LeadsPage = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await 
        axios.get("http://localhost:5000/leads");
        setLeads(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке данных", error);
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) {
    return <div>Загрузка лидов...</div>;
  }

  return (
    <div>
      <H1>Входящие заявки</H1>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Имя</TableHeader>
            <TableHeader>Номер телефона</TableHeader>
            <TableHeader>Описание проблемы</TableHeader>
            <TableHeader>Дата создания</TableHeader>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.id}</TableCell>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.numberPhone}</TableCell>
              <TableCell>{lead.textProblem}</TableCell>
              <TableCell>{new Date(lead.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};