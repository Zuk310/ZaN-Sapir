import styled from 'styled-components';
import { device } from '../../utils/responsive-ui/responsive';
import { Visibility } from '@mui/icons-material';

export const NewUsersBlockContainer = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-bottom: 20px;

    @media ${device.laptopL} {
        margin-right: 20px;

    }
`
export const NewUsersBlockTitle = styled.span`
    font-size: 22px;
    font-weight: 600;
`
export const NewUsersBlockList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`
export const NewUsersBlockItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
    
`

export const NewUsersBlockImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`
export const NewUsersBlockUser = styled.div`
    display: flex;
    flex-direction: column;
`
export const NewUsersBlockUsername = styled.span`
    font-weight: 600;
    cursor: pointer;
`
export const NewUsersBlockButton = styled.button`
       display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
    &:hover{
        background-color: #e7e7f1;
    }
    &:active{
        background-color: #dbdbe6;
    }
`

export const NewUsersBlockIcon = styled(Visibility)`
 font-size: 16px !important;
margin-right: 5px;
`
