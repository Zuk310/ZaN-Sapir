import styled from 'styled-components';

export const TransactionsBlockContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-bottom: 20px;
  overflow-wrap: anywhere;
`
export const TransactionsBlockTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`
export const TransactionsBlockTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`
export const TransactionsBlockThead = styled.thead`

`
export const TransactionsBlockTr = styled.tr`
  text-align: left;
`
export const TransactionsBlockTh = styled.th`
  text-align: left;
`

export const TransactionsBlockTbody = styled.tbody`

`
export const TransactionsBlockTdUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`
export const TransactionsBlockName = styled.span`
cursor: pointer;
`


export const TransactionsBlockTdDate = styled.td`
font-weight: 300;
`
export const TransactionsBlockTdAmount = styled.td`
font-weight: 300;


`
export const TransactionsBlockTdStatus = styled.td`

`

export const TransactionsBlockButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  ${({ type }) => handleStatusType(type)};

`

const handleStatusType = (type) => {
    switch (type) {
    case "approved":
    return `
        background-color: #e5faf2;
        color: #3bb077`
    case "declined":
    return `
        background-color: #fff0f1;
        color: #d95087`
    case "pending":
    return `
        background-color:  #ebf1fe;
        color: #2a7ade`
    default:
    return `
        background-color: #ebf1fe;
        color: #2a7ade`}
}
