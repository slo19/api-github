import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  border-left: 3px solid ${(props) => props.theme.colors.metalDark};
  padding: 0 1rem;
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: normal;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: 1.25;
  margin: 0;
`;

export const Footer = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || props.theme.colors.metalDark};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  font-size: ${(props) => props.theme.fontSize.md};
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;
