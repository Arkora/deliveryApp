import styled from "styled-components";
import { ReactComponent as CoffeSVG } from '../../assets/coffeecup.svg';
import { ReactComponent as CakeSVG } from '../../assets/cake.svg';
import { ReactComponent as SteakSVG } from '../../assets/steak.svg';
import { ReactComponent as PizzaSVG } from '../../assets/pizza.svg';
import { ReactComponent as SoupSVG } from '../../assets/soup.svg';

export const CategoriesContainer = styled.div`
    display: flex;
`

export const CoffeSvg = styled(CoffeSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`
export const CakeSvg = styled(CakeSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`

export const SteakSvg = styled(SteakSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`
export const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius:35px;
    background-color: #ffff;
    margin: auto;
    cursor: pointer;
`
export const PizzaSvg = styled(PizzaSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`
export const SoupSvg = styled(SoupSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`