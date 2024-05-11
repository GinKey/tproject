import styled from 'styled-components';

const StatusIndicator = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${props => props.status ? '#4caf50' : '#f44336'};
  border-radius: 50%;
  display: inline-block;
`;

export default StatusIndicator;
