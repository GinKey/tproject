import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f8f8f8;
  overflow-x: hidden;
  padding-top: 20px;
  border-right: 1px solid #d1d1d1;
`;

const SidebarLink = styled.a`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;
  transition: 0.3s;

  &:hover {
    color: #575ed8;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Sidebar = ({ onSelectTable, onAddParticipant }) => {
    return (
        <SidebarContainer>
            <SidebarTitle>Таблицы</SidebarTitle>
            <SidebarLink href="#" onClick={(e) => { e.preventDefault(); onSelectTable('participants'); }}>Участники</SidebarLink>
            <SidebarLink href="#" onClick={(e) => { e.preventDefault(); onSelectTable('activity'); }}>Активности</SidebarLink>
            <SidebarLink href="#" onClick={(e) => { e.preventDefault(); onAddParticipant(); }}>Добавить участника</SidebarLink>
        </SidebarContainer>
    );
};

export default Sidebar;
