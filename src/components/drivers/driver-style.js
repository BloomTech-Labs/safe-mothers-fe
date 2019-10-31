import styled from "styled-components";

export const ratings = {
    1: "#ff4a1e",
    2: "#ff7540",
    3: "#ffaf64",
    4: "#ffd17c",
    5: "#C2E632",
    6: "#35E632",
    7: "#32E6A5",
    8: "#32C5E6",
    9: "#329AE6",
    10: "#3264E5",
};

export const Rating = styled.div`
  width: 50%;
  height: 33px;
  color: white;
  background: ${props => props.bg};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;