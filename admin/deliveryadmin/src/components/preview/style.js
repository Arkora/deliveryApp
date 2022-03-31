import styled from "styled-components";

export const Item = styled.div`
  background-color: #194a50;
  margin-top: 5px;
  color: #ffff;
`;

export const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  row-gap: 50px;
`;

export const ItemCenter = styled.div``;
export const Title = styled.h4`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const ImageDiv = styled.div``;

export const TitleDiv = styled.div`
  font-weight: 600;
`;
export const IngrendientsDiv = styled.div`
  display: inline-block;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Ingrendients = styled.li`
  list-style: none;
`;

export const DeleteButton = styled.button``;

export const IngrendientsSection = styled.div``;

export const Price = styled.h3``;