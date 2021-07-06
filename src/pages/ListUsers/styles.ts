import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  table {
    width: 100%;
    border-spacing: 0;
    display: table;
    tr {
      color: gray;
    }
    th {
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      border-top: 1px solid #e3e3e3;
      font-weight: 800;
      font-size: 1.1rem;
      display: table-cell;
      vertical-align: middle;
      align-items : center;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      svg {
        font-size: 1.3rem;
        cursor: pointer;
        margin: .2rem .5rem;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    tr:nth-child(odd) {
      background-color:#e3e3e3;
    }
    tr:nth-child(even) {
      background-color:#fff;
    }
  }

  .new-user {
    width: max-content;
    padding: 0 1.5rem;
    height: 4rem;
    background: #0ad26c;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    text-align: center;
    margin-top: 1.5rem;
      &:hover {
        filter: brightness(0.9);
      }
  }
`;

export const Form = styled.form`
  h2 {
    color: gray;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  select,
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid  #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: lightgray;
    }

    &:nth-of-type(3) {
    width: 50%;
  }
    &:nth-of-type(4) {
    width: 50%;
  }
      margin-bottom: 1.5rem;
    
  }

button[type="submit"] {
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: #0ad26c;
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
  
}
label {
  font-weight: 500;
}
`;

export const CloseModal = styled(GrFormClose)`
position: absolute;
right: 1.5rem;
top: 1.5rem;
cursor: pointer;
transition: opacity .2s;
&:hover {
 opacity: .5;
}
`;