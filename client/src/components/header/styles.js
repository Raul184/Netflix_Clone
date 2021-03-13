import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${({src}) => 
    src ? `../images/misc/${src}.jpg` : 'https://assets.nflxext.com/ffe/siteui/vlv3/399d6794-b770-4b21-992d-a3326710a170/2cd9a2c3-4d52-46dd-99c9-8d77b65625a9/BR-en-20210215-popsignuptwoweeks-perspective_alpha_website_large.jpg'})
    top left / cover no-repeat;
    
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1100px){
    display: flex;
    ${({dontShowSmallViewport}) => dontShowSmallViewport && `background:none`}
  }

  @media (max-width: 600px){
    height: 520px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin: 0 46px;

  @media (max-width: 1000px){
    margin: 0 30px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Feature = styled(BackGround)`
  height: 65%;
`;

export const Logo = styled.img`
  height: 32px;
  width: 112px;

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }
`;

export const Text = styled.p`
  color:white;
  font-size:22px;
  line-height: normal;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .45);
  margin: 0 65px;

  @media (max-width: 1000px){
    margin: 0 30px;
  }
`;

export const FeaturedText = styled.p`
  color:white;
  font-size:40px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .15);
  margin: 120px 0 0 65px;

  @media (max-width: 1000px){
    margin: 0 30px;
  }
`;

export const TextLink = styled(ReactLink)`
  color:white;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({active}) => active === 'true' ? '700' : 'normal'}
  cursor: pointer;

  &:hover {
    font-weight:bold;
  }
  &:last-of-type {
    margin-right:0;
  }
`;

export const Btn = styled(ReactLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover{
    background-color: #f40612;
  }
`;